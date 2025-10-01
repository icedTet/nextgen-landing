"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { weeklyEarnings } from "@/lib/mock-data";

const mockData = weeklyEarnings.thisWeek;

export function EarningsChart() {
  const maxEarnings = Math.max(...mockData.map((d) => d.earnings));

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Weekly Earnings</h3>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-sm text-muted-foreground">This Week</span>
          </div>
        </div>

        {/* Chart */}
        <div className="flex items-end justify-between gap-3 h-64">
          {mockData.map((item, index) => (
            <motion.div
              key={item.day}
              className="flex-1 flex flex-col items-center gap-2"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Bar */}
              <motion.div
                className="w-full bg-gradient-to-t from-primary to-primary/50 rounded-t-lg relative group cursor-pointer"
                initial={{ height: 0 }}
                animate={{ height: `${(item.earnings / maxEarnings) * 100}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Tooltip */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-primary/90 text-primary-foreground px-3 py-2 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  <div className="font-bold">${item.earnings.toFixed(2)}</div>
                  <div className="text-[10px] opacity-80">{item.bandwidth.toFixed(1)} GB shared</div>
                </div>
              </motion.div>

              {/* Label */}
              <span className="text-xs text-muted-foreground font-medium">
                {item.day}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <div className="pt-4 border-t border-border/50 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total This Week</p>
            <p className="text-2xl font-bold text-primary">
              ${mockData.reduce((sum, d) => sum + d.earnings, 0).toFixed(2)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Avg. Daily</p>
            <p className="text-xl font-semibold">
              ${(mockData.reduce((sum, d) => sum + d.earnings, 0) / 7).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
