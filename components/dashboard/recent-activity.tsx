"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, Wifi, Check } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "earning",
    icon: DollarSign,
    title: "Earnings Deposited",
    description: "Weekly payment processed",
    amount: "+$24.50",
    time: "2 hours ago",
    color: "text-green-500",
  },
  {
    id: 2,
    type: "bandwidth",
    icon: Wifi,
    title: "Bandwidth Shared",
    description: "45.2 GB transferred",
    amount: "45.2 GB",
    time: "5 hours ago",
    color: "text-blue-500",
  },
  {
    id: 3,
    type: "milestone",
    icon: TrendingUp,
    title: "Milestone Reached",
    description: "100 GB total shared",
    amount: "100 GB",
    time: "1 day ago",
    color: "text-purple-500",
  },
  {
    id: 4,
    type: "payout",
    icon: Check,
    title: "Payout Completed",
    description: "Bank transfer successful",
    amount: "+$85.00",
    time: "3 days ago",
    color: "text-green-500",
  },
];

export function RecentActivity() {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <button className="text-sm text-primary hover:underline">View All</button>
        </div>

        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/20 transition-colors cursor-pointer group"
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors`}>
                <activity.icon className={`w-5 h-5 ${activity.color}`} />
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
                  <span className={`text-sm font-semibold ${activity.color} whitespace-nowrap`}>
                    {activity.amount}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );
}
