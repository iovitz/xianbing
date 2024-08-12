import React from "react";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import { Typography } from "react-vant";

export default function Home() {
  return (
    <IonPage>
      <IonHeader>
        <div className="global-header-wrapper">
          <Typography.Text size="xxl">记账</Typography.Text>
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <h1>Home</h1>
      </IonContent>
    </IonPage>
  );
}
