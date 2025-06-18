'use client'
export default function ModalOverlay({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black/60 text-gray-900 dark:text-gray-100 flex items-center justify-center z-50">
      {children}
    </div>
  )
}
