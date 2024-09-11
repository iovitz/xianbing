import React, { useState } from "react";
import {
  Page,
  Navbar,
  List,
  ListInput,
  Button,
  ListItem,
} from "framework7-react";
import VerifyCode from "@/components/verify-code/verify-code";
import store from "@/js/store";
import io from "@/common/io/io";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    code: "",
  });

  const handleInput = (type, v) => {
    setFormData({
      ...formData,
      [type]: v,
    });
  };

  const onPageBeforeRemove = () => {
    console.log("退出");
  };

  const handleSubmit = () => {
    io.request({
      method: "post",
      url: "/auth/login",
      data: {
        ...formData,
      },
    });
    store.dispatch("login", {
      ...formData,
    });
  };

  return (
    <Page noToolbar onPageBeforeRemove={onPageBeforeRemove}>
      <Navbar title="Login" backLink="Back" />
      <List strongIos outlineIos dividersIos>
        <ListInput
          label="E-mail"
          type="email"
          maxlength={30}
          onChange={(v) => {
            handleInput("email", v.target.value);
          }}
        />

        <ListInput
          label="Password"
          type="password"
          maxlength={16}
          onChange={(v) => {
            handleInput("password", v.target.value);
          }}
        />

        <ListItem>
          <VerifyCode />
        </ListItem>
        <ListInput
          label="Verify Code"
          maxlength={4}
          onChange={(v) => {
            handleInput("code", v.target.value);
          }}
        />
        <ListItem>
          <Button
            flex="1"
            fill
            large
            style={{ flex: 1 }}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </ListItem>
      </List>
    </Page>
  );
};

export default LoginPage;
