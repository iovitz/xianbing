import React from "react";
import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage } from "@ionic/react";
import { Typography } from "react-vant";
import style from "./home.module.scss";
import Banner from "@/components/banner/banner";
import Heading from "@/components/heading/heading";
import QuickTag from "@/components/quick-tag/quick-tag";
import MoneyDetail from "@/components/money-detail/money-detail";
import { add } from 'ionicons/icons';

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
          <Banner text1="本月支出" value1="1030.30" text2="本月收入" value2="304" text3="本月结余" value3="300" />
          <Heading title="快速标签" />
          <QuickTag />
          <Heading title="明细" />
          <MoneyDetail />

          <IonFab slot="fixed" horizontal="end">
            <IonFabButton>
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
          </IonFab>
        </div>
      </IonContent>
    </IonPage>
  );
}
