"use client";

import { useState } from "react";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";

interface PieChartProps {
  title?: string;
  description?: string;
  data: {
    name: string;
    value: number;
  }[];
  className?: string;
  donut?: boolean;
  totalText?: string;
}

export function PieChartComponent({
  title,
  description,
  data,
  className,
  donut = true,
  totalText,
}: PieChartProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const handleMouseEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };
  
  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  // Pastel colors for the pie chart
  const COLORS = [
    isDark ? '#c084fc' : '#d8b4fe',  // Purple
    isDark ? '#fef08a' : '#fef9c3',  // Yellow
    isDark ? '#93c5fd' : '#bfdbfe',  // Blue
    isDark ? '#86efac' : '#bbf7d0',  // Green
    isDark ? '#fb7185' : '#fda4af',  // Red
    isDark ? '#67e8f9' : '#a5f3fc',  // Cyan
    isDark ? '#fdba74' : '#fed7aa',  // Orange
    isDark ? '#d8b4fe' : '#e9d5ff',  // Violet
  ];

  const renderActiveShape = (props: any) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      percent,
      name,
      value,
    } = props;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 8}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        {donut && totalText && (
          <text
            x={cx}
            y={cy}
            dy={0}
            textAnchor="middle"
            fill={isDark ? "#e5e7eb" : "#374151"}
            className="font-medium text-lg"
          >
            {totalText}
          </text>
        )}
      </g>
    );
  };

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title || "Pie Chart"}</CardTitle>
        <CardDescription>
          {description || "Distribution of values"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                innerRadius={donut ? 80 : 0}
                outerRadius={120}
                paddingAngle={2}
                dataKey="value"
                activeIndex={activeIndex !== null ? activeIndex : undefined}
                activeShape={renderActiveShape}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                animationDuration={1000}
                animationBegin={0}
                animationEasing="ease"
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]} 
                    stroke={isDark ? "#1f2937" : "#fff"}
                    strokeWidth={2}
                  />
                ))}
              </Pie>
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
                formatter={(value: number) => {
                  const percentage = ((value / total) * 100).toFixed(1);
                  return [`${value} (${percentage}%)`, "Value"];
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-sm truncate">{entry.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 