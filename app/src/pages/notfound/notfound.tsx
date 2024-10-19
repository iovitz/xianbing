import { Button, Empty, NavBar, Space } from 'antd-mobile'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <>
      <NavBar back={null}>{t('notfound.page-not-found')}</NavBar>
      <Space justify="center" block>
        <Empty style={{ padding: '100px 0 50px 0' }} imageStyle={{ width: 128 }} description={t('notfound.page-no-content')} />
      </Space>
      <Space justify="center" block>
        <Button color="primary">{t('notfound.back-to-dashboard')}</Button>
        <Button>{t('common.contact-us')}</Button>
      </Space>
    </>
  )
}
