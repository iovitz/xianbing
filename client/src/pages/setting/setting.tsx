import React from "react";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import { useHistory } from "react-router";
import classNames from "classnames";
import style from "./setting.module.scss";

export default function Setting() {
  const history = useHistory();
  function goLogin() {
    history.push("/login");
  }
  return (
    <IonPage>
      <IonHeader>
        <div className="global-header-wrapper">
        </div>
      </IonHeader>

      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
}
