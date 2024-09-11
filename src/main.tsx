import { createRoot } from 'react-dom/client'
import 'antd/dist/reset.css'
import App from './App.tsx'
import "@/assets/main.scss"
import "@/index.css"
import { Provider } from 'react-redux'
import { store } from '@/redux/store.ts'
createRoot(document.getElementById('root')!).render(

    <Provider store={store}>
    <App />
    </Provider>
)
