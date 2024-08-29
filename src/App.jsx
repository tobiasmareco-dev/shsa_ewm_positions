import { PositionProvider } from './context/PositionsContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import Details from './pages/Details';

function App() {
  return (
    <>
      <BrowserRouter>
        <PositionProvider>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/details/:number' element={<Details />} />
            <Route path='*' element={<MainPage />} />
          </Routes>
        </PositionProvider>
      </BrowserRouter>
    </>
  )
}

export default App
