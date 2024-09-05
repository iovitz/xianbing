import React from "react";
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
import Banner from "@/components/banner/banner";
import Heading from "@/components/heading/heading";
import QuickTag from "@/components/quick-tag/quick-tag";
import MoneyDetail from "@/components/money-detail/money-detail";
import { add } from 'ionicons/icons';

export default function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
          <IonButtons collapse={true} slot="end">
            <IonButton>9 / 2024</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding-horizontal ion-padding-top">
        <Banner text1="本月支出" value1="1030.30" text2="本月收入" value2="304" text3="本月结余" value3="300" />
        <IonText>
          <h3>常用标签</h3>
        </IonText>
        <QuickTag />
        <IonText >
          <h3>流水明细</h3>
        </IonText>
        <MoneyDetail />

        {/* <IonFab slot="fixed" horizontal="end">
          <IonFabButton>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab> */}
      </IonContent>
    </IonPage>
  );
}
