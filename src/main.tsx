import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log("React Entry Point Executing...");

try {
  const root = document.getElementById('root');
  if (!root) throw new Error("Root element not found");

  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} catch (e) {
  console.error("FATAL REACT ERROR:", e);
  document.body.innerHTML = `<div style="padding: 20px; color: red; font-size: 20px;">APP CRASHED: ${e}</div>`;
}
