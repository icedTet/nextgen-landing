"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { bandwidthStats } from "@/lib/mock-data";

export function BandwidthUsage() {
  const totalBandwidth = bandwidthStats.total;
  const usedBandwidth = bandwidthStats.used;
  const percentage = (usedBandwidth / totalBandwidth) * 100;

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Bandwidth Usage</h3>
          <span className="text-sm text-muted-foreground">This Month</span>
        </div>

        {/* Circular Progress */}
        <div className="flex items-center justify-center">
          <div className="relative w-48 h-48">
            {/* Background Circle */}
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                className="text-muted/20"
              />
              {/* Progress Circle */}
              <motion.circle
                cx="96"
                cy="96"
                r="88"
                stroke="url(#gradient)"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 88}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 88 }}
                animate={{
                  strokeDashoffset: 2 * Math.PI * 88 * (1 - percentage / 100),
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.p
                className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {percentage.toFixed(0)}%
              </motion.p>
              <p className="text-sm text-muted-foreground">Used</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 rounded-lg bg-primary/10">
            <p className="text-2xl font-bold text-primary">{usedBandwidth} GB</p>
            <p className="text-xs text-muted-foreground mt-1">Shared</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-muted/20">
            <p className="text-2xl font-bold">{totalBandwidth - usedBandwidth} GB</p>
            <p className="text-xs text-muted-foreground mt-1">Remaining</p>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2 pt-4 border-t border-border/50">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Upload Speed</span>
            <span className="font-medium">{bandwidthStats.uploadSpeed} Mbps</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Download Speed</span>
            <span className="font-medium">{bandwidthStats.downloadSpeed} Mbps</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Active Connections</span>
            <span className="font-medium text-green-500">{bandwidthStats.activeNodes} Nodes</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
