import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<p className="read-the-docs">Hello world</p>
			<p className="read-the-docs">How are you?</p>
		</>
	)
}

export default App
