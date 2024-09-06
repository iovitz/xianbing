import React from "react";
import {
  Page,
  Navbar,
  Block,
  BlockTitle,
  List,
  ListInput,
  Toggle,
  ListItem,
  Range,
} from "framework7-react";

const AboutPage = () => (
  <Page noToolbar>
    <Navbar title="About" backLink="Back" />
    <BlockTitle>About My App</BlockTitle>
    <Block>
      <List strongIos outlineIos dividersIos>
        <ListInput label="Name" type="text" placeholder="Your name" />

        <ListInput label="E-mail" type="email" placeholder="E-mail" />

        <ListInput label="URL" type="url" placeholder="URL" />

        <ListInput label="Password" type="password" placeholder="Password" />

        <ListInput label="Phone" type="tel" placeholder="Phone" />

        <ListInput label="Gender" type="select">
          <option>Male</option>
          <option>Female</option>
        </ListInput>

        <ListInput
          label="Birth date"
          type="date"
          placeholder="Birth day"
          defaultValue="2014-04-30"
        />

        <ListItem title="Toggle">
          <Toggle slot="after" />
        </ListItem>

        <ListInput label="Range" input={false}>
          <Range slot="input" value={50} min={0} max={100} step={1} />
        </ListInput>

        <ListInput type="textarea" label="Textarea" placeholder="Bio" />
        <ListInput
          type="textarea"
          label="Resizable"
          placeholder="Bio"
          resizable
        />
      </List>
    </Block>
  </Page>
);

export default AboutPage;
