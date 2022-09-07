import { Container } from '@mui/material'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Footer from './components/common/Footer'

// componentes
import Header from './components/Header'
import Search from './pages/Search'
import Trending from './pages/Trending'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        <div className='container'>
          <Container>
            <Routes>
              <Route path='/' element={<Trending />} />
              <Route path='/search' element={<Search />} />
            </Routes>
          </Container>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
