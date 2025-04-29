"use client";

import { useState, useEffect } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";

interface AreaChartProps {
  title?: string;
  description?: string;
  data: {
    name: string;
    value: number;
    previousValue?: number;
  }[];
  className?: string;
}

export function AreaChartComponent({
  title,
  description,
  data,
  className,
}: AreaChartProps) {
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

  const getPercentChange = () => {
    if (data.length < 2) return 0;
    
    const currentValue = data[data.length - 1].value;
    const previousValue = data[data.length - 2].value;
    
    if (previousValue === 0) return 0;
    return ((currentValue - previousValue) / previousValue) * 100;
  };

  const percentChange = getPercentChange();
  const trend = percentChange >= 0 ? "up" : "down";
  
  // If not mounted yet, render a minimal version that won't cause hydration issues
  if (!mounted) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>{title || "Area Chart"}</CardTitle>
          <CardDescription>
            {description || "Showing data trends over time"}
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
        <CardTitle>{title || "Area Chart"}</CardTitle>
        <CardDescription>
          {description || "Showing data trends over time"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center gap-2">
          <p className="text-sm font-medium">
            Trending{" "}
            <span className={trend === "up" ? "text-emerald-500" : "text-rose-500"}>
              {trend} by {Math.abs(percentChange).toFixed(1)}%
            </span>{" "}
            this month
          </p>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0,
              }}
              onMouseLeave={handleMouseLeave}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={isDark ? "#9333ea" : "#c084fc"}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={isDark ? "#9333ea" : "#c084fc"}
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="colorPreviousValue" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={isDark ? "#eab308" : "#fef08a"}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={isDark ? "#eab308" : "#fef08a"}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
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
                formatter={(value: number) => [`${value}`, "Value"]}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke={isDark ? "#9333ea" : "#c084fc"}
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
                activeDot={{ 
                  r: 6, 
                  stroke: isDark ? "#c084fc" : "#9333ea",
                  strokeWidth: 2,
                  fill: isDark ? "#1f2937" : "#fff"
                }}
                animationDuration={1500}
                animationEasing="ease-out"
              />
              {data[0]?.previousValue !== undefined && (
                <Area
                  type="monotone"
                  dataKey="previousValue"
                  stroke={isDark ? "#eab308" : "#fef08a"}
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorPreviousValue)"
                  animationDuration={1500}
                  animationEasing="ease-out"
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
} 