import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from "@ionic/react";
import { useHistory } from "react-router";

export default function Mine() {
  const history = useHistory();
  function goLogin() {
    history.push("/login");
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mine</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>Mine</h1>
        <IonButton onClick={goLogin}>123</IonButton>
      </IonContent>
    </IonPage>
  );
}
