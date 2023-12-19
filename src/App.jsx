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
			<p className="read-the-docs">I am fine?</p>
			{/* build-project:
   runs-on: ubuntu-latest
   env:
       VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
       VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
       VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN}}
   steps:
    - name: Checkout code
      uses: actions/checkout@v2
    - name: Install nodejs
      uses: actions/setup-node@v2
      with:
       node-version: "17.0.0"
    - name: Install deps
      run: yarn
    - name: Build the project
      run: yarn build
    - name: Deploy the project
      run: yarn run deploy
    - name: Completion
      run: echo "Done!" */}
		</>
	)
}

export default App
