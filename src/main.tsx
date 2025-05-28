import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BackgroundEffect } from './components/backgroundEffect.tsx'
import { BrowserRouter } from 'react-router-dom';
import { Cursor } from './components/Cursor.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>
      <BackgroundEffect />
      <Cursor />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
