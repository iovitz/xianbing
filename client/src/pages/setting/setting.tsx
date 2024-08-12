import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import { useHistory } from "react-router";
import { Button } from "react-vant";

export default function Setting() {
  const history = useHistory();
  function goLogin() {
    history.push("/login");
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <h1>Mine</h1>
        <Button onClick={goLogin} type="primary" block round>
          点击进行登录
        </Button>
      </IonContent>
    </IonPage>
  );
}
