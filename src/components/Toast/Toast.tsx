import React, { useEffect } from 'react'
import './toast.css'

export type ToastType = 'info' | 'success' | 'error' | 'warning'

export type ToastProps = {
  id: string
  message: React.ReactNode
  type?: ToastType
  duration?: number // ms
  onClose: (id: string) => void
  canClose?: boolean
}

export function Toast({ id, message, type = 'info', duration = 3000, onClose, canClose = true }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(() => onClose(id), duration)
    return () => clearTimeout(t)
  }, [id, duration, onClose])

  return (
    <div className={`toast toast-${type}`} role="status" aria-live="polite">
      <div className="toast-body">{message}</div>
      {canClose && (
        <button className="toast-close" aria-label="Close" onClick={() => onClose(id)}>
          ×
        </button>
      )}
    </div>
  )
}
