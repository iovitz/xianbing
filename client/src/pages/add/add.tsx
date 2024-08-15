import { IonContent, IonFooter, IonHeader, IonPage } from '@ionic/react'
import React from 'react'

export default function Add() {
  const types = [
    "餐饮", "购物", "日用", "交通", "蔬菜", "水果", "零食", "饮品", "运动", "娱乐", "通讯", "服饰", "美容", "住房", "家庭", "社交", "旅行", "烟酒", "数码", "游戏", "汽车", "医疗", "书籍", "学习", "宠物", "礼金", "礼品", "办公", "维修", "捐赠", "彩票", "红包", "快递", "还款", "借出", "追星", "其他"
  ]
  return (
    <IonPage>
      <IonHeader>头部</IonHeader>
      <IonContent fullscreen color="light">
        <h1>CONTENT</h1>
      </IonContent>
      <IonFooter>
        <h1>FOOTER</h1>
      </IonFooter>
    </IonPage>
  )
}
