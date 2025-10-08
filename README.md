# React Component Library — Test Assessment

## Setup
1. `npm install`
2. `npm run storybook` — starts Storybook at `http://localhost:6006`

## Components
- **Input**
  - Props: `type`, `clearable`, `label`, and native input props
  - Features: password visibility toggle, clear button for `clearable`

- **Toast**
  - Use `ToastProvider` and `useToasts()` hook to push toasts
  - Props: `message`, `type`, `duration`, `canClose`
  - Appears bottom-right and auto-dismisses

- **SidebarMenu**
  - Props: `open`, `onClose`, `items`
  - Slides from right, nested submenus, closes on backdrop click

## Stories
Open Storybook and explore:
- Input: `Input / Input`
- Toast: `Feedback / Toast`
- SidebarMenu: `Navigation / SidebarMenu`

## Screenshots
(Please replace placeholders with actual screenshots)
- Input (text): `./screenshots/input-text.png`
- Input (password toggled): `./screenshots/input-password.png`
- Toast (success): `./screenshots/toast-success.png`
- Toast (error): `./screenshots/toast-error.png`
- SidebarMenu (one-level): `./screenshots/sidebar-one.png`
- SidebarMenu (nested open): `./screenshots/sidebar-nested.png`
- Storybook UI: `./screenshots/storybook.png`

## Notes & Bonus
- Add `@storybook/addon-controls` for live editing in Storybook
- Animations are CSS-based; can be swapped for Framer Motion for extra polish
- Example: to show a Toast from anywhere, wrap your app with `<ToastProvider>` and call `const { push } = useToasts()`.

