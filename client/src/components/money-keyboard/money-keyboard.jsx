import {
  Button,
  Card,
  CardHeader,
  List,
  ListInput,
  ListItem,
} from "framework7-react";
import React, { useState } from "react";
import classNames from "classnames";
import style from "./style.module.scss";

export default function MoneyKeyboard() {
  const [desc, setDesc] = useState("");
  return (
    <Card className="p-4">
      <CardHeader>添加记账</CardHeader>
      <List className="my-0">
        <ListItem
          className="pl-0"
          style={{
            "--f7-list-item-padding-horizontal": 0,
          }}
          tonal
        >
          <div className="item-content item-input mx-0 flex-1 mr-4">
            <div className="item-inner">
              <div className="item-input-wrap">
                <input
                  type="number"
                  placeholder="#支出类型"
                  value={desc}
                  onInput={(v) => {
                    setDesc(v.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <h2 className="m-0">123</h2>
        </ListItem>
      </List>
      <div className="grid grid-cols-4 medium-grid-cols-4 gap-2">
        <div>
          <Button large tonal>
            7
          </Button>
        </div>
        <div>
          <Button large tonal>
            8
          </Button>
        </div>
        <div>
          <Button large tonal>
            9
          </Button>
        </div>
        <div>
          <Button large tonal>
            8 / 9
          </Button>
        </div>
        <div>
          <Button large tonal>
            4
          </Button>
        </div>
        <div>
          <Button large tonal>
            5
          </Button>
        </div>
        <div>
          <Button large tonal>
            6
          </Button>
        </div>
        <div className="grid grid-cols-2  medium-grid-cols-4 gap-1">
          <Button large tonal>
            -
          </Button>
          <Button large tonal>
            +
          </Button>
        </div>
        <div>
          <Button large tonal>
            1
          </Button>
        </div>
        <div>
          <Button large tonal>
            2
          </Button>
        </div>
        <div>
          <Button large tonal>
            3
          </Button>
        </div>
        <div className="row-span-2">
          <Button fill className="h-full">
            确定
          </Button>
        </div>
        <div>
          <Button large tonal>
            0
          </Button>
        </div>
        <div>
          <Button large tonal>
            .
          </Button>
        </div>
        <div>
          <Button large tonal>
            X
          </Button>
        </div>
      </div>
    </Card>
  );
}
