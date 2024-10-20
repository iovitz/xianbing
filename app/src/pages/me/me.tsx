import Block from '@/components/block'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Cell, Flex, Image, NavBar } from 'react-vant'

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
                <h2 className="text-ellipsis  m-0">无敌牛逼的不锈钢盆子</h2>
                <p className="m-0 text-1 mt-2 text-ellipsis-2">这是一段最多显示一行的文字，后面的内容会省略这是一段最多显示一行的文字，后面的内容会省略</p>
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
