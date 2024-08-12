import React from "react";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import { Typography } from "react-vant";
import style from "./home.module.scss";
import Banner from "../../components/banner/banner";

export default function Home() {
  return (
    <IonPage>
      <IonHeader>
        <div className="global-header-wrapper">
          <Typography.Text size="xxl">记账</Typography.Text>
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <div className={style["home-page"]}>
          <Banner />
        </div>
      </IonContent>
    </IonPage>
  );
}
