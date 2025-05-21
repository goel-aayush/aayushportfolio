"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const timelineEvents = [
    {
      year: "2023",
      title: "Senior Web Developer",
      company: "Tech Solutions Inc.",
      description: "Led a team of developers to build scalable web applications using React and Node.js.",
    },
    {
      year: "2021",
      title: "Full Stack Developer",
      company: "Digital Innovations",
      description: "Developed and maintained full-stack applications using Next.js and MongoDB.",
    },
    {
      year: "2019",
      title: "Frontend Developer",
      company: "Creative Web Agency",
      description: "Created responsive and interactive user interfaces using React and Tailwind CSS.",
    },
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-4">
              I'm a passionate web developer with expertise in building modern, responsive, and interactive web
              applications. With a strong foundation in both frontend and backend technologies, I enjoy creating
              seamless user experiences that solve real-world problems.
            </p>
            <p className="text-lg mb-6">
              My journey in web development began over 5 years ago, and since then, I've worked on a variety of projects
              ranging from small business websites to complex enterprise applications. I'm constantly learning and
              adapting to new technologies to stay at the forefront of web development.
            </p>
            <Button className="mb-8">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>

            <h3 className="text-2xl font-semibold mb-4">Experience Timeline</h3>
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l border-primary/50 pb-6 last:pb-0"
                >
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">{event.year}</span>
                  <h4 className="text-lg font-semibold">{event.title}</h4>
                  <p className="text-primary font-medium">{event.company}</p>
                  <p className="mt-1">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Developer Portrait"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
