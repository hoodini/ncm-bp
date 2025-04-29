"use client";

import { useState, useEffect } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";

interface BarChartProps {
  title?: string;
  description?: string;
  data: {
    name: string;
    [key: string]: number | string;
  }[];
  categories: {
    name: string;
    key: string;
    color: string;
    darkColor?: string;
  }[];
  className?: string;
}

export function BarChartComponent({
  title,
  description,
  data,
  categories,
  className,
}: BarChartProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // Set mounted to true after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const isDark = mounted ? resolvedTheme === "dark" : false;
  
  const handleMouseEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };
  
  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const getPercentChange = (key: string) => {
    if (data.length < 2) return 0;
    
    const current = Number(data[data.length - 1][key] || 0);
    const previous = Number(data[data.length - 2][key] || 0);
    
    if (previous === 0) return 0;
    return ((current - previous) / previous) * 100;
  };

  const totalPercentChange = categories.reduce((sum, category) => {
    return sum + getPercentChange(category.key);
  }, 0) / categories.length;

  const trend = totalPercentChange >= 0 ? "up" : "down";
  
  // If not mounted yet, render a minimal version that won't cause hydration issues
  if (!mounted) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>{title || "Bar Chart"}</CardTitle>
          <CardDescription>
            {description || "Comparison of data across categories"}
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
        <CardTitle>{title || "Bar Chart"}</CardTitle>
        <CardDescription>
          {description || "Comparison of data across categories"}
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
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: 20,
                bottom: 5,
              }}
              barGap={8}
              barSize={30}
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
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                iconSize={10}
                formatter={(value) => {
                  return <span className="text-xs">{value}</span>;
                }}
              />
              {categories.map((category) => (
                <Bar
                  key={category.key}
                  dataKey={category.key}
                  name={category.name}
                  fill={isDark ? (category.darkColor || category.color) : category.color}
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                  animationEasing="ease-out"
                  onMouseEnter={(data, index) => handleMouseEnter(data, index)}
                  activeBar={{
                    stroke: isDark ? "#fff" : "#000",
                    strokeWidth: 1,
                    strokeOpacity: 0.1,
                  }}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
} 