import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Testimonials from "../Pages/Testimonials/Testimonials";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element:<Home />
      },
      {
        path: '/about',
        element:<About />
      },
      {
        path: '/testimonial',
        element:<Testimonials />
      },
      {
        path: '/portfolio',
        element:<Portfolio />
      },
      {
        path: '/services',
        element:<Services />
      },
      {
        path: '/blog',
        element:<Blog />
      },
      
      {
        path: '/contact',
        element:<Contact />
      },
      
    ]
  }

])