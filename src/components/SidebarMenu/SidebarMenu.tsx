import React, { useEffect } from 'react'
import styles from './SidebarMenu.module.css'

export type MenuItem = {
  id: string
  label: string
  children?: MenuItem[]
  onClick?: () => void
}

type Props = {
  open: boolean
  onClose: () => void
  items: MenuItem[]
  width?: number
}

export function SidebarMenu({ open, onClose, items, width = 320 }: Props) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <div
        className={`${styles.backdrop} ${open ? styles.show : ''}`}
        onClick={onClose}
        data-testid="backdrop"
      />
      <aside className={`${styles.panel} ${open ? styles.open : ''}`} style={{ width }}>
        <nav>
          <ul className={styles.menu}>
            {items.map((it) => (
              <MenuNode key={it.id} node={it} />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

const MenuNode: React.FC<{ node: MenuItem }> = ({ node }) => {
  const [open, setOpen] = React.useState(false)
  const hasChildren = node.children && node.children.length > 0
  return (
    <li className={styles.item}>
      <div className={styles.row}>
        <button className={styles.labelBtn} onClick={() => { if (node.onClick) node.onClick(); if (hasChildren) setOpen(v => !v) }}>
          {node.label}
        </button>
        {hasChildren && (
          <button className={styles.arrow} onClick={() => setOpen(v => !v)} aria-expanded={open}>
            {open ? '▾' : '▸'}
          </button>
        )}
      </div>
      {hasChildren && open && (
        <ul className={styles.sub}>
          {node.children!.map(c => <MenuNode key={c.id} node={c} />)}
        </ul>
      )}
    </li>
  )
}
