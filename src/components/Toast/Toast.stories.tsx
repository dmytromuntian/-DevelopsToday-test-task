import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ToastProvider, useToasts } from './ToastProvider'

const meta: Meta<typeof ToastProvider> = {
  title: 'Toast',
  component: ToastProvider,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ToastProvider>

// --------------------------------------
// 1️⃣ Класична сторі з controls
// --------------------------------------
export const Default: Story = {
  render: () => (
    <ToastProvider>
      <InnerToastDemo />
    </ToastProvider>
  ),
}

const InnerToastDemo = () => {
  const { push } = useToasts()
  const [type, setType] = useState<'success' | 'error' | 'info'>('success')

  return (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <select value={type} onChange={(e) => setType(e.target.value as 'success' | 'error' | 'info')}>
        <option value="success">Success</option>
        <option value="error">Error</option>
        <option value="info">Info</option>
      </select>
      <button onClick={() => push({ type, message: `This is a ${type} toast!` })}>
        Show Toast
      </button>
    </div>
  )
}

// --------------------------------------
// 2️⃣ Анімація Toast
// --------------------------------------
export const AnimatedToast: Story = {
  render: () => (
    <ToastProvider>
      <AnimatedToastInner />
    </ToastProvider>
  ),
}

const AnimatedToastInner = () => {
  const { push } = useToasts()
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Toast</button>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
          >
            <button onClick={() => push({ type: 'info', message: 'Animated toast!' })}>
              Add Toast
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
