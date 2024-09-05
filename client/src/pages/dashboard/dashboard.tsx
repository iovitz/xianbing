import React from "react";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import style from './dashboard.module.scss'
import Banner from '@/components/banner/banner';

export default function Dashboard() {
  return (
    <IonPage>
      <IonHeader>
        <div className="global-header-wrapper">
          仪表盘
        </div>
      </IonHeader>

      <IonContent fullscreen>
        <div className={style['dashboard-page']}>

          <Banner text1="本月支出" value1="1030.30" text2="本月收入" value2="304" text3="本月结余" value3="300" />
        </div>
      </IonContent>
    </IonPage>
  );
}
