import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavBar } from 'react-vant'

export default function Todos() {
  const { t } = useTranslation()
  return (
    <>
      <NavBar title={t('page-name.todos')} leftArrow={false} />
    </>
  )
}
