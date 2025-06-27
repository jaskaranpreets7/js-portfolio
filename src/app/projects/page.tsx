'use client'
import { motion } from 'framer-motion'
import { useCallback, useMemo, useState } from 'react'
import Drawer from '../components/Drawer'
import { v4 as uuidv4 } from 'uuid';
import { TypeToLabel, projects } from '../constants/appConstants';

export type IProjects = {
  id?:string
  title: string
  company: string
  description: string
  type: 'professional' | 'non-professional'
  techStack:string[]
  experience:string[]
  screenshots?: string[]
}

export default function ProjectsTimeline() {
  const [isOpen,setIsOpen] = useState(false)
  const [allProjects] = useState<IProjects[]>(projects.map((p:IProjects) => ({...p, id:uuidv4()})))
  const [selectedProject,setSelectedProject] = useState<IProjects | null>(null)

  const groupedData = useMemo(() => {
    return allProjects.reduce((acc: {[key:string]: IProjects[]}, cur: IProjects) => {
      if (!acc[cur.type]) {
        acc[cur.type] = []
      }
      acc[cur.type].push(cur)
      return acc
    }, {})
  }, [allProjects])


  const handleProjectClick = useCallback((id:string) => {
    setIsOpen(true)
    const project = allProjects.find(p => p.id === id)
    if (project){
      setSelectedProject(project)
    }
  },[allProjects])


  const onCloseDrawer = useCallback(() => {
    setIsOpen(false)

    setSelectedProject(null)
  },[])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="px-4 md:px-10 py-10 relative overflow-hidden"
    >
    <h1 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-500">Projects</h1>
    <div className="relative z-10 border-l-2 border-gray-600 ">
      {Object.keys(groupedData).map((projectKey) => (
        <div key={projectKey} className="mb-8">
          <h2 className="ml-8 inline-block text-lg font-semibold tracking-wide uppercase bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">
            {TypeToLabel[projectKey]}
          </h2>

          {groupedData[projectKey].map((project:IProjects, index: number) => (
            <div key={index} className="relative" onClick={() => handleProjectClick(project.id as string)}>
              <div className="absolute w-4 h-4 bg-pink-400 rounded-full -left-2 top-1/2 transform -translate-y-1/2"></div>
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="ml-8 mb-6 p-6 rounded-xl shadow-lg backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:shadow-pink-400/10 transition cursor-pointer"
                >
                <div className="space-y-4">
                  <div>
                    <span className="block text-xs uppercase text-gray-500 tracking-widest mb-1">Company</span>
                    <h4 className="text-lg font-semibold text-pink-400">{project.company}</h4>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-gray-500 tracking-widest mb-1">Project Title</span>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-gray-500 tracking-widest mb-1">Description</span>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      ))}
    </div>
    <Drawer isOpen={isOpen} onClose={onCloseDrawer} selectedProject={selectedProject}/>

  </motion.div>
)
}