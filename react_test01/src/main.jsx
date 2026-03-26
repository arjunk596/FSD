import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './components/Counter.jsx'
import StudentResult from './components/StudentResult.jsx'
import StudentInfo from './components/StudentInfo.jsx'
import RegistrationForm from './components/RegistrationForm.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
        <RegistrationForm />
    </StrictMode>,
)
