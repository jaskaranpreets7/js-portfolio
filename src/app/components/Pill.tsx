'use client'
export default function Pill({ text }: { text: string }) {
  return (
    <span className="px-4 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm font-medium">
      {text}
    </span>
  )
}
