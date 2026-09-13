# 🚀 Dev Stack Explorer

An interactive, responsive technology exploration web application built with **React 19**, **TypeScript**, and **Tailwind CSS**. Developers can explore frontend  add technologies to build  remove them dynamically with real-time feedback using **React-Toastify**.

---

## ✨ Key Features

- 🎨 **Modern & Responsive UI**: Built with a sticky nav ber, interactive banner section, gradient headings, and a responsive footer.
- 📱 **Mobile Drawer Navigation**: Responsive navigation bar with Hamburger Toggle Button.
- ⚡ **React 19 Suspense & Data Fetching**: Uses the new React 19 `use()` hook combined with `<Suspense>` for asynchronous data handling with a centered loader spinner.
- 🛠️ **Custom Tech Stack Builder**:
  - Add technology items to "Your Stack" list.
  - Dynamically updates selected items count and item details.
  - Automatically disables already-added technologies on the card UI.
- 🔔 **Toast Notifications**: Interactive toast alerts (via `react-toastify`) for:
  - Adding a technology to the stack (`toast.success`)
  - Attempting duplicate additions (`toast.warning`)
  - Removing a single technology (`toast.info`)
  - Clearing the entire stack (`toast.error`)

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: React 19 (TypeScript)
- **Styling**: Tailwind CSS
- **Icons**: React Icons (`react-icons/io`)
- **Notifications**: React-Toastify
