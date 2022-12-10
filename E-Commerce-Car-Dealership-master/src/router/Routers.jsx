

import React from 'react'
import { Routes , Route, Navigate } from 'react-router-dom'
import { Home } from '../Home/Home'
import { BlogDetails } from '../BlogDetails/BlogDetails'
import { About } from '../About/About'
import { Blog } from '../Blog/Blog'
import { CarDetail } from '../Car_Detail/CarDetail'
import { Cars } from '../Cars/Cars'
import { Contact } from '../Contact/Contact'
import { Faq } from '../Faq/Faq'
import { Team } from '../Team/Team'
import { Terms } from '../Terms/Terms'
import { Testimonials } from '../Testimonials/Testimonials'





export const Routers = () => {
  return (
 
  <Routes>
    <Route path='/' element={<Navigate to= '/home'/>}  />
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/cars' element={<Cars/>} />
    <Route path='/cars/:slug' element={<CarDetail/>} />
    <Route path='/blog' element={<Blog/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/faq' element={<Faq/>} />
    <Route path='/team' element={<Team/>} />
    <Route path='/terms' element={<Terms/>} />
    <Route path='/testimonials' element={<Testimonials/>} />
    <Route path='/blogs/:slug' element={<BlogDetails/>} />
  </Routes>
)
}

