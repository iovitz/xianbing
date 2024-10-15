import { NavBar } from 'antd-mobile'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Todos() {
  const { t } = useTranslation()
  return (
    <>
      <NavBar back={null}>{t('app.tabbar.todos')}</NavBar>
    </>
  )
}
