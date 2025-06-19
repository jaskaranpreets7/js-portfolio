'use client'
export default function Pill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center justify-center px-4 py-1 rounded-full text-sm font-medium text-white bg-white/10 dark:bg-gray-800 backdrop-blur-sm shadow-sm hover:shadow-md hover:bg-white/20 transition-all duration-200">
      {text}
    </span>
  )
}