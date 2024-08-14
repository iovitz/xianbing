import React from "react";
import { Swiper } from "react-vant";
import style from "./quick-tag.module.scss";

export default function QuickTag() {
  const tags = [
    [
      { id: 1, name: "早餐" },
      { id: 2, name: "早餐" },
      { id: 3, name: "早餐" },
      { id: 4, name: "早餐" },
      { id: 5, name: "早餐" },
      { id: 6, name: "早餐" },
    ],
  ];
  return (
    <Swiper>
      {tags.map((tagsGroup, groupIndex) => {
        return (
          <Swiper.Item key={groupIndex}>
            <div className={style["tags-wrapper"]}>
              {tagsGroup.map(({ name, id }) => (
                <div className={style.tag} key={id}>
                  #{name}
                </div>
              ))}
            </div>
          </Swiper.Item>
        );
      })}
    </Swiper>
  );
}
