import React from 'react'
import { Cell, Radio, Tabs } from 'react-vant'
import style from './task.module.scss'

export default function Task() {
  const taskItems = ['全部', '重要且紧急', '紧急不重要', '重要不紧急', '不重要不紧急', '其他']
  return (
    <Tabs type="jumbo">
      {taskItems.map(item => (
        <Tabs.TabPane titleClass={style['task-wrapper']} key={item} title={`${item}`}>
          <Radio.Group>
            <Cell.Group>
              <Cell clickable title="单选框1" rightIcon={<Radio name="1" />} />
              <Cell clickable title="单选框2" rightIcon={<Radio name="2" />} />
            </Cell.Group>
          </Radio.Group>
        </Tabs.TabPane>
      ))}
    </Tabs>
  )
}
