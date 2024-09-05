import React from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { useHistory } from "react-router";
import { airplane, bluetooth, call, wifi } from 'ionicons/icons';

export default function Setting() {
  const history = useHistory();
  function goLogin() {
    history.push("/login");
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class='ion-padding-vertical'>

        <IonCard>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <IonCardHeader>
            <IonCardTitle>Iovitz</IonCardTitle>
            <IonCardSubtitle>记账达人</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Tell me and I forget. Teach me and I remember. Involve me and I learn. — Benjamin Franklin</IonCardContent>
        </IonCard>
        <IonText>
          <h3 className='ion-padding-start'>Date</h3>
        </IonText>

        <IonGrid>

          <IonRow>
            <IonCol>
              <IonCard className='ion-no-margin'>
                <IonCardHeader>
                  <IonCardTitle>384天</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>已连续打卡</IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className='ion-no-margin'>
                <IonCardHeader>
                  <IonCardTitle>4925</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>记账次数</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonText>
          <h3 className='ion-padding-start'>Settings</h3>
        </IonText>
        <IonList>
          <IonItem button={true} lines='none'>
            <IonIcon aria-hidden="true" icon={airplane} slot="start"></IonIcon>
            <IonLabel>Airplane Mode</IonLabel>
          </IonItem>
          <IonItem button={true} lines='none'>
            <IonIcon aria-hidden="true" icon={wifi} slot="start"></IonIcon>
            <IonLabel>Wi-Fi</IonLabel>
          </IonItem>
          <IonItem button={true} lines='none'>
            <IonIcon aria-hidden="true" icon={bluetooth} slot="start"></IonIcon>
            <IonLabel>Bluetooth</IonLabel>
          </IonItem>
          <IonItem button={true} lines='none'>
            <IonIcon aria-hidden="true" icon={call} slot="start"></IonIcon>
            <IonLabel>Cellular</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
}
