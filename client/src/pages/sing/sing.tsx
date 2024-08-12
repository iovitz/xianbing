import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export default function Sing() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sing</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>Sing</h1>
      </IonContent>
    </IonPage>
  );
}
