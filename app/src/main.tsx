import { createRoot } from 'react-dom/client'
import React from 'react'
import AppRoutes from './pages/routes'
import { HashRouter } from 'react-router-dom'
import './shared/i18n/i18n'
import './style/theme.scss'
import './style/initial.scss'
import './style/mini-tailwind.scss'

createRoot(document.getElementById('XIANBING_APP')!).render(
  <HashRouter>
    <AppRoutes />
  </HashRouter>
)
