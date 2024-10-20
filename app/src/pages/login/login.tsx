import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavBar, Form, Button, Input } from 'react-vant'

export default function Login() {
  const { t } = useTranslation()
  const [form] = Form.useForm()
  function onFinish() {
    console.log('Submit')
  }
  return (
    <>
      <NavBar title={t('page-name.login')} />
      <Form
        form={form}
        onFinish={onFinish}
        footer={
          <div style={{ margin: '16px 16px 0' }}>
            <Button round nativeType="submit" type="primary" block>
              {t('pages.login.login')}
            </Button>
          </div>
        }
      >
        <Form.Item labelWidth={40} rules={[{ required: true, message: '字段不能为空' }]} name="email" label={t('common.email')}>
          <Input placeholder={t('pages.login.input-your-email')} />
        </Form.Item>
        <Form.Item labelWidth={40} rules={[{ required: true, message: '请填写密码' }]} name="password" label={t('common.password')}>
          <Input placeholder={t('pages.login.input-your-password')} />
        </Form.Item>
      </Form>
    </>
  )
}
