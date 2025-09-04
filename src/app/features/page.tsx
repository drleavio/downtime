"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/component/navigation"
import {
  Activity,
  Bell,
  BarChart3,
  Zap,
  CheckCircle,
  ArrowRight,
  Globe,
  Shield,
  Clock,
  Smartphone,
  TrendingUp,
  AlertTriangle,
  Settings,
  Users,
  Database,
  Wifi,
} from "lucide-react"

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

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

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
                Complete Feature Set
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-[var(--font-work-sans)] text-foreground mb-6 text-balance"
            >
              Powerful{" "}
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
                Features
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground mb-8 font-[var(--font-open-sans)] text-pretty"
            >
              Everything you need to monitor, analyze, and optimize your websites performance and uptime.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-work-sans)] text-foreground mb-4">
              Core Monitoring Features
            </h2>
            <p className="text-lg text-muted-foreground font-[var(--font-open-sans)] max-w-2xl mx-auto">
              Advanced monitoring capabilities designed to keep your websites running at peak performance.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Globe,
                title: "Global Monitoring Network",
                description:
                  "Monitor from 12+ locations worldwide with 30-second check intervals for comprehensive coverage.",
                color: "text-primary",
              },
              {
                icon: Clock,
                title: "Real-Time Response Times",
                description: "Track response times, DNS resolution, and connection speeds with millisecond precision.",
                color: "text-accent",
              },
              {
                icon: Shield,
                title: "SSL Certificate Monitoring",
                description: "Get alerts before your SSL certificates expire and ensure secure connections.",
                color: "text-chart-4",
              },
              {
                icon: AlertTriangle,
                title: "Smart Error Detection",
                description: "Detect HTTP errors, timeouts, and content changes with intelligent filtering.",
                color: "text-destructive",
              },
              {
                icon: TrendingUp,
                title: "Performance Analytics",
                description: "Detailed performance metrics, trends, and historical data analysis.",
                color: "text-chart-2",
              },
              {
                icon: Wifi,
                title: "Network Path Analysis",
                description: "Trace network routes and identify bottlenecks affecting your site's performance.",
                color: "text-chart-3",
              },
            ].map((feature, index) => (
              <motion.div key={feature.title} variants={fadeInUp} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <motion.div
                      className={`w-16 h-16 mb-6 rounded-full bg-muted flex items-center justify-center ${feature.color}`}
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

      {/* Alerting Features */}
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
              Advanced Alerting System
            </h2>
            <p className="text-lg text-muted-foreground font-[var(--font-open-sans)] max-w-2xl mx-auto">
              Get notified instantly through multiple channels when issues are detected.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Bell,
                title: "Multi-Channel Alerts",
                description: "Receive notifications via email, SMS, Slack, Discord, webhooks, and more.",
                features: [
                  "Email notifications",
                  "SMS alerts",
                  "Slack integration",
                  "Discord webhooks",
                  "Custom webhooks",
                  "Mobile push notifications",
                ],
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Manage team access, escalation policies, and on-call schedules.",
                features: [
                  "Team management",
                  "Role-based access",
                  "Escalation policies",
                  "On-call rotations",
                  "Incident acknowledgment",
                  "Team dashboards",
                ],
              },
              {
                icon: Settings,
                title: "Smart Alert Rules",
                description: "Configure intelligent alerting rules to reduce noise and focus on what matters.",
                features: [
                  "Custom alert conditions",
                  "Alert suppression",
                  "Maintenance windows",
                  "Alert grouping",
                  "Severity levels",
                  "Auto-resolution",
                ],
              },
              {
                icon: Smartphone,
                title: "Mobile Experience",
                description: "Full-featured mobile app for monitoring and managing alerts on the go.",
                features: [
                  "Native mobile apps",
                  "Push notifications",
                  "Offline access",
                  "Touch-friendly interface",
                  "Quick actions",
                  "Real-time updates",
                ],
              },
            ].map((feature, index) => (
              <motion.div key={feature.title} variants={fadeInUp} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <motion.div
                      className="w-16 h-16 mb-6 rounded-full bg-muted flex items-center justify-center text-primary"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-xl font-semibold font-[var(--font-work-sans)] text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-[var(--font-open-sans)] leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-muted-foreground font-[var(--font-open-sans)]"
                        >
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Analytics & Reporting */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-work-sans)] text-foreground mb-4">
              Analytics & Reporting
            </h2>
            <p className="text-lg text-muted-foreground font-[var(--font-open-sans)] max-w-2xl mx-auto">
              Comprehensive insights and detailed reports to understand your websites performance.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: BarChart3,
                title: "Performance Dashboards",
                description: "Real-time dashboards with customizable widgets and metrics visualization.",
              },
              {
                icon: Database,
                title: "Historical Data",
                description: "Access years of historical monitoring data with advanced filtering and search.",
              },
              {
                icon: TrendingUp,
                title: "Trend Analysis",
                description: "Identify patterns and trends in your website's performance over time.",
              },
            ].map((feature, index) => (
              <motion.div key={feature.title} variants={fadeInUp} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center text-accent"
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-work-sans)] mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-lg text-primary-foreground/80 font-[var(--font-open-sans)] mb-8">
              Start monitoring your websites today with our comprehensive feature set.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div {...scaleOnHover}>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-[var(--font-open-sans)] text-lg px-12"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div {...scaleOnHover}>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-[var(--font-open-sans)] text-lg px-8 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  View Pricing
                </Button>
              </motion.div>
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
