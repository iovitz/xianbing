import React from 'react'
import style from './home.module.scss'
import { FriendsO, HomeO, Search } from '@react-vant/icons'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Tabbar } from 'react-vant'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { pathname } = location

  return (
    <div className={style['home-container']}>
      <div className={style['view-wrapper']}>
        <Outlet />
      </div>
      <div className={style.tabbar}>
        <Tabbar
          value={pathname}
          placeholder={true}
          onChange={v => {
            navigate(v as string)
          }}
        >
          <Tabbar.Item name="/dashboard" icon={<HomeO />}>
            {t('page-name.dashboard')}
          </Tabbar.Item>
          <Tabbar.Item name="/todos" icon={<Search />}>
            {t('page-name.todos')}
          </Tabbar.Item>
          <Tabbar.Item name="/me" icon={<FriendsO />}>
            {t('page-name.mine')}
          </Tabbar.Item>
        </Tabbar>
      </div>
    </div>
  )
}
