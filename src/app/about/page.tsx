'use client'
import { motion } from 'framer-motion'
import Pill from '../components/Pill'

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className='text-gray-800 dark:text-gray-200 max-w-4xl mx-auto py-10 px-4 md:px-8'
    >
      <section className="mb-12">
        <h1 className="text-5xl font-bold mb-4">👋 About Me</h1>
        <p className="text-lg leading-relaxed">
          {`I'm a Senior Software Engineer with over 8 years of experience designing and building scalable SaaS platforms and enterprise solutions. My passion lies in crafting interactive and performant front-end/full-stack experiences using technologies like <b>ReactJS, TypeScript, Redux, NestJS, NodeJS, PostgreSQL, and AWS</b>. I excel in collaborative environments, leading cross-functional teams and integrating AI/ML-driven features to solve complex problems.`}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-4">🚀 Skills</h2>
        <div className='space-y-3'>
          <div className='flex flex-wrap gap-2 items-center'>
            <strong>Languages:</strong>
            {["JavaScript", "TypeScript", "HTML", "Python", "SQL", "CSS", "SCSS", "Tailwind", "Rust", "C++"].map(skill => <Pill key={skill} text={skill} />)}
          </div>
          <div className='flex flex-wrap gap-2 items-center'>
            <strong>Frameworks/Libraries:</strong>
            {["ReactJS", "Redux", "React Native", "Node", "NestJS", "Express", "Angular2+", "Bootstrap", "JQuery"].map(skill => <Pill key={skill} text={skill} />)}
          </div>
          <div className='flex flex-wrap gap-2 items-center'>
            <strong>Databases:</strong>
            {["PostgreSQL", "Elastic", "MySQL", "MongoDB"].map(skill => <Pill key={skill} text={skill} />)}
          </div>
          <div className='flex flex-wrap gap-2 items-center'>
            <strong>Methodologies:</strong>
            {["Agile/Scrum", "REST APIs", "SDLC", "RWA", "SPA"].map(skill => <Pill key={skill} text={skill} />)}
          </div>
          <div className='flex flex-wrap gap-2 items-center'>
            <strong>Unit Testing:</strong>
            {["React Testing Library", "Jest", "Enzyme", "Jasmine", "Karma"].map(skill => <Pill key={skill} text={skill} />)}
          </div>
          <div className='flex flex-wrap gap-2 items-center'>
            <strong>CI/CD:</strong>
            {["Jenkins", "GitLab CI", "Bitbucket"].map(skill => <Pill key={skill} text={skill} />)}
          </div>
          <div className='flex flex-wrap gap-2 items-center'>
            <strong>Infrastructure:</strong>
            {["AWS", "Docker"].map(skill => <Pill key={skill} text={skill} />)}
          </div>
          <div className='flex flex-wrap gap-2 items-center'>
            <strong>UX/UI:</strong>
            {["Figma", "Zeplin"].map(skill => <Pill key={skill} text={skill} />)}
          </div>
          <div className='flex flex-wrap gap-2 items-center'>
            <strong>Tools:</strong>
            {["GIT", "GitLab", "SVN", "BitBucket", "Pendo", "Mixpanel", "New Relic", "Google Analytics"].map(skill => <Pill key={skill} text={skill} />)}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold mb-4">🎓 Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Bachelor’s in Electrical Engineering</h3>
            <p className="text-gray-500 dark:text-gray-400">Guru Nanak Dev Engineering College, Ludhiana, Punjab - India</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Strategic & Critical Thinking (Non-degree)</h3>
            <p className="text-gray-500 dark:text-gray-400">Rhode Island School of Design, Providence, Rhode Island</p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
