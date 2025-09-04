"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, ArrowRight, Zap, Users, Heart, Shield, Globe, TrendingUp, Clock } from "lucide-react"
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

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      description: "Former infrastructure engineer at major tech companies with 10+ years in reliability engineering.",
      image: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwcG5nfGVufDB8fDB8fHww",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      description: "Full-stack developer and monitoring expert who built systems serving millions of users.",
      image: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwcG5nfGVufDB8fDB8fHww",
    },
    {
      name: "Emily Johnson",
      role: "Head of Engineering",
      description: "DevOps specialist focused on building scalable, reliable monitoring infrastructure.",
      image: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwcG5nfGVufDB8fDB8fHww",
    },
    {
      name: "David Kim",
      role: "Head of Customer Success",
      description: "Customer experience expert ensuring our users get maximum value from our platform.",
      image: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwcG5nfGVufDB8fDB8fHww",
    },
  ]

  const values = [
    {
      icon: Shield,
      title: "Reliability First",
      description: "We build our platform with the same reliability standards we help our customers achieve.",
    },
    {
      icon: Heart,
      title: "Customer Obsessed",
      description: "Every feature we build starts with understanding our customers' real-world challenges.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Our worldwide monitoring network ensures comprehensive coverage for businesses everywhere.",
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "We continuously push the boundaries of what's possible in website monitoring technology.",
    },
  ]

  const achievements = [
    { number: "99.99%", label: "Platform Uptime", icon: TrendingUp },
    { number: "50K+", label: "Websites Monitored", icon: Globe },
    { number: "2M+", label: "Checks Per Day", icon: Clock },
    { number: "150+", label: "Countries Served", icon: Users },
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
                <Users className="w-3 h-3 mr-1" />
                Our Story
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-[var(--font-work-sans)] text-foreground mb-6 text-balance"
            >
              Built by{" "}
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
                Engineers
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground mb-8 font-[var(--font-open-sans)] text-pretty"
            >
              We experienced the pain of website downtime firsthand and decided to build the monitoring solution we
              wished existed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-work-sans)] text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground font-[var(--font-open-sans)] leading-relaxed mb-6">
                We believe that every business deserves reliable, accessible website monitoring. Our mission is to
                democratize enterprise-grade monitoring tools, making them available to businesses of all sizes.
              </p>
              <p className="text-lg text-muted-foreground font-[var(--font-open-sans)] leading-relaxed mb-8">
                Founded in 2020 by a team of infrastructure engineers who were frustrated with existing monitoring
                solutions, downtime was built from the ground up to be simple, powerful, and affordable.
              </p>
              <motion.div {...scaleOnHover}>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-[var(--font-open-sans)]">
                  Join Our Mission
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <img
                  src={"https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"}
                  className="rounded-xl shadow-lg h-full aspect-square object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground font-[var(--font-open-sans)] max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div key={value.title} variants={fadeInUp} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center text-primary"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-xl font-semibold font-[var(--font-work-sans)] text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground font-[var(--font-open-sans)] leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground font-[var(--font-open-sans)] max-w-2xl mx-auto">
              The passionate engineers and customer advocates behind downtime.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img

                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <h3 className="text-lg font-semibold font-[var(--font-work-sans)] text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-[var(--font-open-sans)] text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground font-[var(--font-open-sans)] text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-work-sans)] mb-4">Our Impact</h2>
            <p className="text-lg text-primary-foreground/80 font-[var(--font-open-sans)] max-w-2xl mx-auto">
              Numbers that reflect our commitment to reliable monitoring.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div key={achievement.label} variants={fadeInUp} className="text-center">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <achievement.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold font-[var(--font-work-sans)] mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                >
                  {achievement.number}
                </motion.div>
                <div className="text-primary-foreground/80 font-[var(--font-open-sans)]">{achievement.label}</div>
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
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-muted-foreground font-[var(--font-open-sans)] mb-8">
              Become part of the thousands of businesses that trust downtime to keep their websites running smoothly.
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
                  className="font-[var(--font-open-sans)] text-lg px-8 bg-transparent"
                >
                  Contact Us
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
