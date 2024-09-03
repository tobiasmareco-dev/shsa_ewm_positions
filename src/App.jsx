import { PositionProvider } from './context/PositionsContext';
import { HashRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import Details from './pages/Details';

function App() {
  return (
    <>
      <HashRouter>
        <PositionProvider>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/details/:number' element={<Details />} />
            <Route path='*' element={<MainPage />} />
          </Routes>
        </PositionProvider>
      </HashRouter>
    </>
  )
}

export default App
