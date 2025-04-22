import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider, Box} from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Createpage from './pages/Createpage'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <MantineProvider>
      <Box h={"100vh"} bg={'white'}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/create' element={<Createpage />}></Route>
        </Routes>
      </Box>
    </MantineProvider>
  )
}

export default App