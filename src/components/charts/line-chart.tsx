"use client";

import { useState, useEffect } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";

interface LineChartProps {
  title?: string;
  description?: string;
  data: {
    name: string;
    [key: string]: number | string;
  }[];
  series: {
    name: string;
    key: string;
    color: string;
    darkColor?: string;
  }[];
  className?: string;
}

export function LineChartComponent({
  title,
  description,
  data,
  series,
  className,
}: LineChartProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeLineIndex, setActiveLineIndex] = useState<number | null>(null);
  
  // Set mounted to true after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const isDark = mounted ? resolvedTheme === "dark" : false;
  
  const handleMouseEnter = (_: any, index: number) => {
    setActiveLineIndex(index);
  };
  
  const handleMouseLeave = () => {
    setActiveLineIndex(null);
  };

  const getPercentChange = (key: string) => {
    if (data.length < 2) return 0;
    
    const current = Number(data[data.length - 1][key] || 0);
    const previous = Number(data[data.length - 2][key] || 0);
    
    if (previous === 0) return 0;
    return ((current - previous) / previous) * 100;
  };

  // Calculate average trend for all series
  const totalPercentChange = series.reduce((sum, serie) => {
    return sum + getPercentChange(serie.key);
  }, 0) / series.length;

  const trend = totalPercentChange >= 0 ? "up" : "down";
  
  // If not mounted yet, render a minimal version that won't cause hydration issues
  if (!mounted) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>{title || "Line Chart"}</CardTitle>
          <CardDescription>
            {description || "Showing trends over time"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-2">
            <p className="text-sm font-medium">
              Loading chart data...
            </p>
          </div>
          <div className="h-[300px]">
            {/* Empty space for chart */}
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title || "Line Chart"}</CardTitle>
        <CardDescription>
          {description || "Showing trends over time"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center gap-2">
          <p className="text-sm font-medium">
            Trending{" "}
            <span className={trend === "up" ? "text-emerald-500" : "text-rose-500"}>
              {trend} by {Math.abs(totalPercentChange).toFixed(1)}%
            </span>{" "}
            this month
          </p>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: 20,
                bottom: 5,
              }}
              onMouseLeave={handleMouseLeave}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                vertical={false}
                stroke={isDark ? "#333" : "#eee"} 
              />
              <XAxis
                dataKey="name"
                stroke={isDark ? "#888" : "#888"}
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke={isDark ? "#888" : "#888"}
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? "#1f2937" : "#fff",
                  borderColor: isDark ? "#374151" : "#e5e7eb",
                  borderRadius: "0.375rem",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
                itemStyle={{
                  color: isDark ? "#e5e7eb" : "#374151",
                }}
                labelStyle={{
                  color: isDark ? "#e5e7eb" : "#374151",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
                formatter={(value) => [`${value}`, ""]}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                iconSize={8}
                formatter={(value) => {
                  return <span className="text-xs">{value}</span>;
                }}
              />
              {series.map((serie, index) => (
                <Line
                  key={serie.key}
                  type="monotone"
                  dataKey={serie.key}
                  name={serie.name}
                  stroke={isDark ? (serie.darkColor || serie.color) : serie.color}
                  strokeWidth={activeLineIndex === index ? 3 : 2}
                  dot={{
                    r: 4,
                    fill: isDark ? "#1f2937" : "#fff",
                    stroke: isDark ? (serie.darkColor || serie.color) : serie.color,
                    strokeWidth: 2,
                  }}
                  activeDot={{
                    r: 6,
                    fill: isDark ? "#1f2937" : "#fff",
                    stroke: isDark ? (serie.darkColor || serie.color) : serie.color,
                    strokeWidth: 3,
                  }}
                  onMouseEnter={(data) => handleMouseEnter(data, index)}
                  animationDuration={1500}
                  animationEasing="ease-out"
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
} 