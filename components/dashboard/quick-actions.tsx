"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, RefreshCw, Settings, CreditCard } from "lucide-react";

const actions = [
  {
    icon: Download,
    label: "Request Payout",
    description: "Available: $135.50",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: RefreshCw,
    label: "Restart Node",
    description: "Optimize connection",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Settings,
    label: "Adjust Settings",
    description: "Manage preferences",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: CreditCard,
    label: "Payment Info",
    description: "Update details",
    color: "from-orange-500 to-red-500",
  },
];

export function QuickActions() {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Quick Actions</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Button
                variant="outline"
                className="w-full h-auto p-4 flex flex-col items-start gap-2 group hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-3 w-full">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center`}
                  >
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-sm">{action.label}</p>
                    <p className="text-xs text-muted-foreground">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );
}
