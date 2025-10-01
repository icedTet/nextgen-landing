"use client";

import { motion } from "framer-motion";
import { Download, Settings, TrendingUp, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Download & Install",
    description: "Get our lightweight app for Windows, Mac, or Linux. Installation takes less than 60 seconds.",
    step: "01"
  },
  {
    icon: Settings,
    title: "Configure Settings",
    description: "Set your preferences for bandwidth sharing. Control everything from a simple, intuitive dashboard.",
    step: "02"
  },
  {
    icon: TrendingUp,
    title: "Start Earning",
    description: "Let the app run in the background. Watch your earnings grow as you help power the internet.",
    step: "03"
  },
  {
    icon: CheckCircle,
    title: "Get Paid",
    description: "Automatic payments to your preferred method. Minimum payout is just $10. No hassle, no delays.",
    step: "04"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-4">
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
              How It Works
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Start earning in just 4 simple steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group hover:scale-105 h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg font-bold shadow-lg shadow-primary/50">
                    {step.step}
                  </div>

                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connection arrow - mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            Ready to get started? Download now and start earning in minutes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
