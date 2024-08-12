import React from "react";
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useHistory } from "react-router";

export default function Login() {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>Login</h1>
        <IonButton
          onClick={() => {
            history.goBack();
          }}
        >
          123
        </IonButton>
      </IonContent>
    </IonPage>
  );
}
