import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ItsApp from './AnimationProject/ItsApp.jsx'
import NavBar from './AnimationScroll/NavBar.jsx'
// import App from './Animation/TagSearch.jsx'
import App from "./AnimationProject4/App.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
