import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Layout from './components/layout'
import Game from './pages/game'

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route index element={ <Home />} />
        <Route path='/game' element={ <Game />} />
      </Route>
    </Routes>
  )
}

export default App
