import React from "react";
import { Typography } from "react-vant";
import style from "./banner.module.scss";

interface Props {
  text1: string;
  text2: string;
  text3: string;
  value1: string;
  value2: string;
  value3: string;
}

export default function Banner(props: Props) {
  return (
    <div className={style.banner}>
      <span className={style["secondary-text"]}>{props.text1}</span>
      <h1 className={style.summary}>{props.value1}</h1>
      <div className={style.detail}>
        <div className={style["detail-item"]}>
          <span className={style["secondary-text"]}>{props.text2}</span>
          <div>
            <Typography.Text size="xl" type="light">
              {props.value2}
            </Typography.Text>
          </div>
        </div>
        <div className={style["detail-item"]}>
          <div>
            <span className={style["secondary-text"]}>{props.text3}</span>
          </div>
          <div>
            <Typography.Text size="xl" type="light">
              {props.value3}
            </Typography.Text>
          </div>
        </div>
      </div>
    </div>
  );
}
