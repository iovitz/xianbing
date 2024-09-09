import React, { useState } from "react";
import {
  Page,
  Navbar,
  Button,
  Block,
  NavTitle,
  Segmented,
  Actions,
} from "framework7-react";
import MoneyKeyboard from "../../components/money-keyboard/money-keyboard";

const NewPage = () => {
  const [actionOpen, setActionOpen] = useState(false);
  return (
    <Page name="settings" noToolbar>
      <Navbar backLink="Back">
        <NavTitle>记录流水</NavTitle>
      </Navbar>
      <Block>
        <Segmented round>
          <Button round outline active>
            支出
          </Button>
          <Button round outline>
            入账
          </Button>
        </Segmented>
      </Block>
      <Block>
        <Segmented round>
          <Button round outline active>
            支出
          </Button>
          <Button round outline>
            入账
          </Button>
        </Segmented>
      </Block>
      <Block>
        <Segmented round>
          <Button round outline active>
            支出
          </Button>
          <Button round outline>
            入账
          </Button>
        </Segmented>
      </Block>
      <Block>
        <Segmented round>
          <Button round outline active>
            支出
          </Button>
          <Button round outline>
            入账
          </Button>
        </Segmented>
      </Block>
      <Block>
        <Segmented round>
          <Button round outline active>
            支出
          </Button>
          <Button round outline>
            入账
          </Button>
        </Segmented>
      </Block>
      <Button fill onClick={() => setActionOpen(true)}>
        dianji
      </Button>

      {/* Grid */}
      <Actions
        opened={actionOpen}
        onActionsClosed={() => setActionsGridOpened(false)}
        bgColor="light"
      >
        <MoneyKeyboard />
      </Actions>
    </Page>
  );
};

export default NewPage;
