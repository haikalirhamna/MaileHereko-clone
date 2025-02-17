import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

import GuestLayout from './components/Layouts/GuestLayout'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Movies from './pages/Movies'
import TvShows from './pages/TvShows'
import Login from './pages/Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<TvShows />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail/:mediaType/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
