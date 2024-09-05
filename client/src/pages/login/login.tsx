import { IonCol, IonContent, IonGrid, IonPage, IonRow, IonToast, useIonToast } from "@ionic/react";
import { useHistory } from "react-router";
import { closeSharp } from "ionicons/icons";
import style from "./login.module.scss";
import { IonHeader } from '@ionic/react';
import { IonTitle } from '@ionic/react';
import { IonToolbar } from '@ionic/react';
import { IonInput } from '@ionic/react';
import { IonButton } from '@ionic/react';
import { IonList } from '@ionic/react';
import { IonItem } from '@ionic/react';
import { useState } from 'react';

export default function Login() {
  const [isOpen, setIsOpen] = useState(false)
  const history = useHistory();
  const [present] = useIonToast();
  function login() {
    const pass = false;
    if (pass) {
      present({
        message: "登录成功",
        duration: 15000,
        position: "top",
        mode: "ios",
        cssClass: "success",
      });
    } else {
      present({
        message: "校验失败",
        duration: 1500,
        position: "top",
        mode: "ios",
        icon: closeSharp,
      });
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>


        <IonGrid class="ion-margin">
          <IonRow class='ion-margin-top'>
            <IonInput
              label="Email"
              placeholder="Your Email"
              labelPlacement="stacked"
            ></IonInput>
          </IonRow>
          <IonRow class='ion-margin-top'>
            <IonInput
              label="Password"
              placeholder="Your Password"
              labelPlacement="stacked"
            ></IonInput>
          </IonRow>
          <IonRow class='ion-margin-top'>
            <IonCol>
              <IonInput
                label="Code"
                placeholder="####"
                labelPlacement="stacked"
              ></IonInput>
            </IonCol>
            <IonCol>
              <div>
                <IonInput
                  label="Code"
                  placeholder="####"
                  labelPlacement="stacked"
                ></IonInput>
              </div>
            </IonCol>
          </IonRow>
          <IonRow class='ion-margin-top'>
            <IonButton expand="block" size="large" style={{
              "width": "100%"
            }}>Login</IonButton>
          </IonRow>
        </IonGrid>

        <IonToast
          isOpen={isOpen}
          message="This toast will close in 5 seconds"
          onDidDismiss={() => setIsOpen(false)}
          duration={5000}
        ></IonToast>

      </IonContent>
    </IonPage >
  );
}
