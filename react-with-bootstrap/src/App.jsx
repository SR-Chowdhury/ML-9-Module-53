import { useState } from 'react'
import './App.css'
import { Button } from 'react-bootstrap'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        {/* <Button variant="primary">Primary</Button>{' '} */}
        <Header/>
    </div>
  )
}

export default App
