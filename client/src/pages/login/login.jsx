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

const LoginPage = () => {
  const formData = useState({});
  const onPageBeforeRemove = () => {
    console.log("退出");
  };

  return (
    <Page noToolbar onPageBeforeRemove={onPageBeforeRemove}>
      <Navbar title="Login" backLink="Back" />
      <List strongIos outlineIos dividersIos>
        <ListInput label="E-mail" type="email" />

        <ListInput label="Password" type="password" />

        <ListItem>
          <VerifyCode />
        </ListItem>
        <ListInput label="Verify Code" />
        <ListItem>
          <Button flex="1" fill large style={{ flex: 1 }}>
            Login
          </Button>
        </ListItem>
      </List>
    </Page>
  );
};

export default LoginPage;
