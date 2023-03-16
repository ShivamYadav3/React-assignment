import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import InputForm from './form'
import FormValidation from './form-validetion'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <InputForm/> */}
    <FormValidation/>
  </React.StrictMode>,
)
