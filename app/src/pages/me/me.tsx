import Block from '@/components/block'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Cell, Image, NavBar, Tag } from 'react-vant'

export default function Me() {
  const { t } = useTranslation()
  return (
    <>
      <NavBar title={t('page-name.mine')} leftArrow={false} />

      <Block>
        <Card round>
          <Card.Body>
            <div className="flex">
              <Image className="rounded-lg" round src="https://react-vant.3lang.dev/demo_avatar_1.jpg" width={80} height={80} />
              <div className="flex-1 ml-4 overflow-x-hidden">
                <h2 className="text-ellipsis  text-lg">无敌牛逼的不锈钢盆子</h2>
                <p className="my-1 text-1 text-ellipsis">艾略特8岁的时候第一次看到黑影一样的怪物，但是没有人愿意相信他</p>
                <div>
                  <Tag round type="primary">
                    标签
                  </Tag>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Block>
      <Cell title="基础用法" isLink />
      <Cell title="展示取消按钮" isLink />
      <Cell title="展示描述信息" isLink />
    </>
  )
}
