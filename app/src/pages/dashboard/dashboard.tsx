import Block from '@/components/block'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Flex, NavBar, Space } from 'react-vant'
import Task from './task/task'

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
            <Card.Header>{t('pages.dashboard.month-expenses')}</Card.Header>
            <Card.Body>
              <h2 className="text-4xl">33.0</h2>
            </Card.Body>
            <Card.Footer>
              <div className="text-left">
                <Flex>
                  <Flex.Item span={12}>
                    <h3>{t('pages.dashboard.month-income')}</h3>
                    <p>123123</p>
                  </Flex.Item>
                  <Flex.Item span={8}>
                    <h3>{t('pages.dashboard.month-balance')}</h3>
                    <p>123123</p>
                  </Flex.Item>
                </Flex>
              </div>
            </Card.Footer>
          </Card>
        </Space>
      </Block>
      <Task />
    </>
  )
}
