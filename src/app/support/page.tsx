"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Activity,
  ArrowRight,
  Zap,
  MessageCircle,
  Mail,
  Phone,
  BookOpen,
  Users,
  Clock,
  CheckCircle,
  Send,
  Headphones,
  FileText,
  Video,
  Search,
} from "lucide-react"
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

export default function SupportPage() {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 for Pro & Enterprise",
      responseTime: "< 2 minutes",
      action: "Start Chat",
      color: "text-primary",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive answers",
      availability: "24/7 for all plans",
      responseTime: "< 4 hours",
      action: "Send Email",
      color: "text-accent",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      availability: "Business hours (Enterprise)",
      responseTime: "Immediate",
      action: "Schedule Call",
      color: "text-chart-4",
    },
  ]

  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      link: "Browse Docs",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for common tasks",
      link: "Watch Videos",
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other users and share knowledge",
      link: "Join Community",
    },
    {
      icon: FileText,
      title: "Status Page",
      description: "Real-time status of our monitoring infrastructure",
      link: "Check Status",
    },
  ]

  const faqs = [
    {
      question: "How do I set up my first monitor?",
      answer:
        "After signing up, click 'Add Monitor' in your dashboard, enter your website URL, and configure your alert preferences. Your monitor will start checking within minutes.",
    },
    {
      question: "What should I do if I receive a false positive alert?",
      answer:
        "Check your website manually first. If it's accessible, the issue might be temporary network congestion. You can adjust sensitivity settings or contact support for assistance.",
    },
    {
      question: "How can I add team members to my account?",
      answer:
        "Go to Settings > Team Management, click 'Invite Member', enter their email, and assign appropriate permissions. They'll receive an invitation to join your monitoring account.",
    },
    {
      question: "Can I customize my notification preferences?",
      answer:
        "Yes! You can set up different notification channels (email, SMS, Slack) for different monitors and configure escalation policies in your account settings.",
    },
    {
      question: "How do I interpret the uptime percentage?",
      answer:
        "Uptime percentage shows the ratio of successful checks to total checks. For example, 99.9% uptime means your site was accessible for 99.9% of all monitoring checks.",
    },
    {
      question: "What happens if I exceed my monitoring limits?",
      answer:
        "We'll notify you before you reach your limits. You can upgrade your plan or we'll help you optimize your monitoring setup to stay within your current plan's limits.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
                <Headphones className="w-3 h-3 mr-1" />
                We are Here to Help
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-[var(--font-work-sans)] text-foreground mb-6 text-balance"
            >
              Get{" "}
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
                Support
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground mb-8 font-[var(--font-open-sans)] text-pretty"
            >
              Our expert support team is ready to help you get the most out of your monitoring setup.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
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
              Choose Your Support Channel
            </h2>
            <p className="text-lg text-muted-foreground font-[var(--font-open-sans)] max-w-2xl mx-auto">
              Multiple ways to get help, tailored to your needs and urgency level.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {supportOptions.map((option, index) => (
              <motion.div key={option.title} variants={fadeInUp} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center ${option.color}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <option.icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-xl font-semibold font-[var(--font-work-sans)] text-foreground mb-4">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground font-[var(--font-open-sans)] leading-relaxed mb-6">
                      {option.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center text-sm text-muted-foreground font-[var(--font-open-sans)]">
                        <Clock className="w-4 h-4 mr-2" />
                        {option.availability}
                      </div>
                      <div className="flex items-center justify-center text-sm text-muted-foreground font-[var(--font-open-sans)]">
                        <Zap className="w-4 h-4 mr-2" />
                        Response: {option.responseTime}
                      </div>
                    </div>
                    <motion.div {...scaleOnHover}>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-[var(--font-open-sans)]">
                        {option.action}
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

      {/* Resources Section */}
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
              Self-Service Resources
            </h2>
            <p className="text-lg text-muted-foreground font-[var(--font-open-sans)] max-w-2xl mx-auto">
              Find answers quickly with our comprehensive knowledge base and community resources.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-border hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="w-12 h-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center text-primary"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <resource.icon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-lg font-semibold font-[var(--font-work-sans)] text-foreground mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground font-[var(--font-open-sans)] text-sm leading-relaxed mb-4">
                      {resource.description}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary/80 font-[var(--font-open-sans)]"
                    >
                      {resource.link}
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-work-sans)] text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground font-[var(--font-open-sans)] leading-relaxed mb-8">
                Can not find what you are looking for? Send us a detailed message and we will get back to you as soon as
                possible.
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-muted-foreground font-[var(--font-open-sans)]">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  support@downtime.com
                </div>
                <div className="flex items-center text-muted-foreground font-[var(--font-open-sans)]">
                  <Clock className="w-5 h-5 mr-3 text-primary" />
                  Response within 4 hours
                </div>
                <div className="flex items-center text-muted-foreground font-[var(--font-open-sans)]">
                  <CheckCircle className="w-5 h-5 mr-3 text-primary" />
                  Available 24/7 for all plans
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-border">
                <CardHeader>
                  <h3 className="text-xl font-semibold font-[var(--font-work-sans)] text-foreground">Contact Form</h3>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium font-[var(--font-open-sans)] text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="John" className="font-[var(--font-open-sans)]" />
                    </div>
                    <div>
                      <label className="text-sm font-medium font-[var(--font-open-sans)] text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Doe" className="font-[var(--font-open-sans)]" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium font-[var(--font-open-sans)] text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input type="email" placeholder="john@example.com" className="font-[var(--font-open-sans)]" />
                  </div>
                  <div>
                    <label className="text-sm font-medium font-[var(--font-open-sans)] text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input placeholder="How can we help you?" className="font-[var(--font-open-sans)]" />
                  </div>
                  <div>
                    <label className="text-sm font-medium font-[var(--font-open-sans)] text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="Please describe your question or issue in detail..."
                      rows={5}
                      className="font-[var(--font-open-sans)]"
                    />
                  </div>
                  <motion.div {...scaleOnHover}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-[var(--font-open-sans)]">
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground font-[var(--font-open-sans)] max-w-2xl mx-auto">
              Quick answers to common questions about our monitoring service.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-border hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold font-[var(--font-work-sans)] text-foreground mb-3 flex items-start">
                      <Search className="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground font-[var(--font-open-sans)] leading-relaxed ml-8">
                      {faq.answer}
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
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-work-sans)] mb-6">Still Need Help?</h2>
            <p className="text-lg text-primary-foreground/80 font-[var(--font-open-sans)] mb-8">
              Our support team is standing by to help you succeed with your website monitoring.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div {...scaleOnHover}>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-[var(--font-open-sans)] text-lg px-12"
                >
                  Start Live Chat
                  <MessageCircle className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div {...scaleOnHover}>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-[var(--font-open-sans)] text-lg px-8 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Browse Documentation
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
