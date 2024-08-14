import React from "react";

export default function MoneyDetail() {
  const moneyFlow = [
    {
      date: "09月13日",
      income: 30,
      expenditure: 30,
      detail: [
        {
          type: "借出",
          tag: "借出",
          money: -40.3,
        },
        {
          type: "日常",
          tag: "吃饭",
          money: -40.3,
        },
      ],
    },
    {
      date: "09月14日",
      income: 30,
      expenditure: 30,
      detail: [
        {
          type: "借出",
          tag: "借出",
          money: -40.3,
        },
        {
          type: "日常",
          tag: "吃饭",
          money: -40.3,
        },
      ],
    },
  ];
  return (
    <>
      {moneyFlow.map((dayItem) => {
        return (
          <div>
            <div className="summary">
              {dayItem.date}

              <span>收入{dayItem.income}</span>
              <span>支出{dayItem.expenditure}</span>
            </div>
            <div className="detail-list">
              {dayItem.detail.map((item) => {
                return (
                  <div>
                    <span>{item.type}</span>
                    <span>{item.tag}</span>
                    <span>{item.money}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
