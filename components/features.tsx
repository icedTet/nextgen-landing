"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Wifi, Shield, TrendingUp, Zap, DollarSign, Lock } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Earn Passive Income",
    description: "Get paid for your unused bandwidth. The more you share, the more you earn. Payments are automatic and transparent."
  },
  {
    icon: Zap,
    title: "Runs in Background",
    description: "Lightweight and efficient. Our app uses minimal resources and won't slow down your device or internet."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols. Your data and privacy are always protected."
  },
  {
    icon: Wifi,
    title: "Smart Bandwidth Sharing",
    description: "Intelligent algorithms ensure your own internet usage is never compromised. You stay in control."
  },
  {
    icon: TrendingUp,
    title: "Real-time Analytics",
    description: "Track your earnings, bandwidth usage, and performance metrics in real-time through our dashboard."
  },
  {
    icon: Lock,
    title: "Full Privacy Control",
    description: "Decide what to share and when. Pause anytime with one click. Your network, your rules."
  }
];

export function Features() {
  return (
    <section id="features" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to start earning from your internet connection
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group hover:scale-105">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
