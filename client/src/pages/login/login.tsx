import { IonContent, IonPage, useIonToast } from "@ionic/react";
import { useHistory } from "react-router";
import { Input, Button, Typography, NoticeBar } from "react-vant";

import { Edit, Volume } from "@react-vant/icons";
import { closeSharp } from "ionicons/icons";
import style from "./login.module.scss";

export default function Login() {
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
      <IonContent fullscreen color="light">
        <div className={style["login-page"]}>
          <div className={style["icon-wrapper"]}>
            <Edit />
          </div>
          <NoticeBar
            leftIcon={<Volume />}
            scrollable={false}
            wrapable
            className={style["notive-bar"]}
            text="首先这是个学习项目，然后我数据库运维技术比较差，所以你们使用的过程中数据安全是完全没有保障的，我意思是说可能你们的账户数据会被我不小心搞没，然后等我哪天能确保数据安全了那我就移除这条公告"
          />
          <div className={style["input-container"]}>
            <Input placeholder="请输入昵称" />
          </div>
          <div className={style["input-container"]}>
            <Input placeholder="请输入邮箱（用于找回密码）" />
          </div>
          <div className={style["input-container"]}>
            <Input placeholder="请输入密码" type="password" />
          </div>

          <Button type="primary" onClick={login} block>
            登录
          </Button>

          <div className={style["tip-text"]}>
            <Typography.Text size="sm" type="secondary">
              登录则视为同意 <span className={style.link}>用户使用协议</span>
            </Typography.Text>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
