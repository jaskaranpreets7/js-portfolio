'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { IProjects } from '../projects/page'
import Pill from './Pill'

type DrawerProps = {
  isOpen: boolean
  onClose: () => void
  selectedProject: IProjects | null
}

export default function Drawer({ isOpen, onClose, selectedProject }: DrawerProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [isOpen])

  if (!selectedProject) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed top-0 right-0 h-full w-full md:w-[40%] bg-gray-900 text-white z-50 shadow-lg overflow-y-auto rounded-l-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h2 className="text-lg font-bold">{selectedProject.company}</h2>
              <button onClick={onClose} className="text-pink-400 text-2xl">&times;</button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-6">
              {/* Title */}
              <div>
                <span className="text-xs uppercase tracking-widest text-gray-500">Project Title</span>
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              </div>

              {/* Description */}
              <div>
                <span className="text-xs uppercase tracking-widest text-gray-500">Description</span>
                <p className="text-gray-300 mt-1">{selectedProject.description}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <span className="text-xs uppercase tracking-widest text-gray-500">Tech Stack</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <Pill key={idx} text={tech} />
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <span className="text-xs uppercase tracking-widest text-gray-500">Key Contributions</span>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-300 text-sm">
                  {selectedProject.experience.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
