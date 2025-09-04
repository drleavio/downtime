"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, CheckCircle, ArrowRight, Zap, Star, Globe, Clock, Shield, BarChart3, Headphones } from "lucide-react"
import Navigation from "@/component/navigation"

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

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for small websites and personal projects",
      popular: false,
      features: [
        "5 websites monitored",
        "5-minute check intervals",
        "Email notifications",
        "30-day data retention",
        "Basic uptime reports",
        "SSL monitoring",
        "Community support",
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const,
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      popular: true,
      features: [
        "25 websites monitored",
        "1-minute check intervals",
        "Email + SMS notifications",
        "1-year data retention",
        "Advanced analytics",
        "SSL + domain monitoring",
        "Slack/Discord integration",
        "Custom status pages",
        "Priority support",
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations with complex needs",
      popular: false,
      features: [
        "Unlimited websites",
        "30-second check intervals",
        "All notification channels",
        "Unlimited data retention",
        "Custom dashboards",
        "White-label reports",
        "API access",
        "Team management",
        "SLA guarantees",
        "Dedicated support",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
    },
  ]

  const faqs = [
    {
      question: "What happens during the free trial?",
      answer: "You get full access to all features of your chosen plan for 14 days. No credit card required to start.",
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and can arrange invoicing for enterprise customers.",
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees ever. You only pay the monthly subscription fee for your chosen plan.",
    },
    {
      question: "What if I exceed my monitoring limits?",
      answer: "We'll notify you before you reach your limits and help you upgrade to a suitable plan.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.",
    },
  ]

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
                Simple, Transparent Pricing
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-[var(--font-work-sans)] text-foreground mb-6 text-balance"
            >
              Choose Your{" "}
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
                Plan
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground mb-8 font-[var(--font-open-sans)] text-pretty"
            >
              Start with a 14-day free trial. No credit card required. Cancel anytime.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <Badge className="bg-accent text-accent-foreground font-[var(--font-open-sans)] px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </motion.div>
                )}
                <Card
                  className={`h-full border-border hover:shadow-xl transition-all duration-300 ${
                    plan.popular ? "border-primary shadow-lg scale-105" : ""
                  }`}
                >
                  <CardHeader className="text-center pb-8">
                    <h3 className="text-2xl font-bold font-[var(--font-work-sans)] text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground font-[var(--font-open-sans)] mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl md:text-5xl font-bold font-[var(--font-work-sans)] text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground font-[var(--font-open-sans)] ml-1">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground font-[var(--font-open-sans)]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.div {...scaleOnHover} className="w-full">
                      <Button
                        variant={plan.buttonVariant}
                        size="lg"
                        className={`w-full font-[var(--font-open-sans)] ${
                          plan.popular
                            ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                            : plan.buttonVariant === "outline"
                              ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                              : ""
                        }`}
                      >
                        {plan.buttonText}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison */}
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
              What is Included
            </h2>
            <p className="text-lg text-muted-foreground font-[var(--font-open-sans)] max-w-2xl mx-auto">
              Compare features across all plans to find the perfect fit for your needs.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Globe,
                title: "Global Monitoring",
                description: "Monitor from multiple locations worldwide",
              },
              {
                icon: Clock,
                title: "Fast Check Intervals",
                description: "From 30 seconds to 5 minutes based on plan",
              },
              {
                icon: Shield,
                title: "SSL Monitoring",
                description: "Certificate expiration alerts and monitoring",
              },
              {
                icon: BarChart3,
                title: "Detailed Analytics",
                description: "Performance metrics and uptime reports",
              },
            ].map((feature, index) => (
              <motion.div key={feature.title} variants={fadeInUp} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="w-12 h-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center text-primary"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-lg font-semibold font-[var(--font-work-sans)] text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-[var(--font-open-sans)]">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground font-[var(--font-open-sans)] max-w-2xl mx-auto">
              Got questions? We have got answers. Can not find what you are looking for? Contact our support team.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-border hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold font-[var(--font-work-sans)] text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground font-[var(--font-open-sans)] leading-relaxed">{faq.answer}</p>
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
              Ready to Start Monitoring?
            </h2>
            <p className="text-lg text-primary-foreground/80 font-[var(--font-open-sans)] mb-8">
              Join thousands of businesses that trust downtime to keep their websites running smoothly.
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
                  <Headphones className="mr-2 w-5 h-5" />
                  Contact Sales
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
