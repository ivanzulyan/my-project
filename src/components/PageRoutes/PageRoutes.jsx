import React from 'react'
import Contact from '../../Pages/Contact'
import Project from '../../Pages/Project'
import { Route, Routes } from "react-router-dom";
import Homepage from '../../Pages/Homepage';
import About from '../../Pages/About';
import ProjectsDetail from '../ProjectsPage/ProjectsDetail';

const PageRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:id" element={<ProjectsDetail />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default PageRoutes
