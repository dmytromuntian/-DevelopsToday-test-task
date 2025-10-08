import React, { useState, forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  clearable?: boolean
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type = 'text', clearable = false, label, value, defaultValue, onChange, ...rest } = props
  const [hidden, setHidden] = useState(type === 'password')
  const [internal, setInternal] = useState<string | undefined>(() =>
    typeof value === 'string' ? value : typeof defaultValue === 'string' ? defaultValue : ''
  )

  const isControlled = value !== undefined

  const currentValue = isControlled ? (value as string | undefined) : internal

  const handleClear = () => {
    if (!isControlled) setInternal('')
    if (onChange) {
      // synthetic event to clear
      const ev = { target: { value: '' } } as unknown as React.ChangeEvent<HTMLInputElement>
      onChange(ev)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternal(e.target.value)
    if (onChange) onChange(e)
  }

  const toggleHidden = () => setHidden((v) => !v)

  const inputType = type === 'password' ? (hidden ? 'password' : 'text') : type

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputWrap}>
        <input
          ref={ref}
          className={styles.input}
          type={inputType}
          value={currentValue}
          onChange={handleChange}
          {...rest}
        />
        {type === 'password' && (
          <button
            type="button"
            aria-label={hidden ? 'Show password' : 'Hide password'}
            onClick={toggleHidden}
            className={styles.iconButton}
          >
            {hidden ? (
              // eye icon
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            ) : (
              // eye-off
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a19.8 19.8 0 0 1 4.11-4.86" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M1 1l22 22" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            )}
          </button>
        )}
        {clearable && currentValue && currentValue.length > 0 && (
          <button
            type="button"
            aria-label="Clear"
            onClick={handleClear}
            className={styles.clearButton}
          >
            ×
          </button>
        )}
      </div>
    </div>
  )
})

Input.displayName = 'Input'
export default Input
