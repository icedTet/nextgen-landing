"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  TrendingUp,
  Wifi,
  Settings,
  CreditCard,
  HelpCircle,
  LogOut,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Earnings", href: "/dashboard/earnings", icon: TrendingUp },
  { name: "Bandwidth", href: "/dashboard/bandwidth", icon: Wifi },
  { name: "Activity", href: "/dashboard/activity", icon: Activity },
  { name: "Payments", href: "/dashboard/payments", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Help", href: "/dashboard/help", icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-card/50 backdrop-blur-xl border-r border-border/50 p-6 flex flex-col">
      {/* Logo */}
      <Link href="/">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer mb-8"
        >
          Conduit
        </motion.h1>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-primary/20 text-primary border border-primary/50"
                    : "hover:bg-primary/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <Button
        variant="ghost"
        className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive"
      >
        <LogOut className="w-5 h-5" />
        Logout
      </Button>
    </div>
  );
}
