"use client";
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Adobe Inc.',
    role: 'Senior Software Engineer - Front End',
    date: 'October 2025 - Present',
    points: [
      'Led cross-functional collaboration with Product, Design, and offshore Engineering teams to drive feature planning, technical decision-making, and phased rollouts, ensuring tight alignment with business and customer goals.',
      'Architected and delivered scalable, AI-powered customer-facing features for Acrobat Spaces using React, Redux, and TypeScript within a modular drop-in architecture used across multiple surfaces.',
      'Owned the end-to-end A/B experimentation lifecycle—from ideation and proof-of-concept to production rollout and upsell optimization—directly influencing user retention and conversion metrics.',
      'Built reusable front-end infrastructure to support rapid experimentation, feature flagging, and data-driven UI iteration at scale.',
      'Partnered closely with analytics and growth teams to translate experiment insights into high-impact product improvements.'
    ]
  },
  {
    company: 'Bolster.AI',
    role: 'Senior Software Engineer - Full Stack',
    date: 'May 2021 - October 2025',
    points: [
      'Architected scalable SaaS features using ReactJS, NestJS, ElasticSearch, and PostgreSQL.',
      'Improved system response times by 25% through API optimization and caching.',
      'Defined coding standards and boosted test coverage by 40%.',
      'Led SEO optimizations increasing organic traffic by 25%.'
    ]
  },
  {
    company: 'Infosys Limited',
    role: 'Software Engineer - Frontend',
    date: 'Sep 2017 – May 2021',
    points: [
      'Developed enterprise React and Angular components.',
      'Built MERN/MEAN stack apps following Agile practices.',
      'Improved UI performance by 30% via code refactoring.'
    ]
  },
  {
    company: 'Tesla Motors',
    role: 'Quality Assurance Engineer',
    date: 'Oct 2016 - Sep 2017',
    points: [
      'Conducted QA testing for Model S, X, 3 assembly lines.',
      'Implemented automated test plans reducing defect rates by 20%.'
    ]
  },
];

export default function Experience() {
  return (
    <section className="py-20 bg-white text-gray-900 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <h3 className="text-2xl font-semibold">{exp.company}</h3>
            <p className="text-lg text-gray-600">{exp.role} | {exp.date}</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
