import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GiftExpertapp from './GiftExpertapp.jsx'
import "./styles.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GiftExpertapp/>
  </StrictMode>,
)
