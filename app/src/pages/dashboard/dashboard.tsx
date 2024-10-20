import Block from '@/components/block'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, NavBar, Space } from 'react-vant'

export default function Dashboard() {
  const { t } = useTranslation()
  return (
    <>
      <NavBar title={t('page-name.dashboard')} leftArrow={false} />

      <Block>
        <Space
          direction="vertical"
          style={{
            width: '100%'
          }}
        >
          <Card round>
            <Card.Header>本月数据</Card.Header>
            <Card.Body>卡片内容区域</Card.Body>
            <Card.Footer>
              <div
                style={{
                  textAlign: 'left'
                }}
              >
                卡片内容区域
              </div>
            </Card.Footer>
          </Card>
        </Space>
      </Block>
    </>
  )
}
