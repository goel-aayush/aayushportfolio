"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  liveUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment integration.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality and real-time updates.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media platforms with data visualization and reporting features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Chart.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description: "A chat application with real-time messaging, user authentication, and message history.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with a modern design.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 6,
    title: "Weather Application",
    description: "A weather application with location-based forecasts, interactive maps, and historical data.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "OpenWeather API", "Leaflet", "CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
]

// Get all unique tags from projects
const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)))

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredProjects = selectedTag ? projects.filter((project) => project.tags.includes(selectedTag)) : projects

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" ref={ref} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4">
            My Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Here are some of my recent projects. Filter by technology to see specific examples of my work.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge
              variant={selectedTag === null ? "default" : "outline"}
              className="cursor-pointer text-sm py-1 px-3"
              onClick={() => setSelectedTag(null)}
            >
              All
            </Badge>
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                className="cursor-pointer text-sm py-1 px-3"
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="flex-grow p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
