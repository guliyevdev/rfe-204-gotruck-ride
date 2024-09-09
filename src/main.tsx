import { createRoot } from 'react-dom/client'
import 'antd/dist/reset.css'
import App from './App.tsx'
import "@/assets/main.scss"
import "@/index.css"
createRoot(document.getElementById('root')!).render(
    <App />
)
