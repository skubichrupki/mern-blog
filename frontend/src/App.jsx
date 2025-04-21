import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider, Button } from '@mantine/core';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <MantineProvider>
      <>
        <p>hi mom</p>
        <Button>Hi Mom</Button>
      </>
    </MantineProvider>
  )
}

export default App
