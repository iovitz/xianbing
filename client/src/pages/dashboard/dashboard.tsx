import React from "react";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import { Typography } from "react-vant";

export default function Dashboard() {
  return (
    <IonPage>
      <IonHeader>
        <div className="global-header-wrapper">
          <Typography.Text size="xxl">仪表盘</Typography.Text>
        </div>
      </IonHeader>

      <IonContent fullscreen />
    </IonPage>
  );
}
