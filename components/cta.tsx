"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Github, Twitter, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-[150px] animate-pulse delay-1000" />

            <div className="relative z-10 text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="block">Ready to Start</span>
                  <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Earning Today?
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of users who are already earning passive income. Download now and get started in minutes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button size="lg" className="text-lg px-8 py-6 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 backdrop-blur-sm bg-background/50"
                >
                  View Documentation
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-8"
              >
                <p className="text-sm text-muted-foreground mb-4">
                  Available for Windows, macOS, and Linux
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    All systems operational
                  </span>
                  <span className="text-muted-foreground/50">•</span>
                  <span>v2.4.1 latest</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-border/50"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Logo and Copyright */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  Conduit
                </h3>
                <p className="text-sm text-muted-foreground">
                  © 2024 Conduit. All rights reserved.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms</a>
                <a href="#" className="hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
