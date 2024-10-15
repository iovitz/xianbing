import { Footer, List, NavBar } from 'antd-mobile'
import { PayCircleOutline, SetOutline, UnorderedListOutline } from 'antd-mobile-icons'
import { noop } from 'lodash'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Me() {
  const { t } = useTranslation()
  return (
    <>
      <NavBar back={null}>{t('app.tabbar.mine')}</NavBar>

      <List header="可点击列表">
        <List.Item prefix={<UnorderedListOutline />} onClick={noop}>
          账单
        </List.Item>
        <List.Item prefix={<PayCircleOutline />} onClick={noop}>
          总资产
        </List.Item>
        <List.Item prefix={<SetOutline />} onClick={noop}>
          设置
        </List.Item>
      </List>
      <Footer content="No More"></Footer>
    </>
  )
}
