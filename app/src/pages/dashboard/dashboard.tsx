import { Card, NavBar } from 'antd-mobile'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Dashboard() {
  const { t } = useTranslation()
  return (
    <>
      <NavBar back={null}>{t('page-name.dashboard')}</NavBar>

      <Card
        headerStyle={{
          color: '#1677ff'
        }}
        title="卡片标题"
      >
        卡片内容
      </Card>
    </>
  )
}
