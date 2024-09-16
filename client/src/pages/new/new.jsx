import React, { useState } from "react";
import {
  Page,
  Navbar,
  Button,
  Block,
  NavTitle,
  Actions,
  NavRight,
} from "framework7-react";
import MoneyKeyboard from "../../components/money-keyboard/money-keyboard";

const NewPage = () => {
  const [_, setType] = useState("");
  const [actionOpen, setActionOpen] = useState(false);
  const tags = [
    {
      name: "餐饮",
      icon: "food",
    },
    {
      name: "购物",
      icon: "shopping",
    },

    {
      name: "日用",
      icon: "daily-necessities",
    },
    {
      name: "交通",
      icon: "traffic",
    },
    {
      name: "蔬菜",
      icon: "vegetables",
    },
    {
      name: "水果",
      icon: "fruits",
    },
    {
      name: "零食",
      icon: "snacks",
    },
    {
      name: "运动",
      icon: "sport",
    },
    {
      name: "娱乐",
      icon: "fun",
    },
    {
      name: "通讯",
      icon: "communication",
    },
    {
      name: "服饰",
      icon: "clothes",
    },
    {
      name: "美容",
      icon: "cosmetology",
    },
    {
      name: "家庭",
      icon: "housing",
    },
    {
      name: "社交",
      icon: "social",
    },
    {
      name: "旅行",
      icon: "travel",
    },
    {
      name: "数码",
      icon: "digital",
    },
    {
      name: "汽车",
      icon: "car",
    },
    {
      name: "书籍",
      icon: "book",
    },
    {
      name: "学习",
      icon: "tuition",
    },
    {
      name: "宠物",
      icon: "pets",
    },
    {
      name: "礼金",
      icon: "cash-gift",
    },
    {
      name: "办公",
      icon: "work",
    },
    {
      name: "彩票",
      icon: "lottery",
    },
    {
      name: "快递",
      icon: "express",
    },
    {
      name: "其他",
      icon: "bonus",
    },
    {
      name: "设置",
      icon: "bonus",
    },
  ];

  return (
    <Page name="settings" noToolbar>
      <Navbar backLink="Back">
        <NavTitle>记录支出</NavTitle>
        <NavRight>
          <Button tonal>记录收入</Button>
        </NavRight>
      </Navbar>
      <Block>
        <div className="grid grid-cols-4 grid-gap">
          {tags.map((item) => {
            return (
              <div
                className="flex flex-col items-center"
                onClick={() => {
                  setType(item.name);
                  setActionOpen(true);
                }}
                key={item.name}
              >
                <Button key={item.name} className="h-16 w-16 rounded-full">
                  <img
                    src={`/assets/icon/${item.icon}.svg`}
                    className="w-full"
                    alt=""
                  />
                </Button>
                <p className="mb-0 mt-1">{item.name}</p>
              </div>
            );
          })}
        </div>
      </Block>

      {/* Grid */}
      <Actions
        opened={actionOpen}
        onActionsClosed={() => setActionOpen(false)}
        bgColor="light"
      >
        <MoneyKeyboard />
      </Actions>
    </Page>
  );
};

export default NewPage;
