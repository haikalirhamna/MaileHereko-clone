import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

import GuestLayout from '../src/components/Layouts/GuestLayout'
import Home from '../src/pages/Home'
import Detail from '../src/pages/Detail'
import Movies from '../src/pages/Movies'
import TvShows from '../src/pages/TvShows'
import Login from '../src/pages/Login'
import PageNotFound from '../src/pages/404'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<TvShows />} />
          <Route path="/detail/:mediaType/:id" element={<Detail />} />
        </Route>
        <Route path='/*' element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
