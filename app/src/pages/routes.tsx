import { Navigate, useRoutes } from 'react-router-dom'
import Home from './home/home'
import React from 'react'
import Login from './login/login'
import Todos from './todos/todos'
import Dashboard from './dashboard/dashboard'
import Me from './me/me'
import NotFound from './notfound/notfound'

export default function AppRoutes() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '',
          // 重定向解决方案
          element: <Navigate to="/dashboard" />
        },
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: '/todo',
          element: <Todos />
        },
        {
          path: '/me',
          element: <Me />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  return elements
}
