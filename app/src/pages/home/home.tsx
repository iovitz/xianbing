import React from 'react'
import style from './home.module.scss'
import { TabBar } from 'antd-mobile'
import { AppOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    navigate(value)
  }

  const tabs = [
    {
      key: '/dashboard',
      title: t('app.tabbar.dashboard'),
      icon: <AppOutline />
    },
    {
      key: '/todo',
      title: t('app.tabbar.todos'),
      icon: <UnorderedListOutline />
    },
    {
      key: '/me',
      title: '我的',
      icon: <UserOutline />
    }
  ]

  return (
    <div className={style['home-container']}>
      <div className={style['view-wrapper']}>
        <Outlet />
      </div>
      <div className={style.tabbar}>
        <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  )
}
