## Fast React Pizza 🍕

A small pizza ordering app built with **React + Vite** and **React Router**, following the “Fast React Pizza Co.” tutorial project.

### What’s implemented so far

- **App routing**

  - `"/"` → `Home`
  - `"/menu"` → `Menu` (with data loader using `getMenu`)
  - `"/cart"` → `Cart`
  - `"/order/new"` → `CreateOrder`
  - `"/order/:orderId"` → `Order` (loads a specific order from the API with `getOrder`)

- **Order flow**

  - Dummy cart data wired into `CreateOrder` for now.
  - `Order` page uses a **route loader** to fetch order details from the backend API using the `orderId` URL param.

- **Global layout & loading state**

  - `AppLayout` wraps the app with a header, main content, and cart overview.
  - Uses `useNavigation()` to detect when routes are loading and show a spinner.

- **Modern bar loader**
  - `Spinner` component renders a multi-bar loader.
  - `.loader` and `.loader-bar` styles in `index.css` create a colorful, animated bar waveform for a modern loading experience.

### Scripts

- **Install dependencies**  
  `npm install`

- **Start dev server**  
  `npm run dev`

- **Build for production**  
  `npm run build`

- **Preview production build**  
  `npm run preview`
