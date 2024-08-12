import React from "react";
import { Typography } from "react-vant";
import style from "./banner.module.scss";

export default function Banner() {
  return (
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
  );
}
