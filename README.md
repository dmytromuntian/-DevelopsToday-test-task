# -DevelopsToday-test-task

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
<img width="1918" height="972" alt="image" src="https://github.com/user-attachments/assets/d3202f34-00ed-4fa2-815d-b117d2cec326" />
- Input (text): `<img width="1918" height="968" alt="image" src="https://github.com/user-attachments/assets/043e234c-b84f-44ca-abf6-0e3223d4df43" />
<img width="1918" height="967" alt="image" src="https://github.com/user-attachments/assets/298037b5-93b7-4337-beb5-764bdb966ff4" />
- Input (password toggled): <img width="1896" height="950" alt="image" src="https://github.com/user-attachments/assets/4de5019c-dec1-465a-bfd6-6d05d07d8cf7" />

<img width="1918" height="970" alt="image" src="https://github.com/user-attachments/assets/b382edd6-fbde-4517-963c-77f8e7f8ffa4" />
- SidebarMenu: <img width="1918" height="980" alt="image" src="https://github.com/user-attachments/assets/bd2183e8-7b7b-4c43-96ba-03510aafc4b8" />

