import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './indexV2.css'
import AppV2Original from './AppV2Original.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppV2Original />
  </StrictMode>,
)
