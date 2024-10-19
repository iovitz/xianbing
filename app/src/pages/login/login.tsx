import { Input, Form, NavBar, Button, Space } from 'antd-mobile'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Login() {
  const { t } = useTranslation()
  function onSubmit() {
    console.log('Submit')
  }
  return (
    <>
      <NavBar back={null}>{t('page-name.login')}</NavBar>
      <Form
        requiredMarkStyle="asterisk"
        style={{
          '--border-bottom': 'none',
          '--border-top': 'none'
        }}
      >
        <Space
          direction="vertical"
          style={{
            width: '100%'
          }}
        >
          <Form.Item name="email" label={t('common.email')}>
            <Input placeholder={t('pages.login.input-your-email')} />
          </Form.Item>
          <Form.Item name="password" label={t('common.password')} rules={[{ required: true }]}>
            <Input placeholder={t('pages.login.input-your-password')} />
          </Form.Item>
          <Form.Item name="code" label={t('common.verify-code')} rules={[{ required: true }]}>
            <Input placeholder={t('pages.login.input-your-code')} />
          </Form.Item>
          <Form.Item>
            <Button block color="primary" onClick={onSubmit} size="large">
              {t('pages.login.login')}
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </>
  )
}
