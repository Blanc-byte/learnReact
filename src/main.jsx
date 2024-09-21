import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navigation } from './myProj/webPage.jsx'
import { Person } from './odinProj/f.jsx'
import { Well } from './firstProj/act.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Well />
    {/* <Person />
    <Navigation /> 
    <App />*/}
  </StrictMode>,
)
