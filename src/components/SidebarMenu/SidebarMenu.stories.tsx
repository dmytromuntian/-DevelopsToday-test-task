import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SidebarMenu } from './SidebarMenu'
import type { MenuItem } from './SidebarMenu'

const meta: Meta<typeof SidebarMenu> = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
  },
}

export default meta
type Story = StoryObj<typeof SidebarMenu>

// -------------------------
// Масив з id як string
// -------------------------
const sampleItems: MenuItem[] = [
  { id: '1', label: 'Home' },
  {
    id: '2',
    label: 'Products',
    children: [
      { id: '2-1', label: 'Product A' },
      { id: '2-2', label: 'Product B' },
    ],
  },
  { id: '3', label: 'About' },
]

// --------------------------------------
// 1️⃣ Базовий Sidebar з controls
// --------------------------------------
export const Default: Story = {
  args: {
    items: sampleItems,
    open: true,
  },
}

// --------------------------------------
// 2️⃣ Анімація відкриття/закриття
// --------------------------------------
export const Animated: Story = {
  render: (args) => <AnimatedSidebar items={args.items} />,
  args: {
    items: sampleItems,
  },
}

const AnimatedSidebar = ({ items }: { items: MenuItem[] }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ marginBottom: '1rem', padding: '0.5rem 1rem' }}
      >
        Toggle Sidebar
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: 250,
              height: '100%',
              backgroundColor: '#eee',
              padding: '1rem',
              zIndex: 1000,
            }}
          >
            <SidebarMenu
              items={items}
              open={isOpen}            // ✅ передаємо пропс open
              onClose={() => setIsOpen(false)} // ✅ передаємо onClose
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
