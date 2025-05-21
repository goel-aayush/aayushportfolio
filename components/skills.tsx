"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Skill = {
  name: string
  level: number
  category: string
}

type Project = {
  title: string
  description: string
  technologies: string[]
  category: string
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills: Skill[] = [
    { name: "React", level: 90, category: "frontend" },
    { name: "Next.js", level: 85, category: "frontend" },
    { name: "HTML", level: 95, category: "frontend" },
    { name: "CSS", level: 90, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Chakra UI", level: 80, category: "frontend" },
    { name: "Shadcn UI", level: 85, category: "frontend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express", level: 85, category: "backend" },
    { name: "MongoDB", level: 80, category: "backend" },
    { name: "REST API", level: 85, category: "backend" },
    { name: "GraphQL", level: 75, category: "backend" },
    { name: "React", level: 90, category: "fullstack" },
    { name: "Next.js", level: 85, category: "fullstack" },
    { name: "Node.js", level: 80, category: "fullstack" },
    { name: "MongoDB", level: 80, category: "fullstack" },
    { name: "TypeScript", level: 85, category: "fullstack" },
    { name: "Git", level: 85, category: "fullstack" },
  ]

  const relatedProjects: Project[] = [
    {
      title: "E-commerce Dashboard",
      description: "A responsive dashboard for managing products and orders",
      technologies: ["React", "Tailwind CSS", "Chart.js"],
      category: "frontend",
    },
    {
      title: "Personal Blog",
      description: "A static blog built with Next.js and MDX",
      technologies: ["Next.js", "MDX", "Tailwind CSS"],
      category: "frontend",
    },
    {
      title: "RESTful API Service",
      description: "A backend service for managing user data",
      technologies: ["Node.js", "Express", "MongoDB"],
      category: "backend",
    },
    {
      title: "Authentication Service",
      description: "A secure authentication system with JWT",
      technologies: ["Node.js", "Express", "JWT"],
      category: "backend",
    },
    {
      title: "Social Media Platform",
      description: "A full-stack social media application",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "fullstack",
    },
    {
      title: "Project Management Tool",
      description: "A tool for managing projects and tasks",
      technologies: ["Next.js", "Express", "MongoDB", "TypeScript"],
      category: "fullstack",
    },
  ]

  const filteredSkills = skills.filter((skill) => skill.category === activeTab)
  const filteredProjects = relatedProjects.filter((project) => project.category === activeTab)

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
    <section id="skills" ref={ref} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4">
            My Skills & Expertise
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I specialize in a range of technologies across the web development stack. Here's a breakdown of my technical
            expertise.
          </motion.p>
        </motion.div>

        <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="frontend" className="space-y-8">
            <SkillsContent skills={filteredSkills} projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="backend" className="space-y-8">
            <SkillsContent skills={filteredSkills} projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="fullstack" className="space-y-8">
            <SkillsContent skills={filteredSkills} projects={filteredProjects} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function SkillsContent({
  skills,
  projects,
}: {
  skills: Skill[]
  projects: Project[]
}) {
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
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
      <div>
        <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-6">Related Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
