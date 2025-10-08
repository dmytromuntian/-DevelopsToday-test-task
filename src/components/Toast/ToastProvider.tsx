import React, { createContext, useContext, useCallback, useState } from 'react'
import { Toast } from './Toast'
import './toast.css'

type ToastItem = {
  id: string
  message: React.ReactNode
  type?: 'info'|'success'|'error'|'warning'
  duration?: number
  canClose?: boolean
}

const ToastContext = createContext<{ push: (t: Omit<ToastItem,'id'>) => void } | null>(null)

export const useToasts = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToasts must be used within ToastProvider')
  return ctx
}

export const ToastProvider: React.FC<{children:React.ReactNode}> = ({ children }) => {
  const [list, setList] = useState<ToastItem[]>([])

  const push = useCallback((t: Omit<ToastItem,'id'>) => {
    const id = Math.random().toString(36).slice(2,9)
    setList((s) => [...s, { id, ...t }])
  }, [])

  const remove = useCallback((id:string) => {
    setList((s) => s.filter(x => x.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div className="toast-wrapper" aria-live="polite" aria-atomic="true">
        {list.map((item) => (
          <div key={item.id} className="toast-show">
            <Toast
              id={item.id}
              message={item.message}
              type={item.type}
              duration={item.duration}
              onClose={remove}
              canClose={item.canClose}
            />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
