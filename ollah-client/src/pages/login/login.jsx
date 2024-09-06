import React from "react";
import {
  Page,
  Navbar,
  List,
  ListInput,
  Button,
  ListItem,
} from "framework7-react";

const LoginPage = () => (
  <Page noToolbar>
    <Navbar title="Login" backLink="Back" />
    <List strongIos outlineIos dividersIos>
      <ListInput label="E-mail" type="email" placeholder="E-mail" />

      <ListInput label="Password" type="password" placeholder="Password" />
      <ListItem>
        <Button flex="1" fill large style={{ flex: 1 }}>
          Login
        </Button>
      </ListItem>
    </List>
  </Page>
);

export default LoginPage;
