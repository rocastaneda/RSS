// Containers
import Home from 'Containers/Home'
import Nosotros from 'Containers/Nosotros'
import Login from 'Containers/Login'

// Containers
import Blog from 'App/blog'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/nosotros',
    component: Nosotros
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/blog',
    component: Blog
  }
]

export default routes
