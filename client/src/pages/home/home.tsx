import React from "react";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import { Typography } from "react-vant";
import style from "./home.module.scss";

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
          <div className={style.banner}>
            <span className={style["secondary-text"]}>本月支出</span>
            <h1 className={style.summary}>-92.00</h1>
            <div className={style.detail}>
              <div className={style["detail-item"]}>
                <span className={style["secondary-text"]}>本月收入</span>
                <div>
                  <Typography.Text size="xl" type="light">
                    123
                  </Typography.Text>
                </div>
              </div>
              <div className={style["detail-item"]}>
                <div>
                  <span className={style["secondary-text"]}>本月支出</span>
                </div>
                <div>
                  <Typography.Text size="xl" type="light">
                    123
                  </Typography.Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
