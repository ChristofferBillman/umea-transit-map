import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
	//Temporarily commented out while testing api stuff.
	//<React.StrictMode>
	<App />
	//</React.StrictMode>
)
