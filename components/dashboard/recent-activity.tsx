"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, Wifi, Check, Server, Trophy } from "lucide-react";
import { recentActivities } from "@/lib/mock-data";

// Map icon names to components
const iconMap = {
  dollar: DollarSign,
  wifi: Wifi,
  trophy: Trophy,
  check: Check,
  server: Server,
};

// Map types to colors
const colorMap = {
  earning: "text-green-500",
  bandwidth: "text-blue-500",
  milestone: "text-purple-500",
  payout: "text-green-500",
  connection: "text-cyan-500",
};

export function RecentActivity() {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <button className="text-sm text-primary hover:underline">View All</button>
        </div>

        <div className="space-y-4">
          {recentActivities.slice(0, 4).map((activity, index) => {
            const Icon = iconMap[activity.icon as keyof typeof iconMap];
            const color = colorMap[activity.type as keyof typeof colorMap];

            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/20 transition-colors cursor-pointer group"
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{activity.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {activity.description}
                      </p>
                    </div>
                    <span className={`text-sm font-semibold ${color} whitespace-nowrap`}>
                      {activity.amount}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
