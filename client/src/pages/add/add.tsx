import { IonContent, IonFooter, IonHeader, IonPage } from '@ionic/react'
import React from 'react'

export default function Add() {
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
