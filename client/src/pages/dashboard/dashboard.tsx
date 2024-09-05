import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import Banner from '@/components/banner/banner';

export default function Dashboard() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="ion-margin-horizontal ion-padding-top">
          <Banner text1="本月支出" value1="1030.30" text2="本月收入" value2="304" text3="本月结余" value3="300" />
        </div>
      </IonContent>
    </IonPage>
  );
}
