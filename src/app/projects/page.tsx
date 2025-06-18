'use client'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

type IProjects = {
  title: string
  company: string
  description: string
  type: 'professional' | 'non-professional'
}

const TypeToLabel: Record<string, string> = {
  professional: 'Professional',
  'non-professional': 'Non-Professional',
}


const projects: IProjects[] = [
  {
    company: 'Bolster AI',
    title: 'SaaS Platform & Internal Applications',
    description: 'Enterprise-grade B2B SaaS platform for automated detection and takedown of phishing and scam URLs across channels like web, social media, app stores, abuse mailboxes, and dark web. Included pre & post monitoring and internal workflows.',
    type: 'professional'
  },
  {
    company: '7-Eleven',
    title: 'Live View Tracker',
    description: 'Real-time ReactJS web application enabling store associates to monitor mobile checkout activity and in-store customer interactions across all locations.',
    type: 'professional'
  },
  {
    company: '7-Eleven',
    title: 'Cash & Audit Management System',
    description: 'Global financial system for managing cash audits, reconciliation workflows, and store-level compliance reporting using a cloud-based architecture.',
    type: 'professional'
  },
  {
    company: 'PepsiCo',
    title: 'Internal Microfrontend Platform',
    description: 'Modular internal enterprise platform leveraging microfrontend architecture to support department-specific applications while ensuring shared authentication, theming, and component libraries.',
    type: 'professional'
  },
  {
    company: 'Blue Cross Blue Shield - Carefirst',
    title: 'Customer Insurance Portal',
    description: 'Self-service portal where users can manage insurance plans, assign primary physicians, file claims, and track the status of healthcare services for themselves and their dependents.',
    type: 'professional'
  },
  {
    company: 'Blogs Manager LLC',
    title: 'Blogsmanager.com',
    description: 'Personal project to centralize and organize users’ favorite blogs in a single intuitive interface.',
    type: 'non-professional'
  }
]

export default function ProjectsTimeline() {
  const groupedData = useMemo(() => {
    return projects.reduce((acc: {[key:string]: IProjects[]}, cur: IProjects) => {
      if (!acc[cur.type]) {
        acc[cur.type] = []
      }
      acc[cur.type].push(cur)
      return acc
    }, {})
  }, [])

  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-4 md:px-10 py-10 relative overflow-hidden"
      >
      <h1 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-500">Projects</h1>
      <div className="relative z-10 border-l-2 border-gray-600">
        {Object.keys(groupedData).map((projectKey) => (
          <div key={projectKey} className="mb-8">
            <h2 className="ml-8 inline-block text-lg font-semibold tracking-wide uppercase bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">
              {TypeToLabel[projectKey]}
            </h2>

            {groupedData[projectKey].map((project:IProjects, index: number) => (
              <div key={index} className="relative">
                <div className="absolute w-4 h-4 bg-pink-400 rounded-full -left-2 top-1/2 transform -translate-y-1/2"></div>
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="ml-8 mb-6 p-6 rounded-xl shadow-lg backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                  <h3 className="text-xl font-semibold mb-1 text-white">{project.title}</h3>
                  <h4 className="text-md font-medium text-gray-400 mb-2">{project.company}</h4>
                  <p className="text-gray-300">{project.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  )
}