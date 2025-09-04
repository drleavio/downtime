"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Bell, BarChart3, Zap, CheckCircle, ArrowRight, Globe } from "lucide-react"
import { DialogDemo } from "@/component/modal"
import { useContext } from "react"
import StepContext from "@/store/useStore"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

export default function HomePage() {
  const context = useContext(StepContext)
  const open = context?.open ?? false
  const setOpen = context?.setOpen ?? (() => {})
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-[var(--font-work-sans)] text-foreground">downtime</span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Features", href: "/features" },
              { name: "Pricing", href: "/pricing" },
              { name: "About", href: "/about" },
              { name: "Support", href: "/support" },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-[var(--font-open-sans)]"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <motion.div {...scaleOnHover}>
           <DialogDemo open={open} setOpen={setOpen}/>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge variant="secondary" className="mb-4 font-[var(--font-open-sans)]">
                <Zap className="w-3 h-3 mr-1" />
                Real-time Monitoring
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-[var(--font-work-sans)] text-foreground mb-6 text-balance"
            >
              Stay Ahead of{" "}
              <motion.span
                className="text-primary"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(8, 145, 178, 0)",
                    "0 0 20px rgba(8, 145, 178, 0.3)",
                    "0 0 0px rgba(8, 145, 178, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Downtime
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground mb-8 font-[var(--font-open-sans)] text-pretty"
            >
              Real-time monitoring for your websites performance with instant alerts and detailed analytics.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div {...scaleOnHover}>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-[var(--font-open-sans)] text-lg px-8"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div {...scaleOnHover}>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-[var(--font-open-sans)] text-lg px-8 bg-transparent"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-work-sans)] text-foreground mb-4">
              Powerful Monitoring Features
            </h2>
            <p className="text-lg text-muted-foreground font-[var(--font-open-sans)] max-w-2xl mx-auto">
              Everything you need to keep your websites running smoothly and your users happy.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Globe,
                title: "Real-Time Monitoring",
                description: "Monitor your websites 24/7 with checks every 30 seconds from multiple global locations.",
                color: "text-primary",
              },
              {
                icon: Bell,
                title: "Instant Alerts",
                description: "Get notified immediately via email, SMS, or Slack when your site goes down.",
                color: "text-accent",
              },
              {
                icon: BarChart3,
                title: "Detailed Analytics",
                description: "Comprehensive uptime reports, response time trends, and performance insights.",
                color: "text-chart-4",
              },
            ].map((feature, index) => (
              <motion.div key={feature.title} variants={fadeInUp} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center ${feature.color}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-xl font-semibold font-[var(--font-work-sans)] text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-[var(--font-open-sans)] leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "30s", label: "Check Frequency" },
              { number: "12", label: "Global Locations" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div key={stat.label} variants={fadeInUp} className="space-y-2">
                <motion.div
                  className="text-3xl md:text-4xl font-bold font-[var(--font-work-sans)]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-primary-foreground/80 font-[var(--font-open-sans)]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-work-sans)] text-foreground mb-6">
              Ready to Monitor Your Website?
            </h2>
            <p className="text-lg text-muted-foreground font-[var(--font-open-sans)] mb-8">
              Join thousands of businesses that trust downtime to keep their websites running smoothly.
            </p>
            <motion.div {...scaleOnHover}>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-[var(--font-open-sans)] text-lg px-12"
              >
                Start Free Trial
                <CheckCircle className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Activity className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold font-[var(--font-work-sans)] text-foreground">downtime</span>
            </div>

            <div className="flex space-x-6 text-sm text-muted-foreground font-[var(--font-open-sans)]">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground font-[var(--font-open-sans)]">
            © 2024 downtime. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
