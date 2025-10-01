"use client";

import { motion } from "framer-motion";
import { Sidebar } from "@/components/dashboard/sidebar";
import { StatCard } from "@/components/dashboard/stat-card";
import { EarningsChart } from "@/components/dashboard/earnings-chart";
import { BandwidthUsage } from "@/components/dashboard/bandwidth-usage";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { DollarSign, TrendingUp, Wifi, Users } from "lucide-react";
import { ParticleSystem } from "@/components/particle-system";
import { performanceMetrics, bandwidthStats, monthlyEarnings } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <ParticleSystem />

      {/* Gradient overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-purple-900/10 via-background to-cyan-900/10" />

      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here&apos;s your earnings overview.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Earnings"
            value={`$${performanceMetrics.totalEarnings.toFixed(2)}`}
            change="+12.5%"
            icon={DollarSign}
            trend="up"
            delay={0.1}
          />
          <StatCard
            title="This Month"
            value={`$${monthlyEarnings[monthlyEarnings.length - 1].earnings.toFixed(2)}`}
            change="+8.2%"
            icon={TrendingUp}
            trend="up"
            delay={0.2}
          />
          <StatCard
            title="Bandwidth Shared"
            value={`${bandwidthStats.used} GB`}
            change="+15.3%"
            icon={Wifi}
            trend="up"
            delay={0.3}
          />
          <StatCard
            title="Active Nodes"
            value={bandwidthStats.activeNodes.toString()}
            change="+1"
            icon={Users}
            trend="up"
            delay={0.4}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Earnings Chart - spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-2"
          >
            <EarningsChart />
          </motion.div>

          {/* Bandwidth Usage - spans 1 column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <BandwidthUsage />
          </motion.div>
        </div>

        {/* Activity and Actions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <RecentActivity />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <QuickActions />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
