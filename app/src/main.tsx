import { createRoot } from 'react-dom/client'
import React from 'react'
import AppRoutes from './pages/routes'
import { BrowserRouter } from 'react-router-dom'
import './shared/i18n/i18n'
import './style/theme.scss'
import './style/initial.scss'

createRoot(document.getElementById('XIANBING_APP')!).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
)
