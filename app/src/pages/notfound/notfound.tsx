import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Empty, NavBar, Space } from 'react-vant'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <>
      <NavBar title={t('page-name.not-found')} leftArrow={false} />{' '}
      <Empty
        description={t('notfound.page-no-content')}
        style={{
          textAlign: 'center'
        }}
      >
        <Space>
          <Button style={{ width: 160 }} round type="primary">
            {t('common.contact-us')}
          </Button>
          <Button style={{ width: 160 }} round>
            {t('notfound.back-to-dashboard')}
          </Button>
        </Space>
      </Empty>
    </>
  )
}
