import React from "react";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import { useHistory } from "react-router";
import { Flex, Typography } from "react-vant";
import { Arrow } from "@react-vant/icons";
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
          <Typography.Text size="xxl">设置</Typography.Text>
        </div>
      </IonHeader>

      <IonContent fullscreen>
        <div className={style["setting-page"]}>
          <div className={classNames(style["card-area"], style["user-wrapper"])} onClick={goLogin}>
            <div>
              <Typography.Text size="lg" type="secondary">
                点击进行登录
              </Typography.Text>
            </div>
            <Typography.Text size="sm" type="secondary">
              未登录无法同步记账数据哦
            </Typography.Text>
          </div>
          <div className={style["card-area"]}>
            <Flex className={style["count-wrapper"]}>
              <Flex.Item span={8}>
                <div>
                  <Typography.Text size="xxl">1</Typography.Text>
                </div>
                <Typography.Text size="sm" type="secondary">
                  已连续打卡
                </Typography.Text>
              </Flex.Item>
              <Flex.Item span={8}>
                <div>
                  <Typography.Text size="xxl">10</Typography.Text>
                </div>
                <Typography.Text size="sm" type="secondary">
                  记账总天数
                </Typography.Text>
              </Flex.Item>
              <Flex.Item span={8}>
                <div>
                  <Typography.Text size="xxl">5</Typography.Text>
                </div>
                <Typography.Text size="sm" type="secondary">
                  记账总笔数
                </Typography.Text>
              </Flex.Item>
            </Flex>
          </div>

          <Typography.Title level={6} type="secondary">
            功能
          </Typography.Title>

          <div className={classNames(style["card-area"], style["menu-item"])}>
            <div>
              <Typography.Text size="md">记账提醒</Typography.Text>
            </div>
            <div>
              <Arrow />
            </div>
          </div>

          <Typography.Title level={6} type="secondary">
            其他
          </Typography.Title>

          <div className={classNames(style["card-area"], style["menu-item"])}>
            <div>
              <Typography.Text size="md">组件库</Typography.Text>
            </div>
            <div>
              <Arrow />
            </div>
          </div>
          <div className={classNames(style["card-area"], style["menu-item"])}>
            <div>
              <Typography.Text size="md">设置</Typography.Text>
            </div>
            <div>
              <Arrow />
            </div>
          </div>

          <div className={classNames(style["card-area"], style["menu-item"])}>
            <div>
              <Typography.Text size="md">联系我们</Typography.Text>
            </div>
            <div>
              <Arrow />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
