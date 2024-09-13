import React from "react";
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  Link,
  Block,
  BlockTitle,
  List,
  ListItem,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Fab,
  Icon,
  Subnavbar,
  Searchbar,
  useStore,
} from "framework7-react";

const HomePage = () => {
  const setting = useStore("setting");
  return (
    <Page name="home">
      {/* Top Navbar */}
      <Navbar sliding={false}>
        <NavLeft>
          <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
        </NavLeft>
        <NavTitle sliding>Ollah{setting.base_url}</NavTitle>
        <NavRight>
          <Button tonal>9 / 2024</Button>
        </NavRight>
        <Subnavbar inner={false}>
          <Searchbar searchContainer=".search-list" searchIn=".item-title" />
        </Subnavbar>
      </Navbar>
      <Card>
        <CardHeader>本月结余</CardHeader>
        <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
          <h1 color="green" style={{ margin: 0 }}>
            <Link slot="right">12312</Link>
          </h1>
        </CardContent>
        <CardFooter>
          <div className="grid grid-cols-2 flex-1">
            <div>
              本月收入：
              <Link>29231</Link>
            </div>
            <div>
              本月支出：
              <Link color="red">12312</Link>
            </div>
          </div>
        </CardFooter>
      </Card>

      <BlockTitle>QUIKE TAG</BlockTitle>

      <swiper-container class="demo-swiper-multiple">
        <swiper-slide>
          <Block className="grid grid-cols-3 grid-gap my-0">
            <Button tonal large panelOpen="left">
              #出租车
            </Button>
            <Button tonal large>
              #出租车
            </Button>
            <Button tonal large>
              #出租车
            </Button>
            <Button tonal large panelOpen="left">
              #加油
            </Button>
            <Button tonal large>
              #停车费
            </Button>
            <Button tonal large>
              #公交车
            </Button>
          </Block>
        </swiper-slide>
        <swiper-slide>
          <Block className="grid grid-cols-3 grid-gap my-0">
            <Button tonal large panelOpen="left">
              #出租车
            </Button>
            <Button tonal large>
              #出租车
            </Button>
            <Button tonal large>
              #出租车
            </Button>
            <Button tonal large panelOpen="left">
              #加油
            </Button>
            <Button tonal large>
              #停车费
            </Button>
            <Button tonal large>
              #公交车
            </Button>
          </Block>
        </swiper-slide>
        <swiper-slide>
          <Block className="grid grid-cols-3 grid-gap my-0">
            <Button tonal large panelOpen="left">
              #出租车
            </Button>
            <Button tonal large>
              #出租车
            </Button>
            <Button tonal large>
              #出租车
            </Button>
            <Button tonal large panelOpen="left">
              #加油
            </Button>
            <Button tonal large>
              #停车费
            </Button>
            <Button tonal large>
              #公交车
            </Button>
          </Block>
        </swiper-slide>
      </swiper-container>

      <BlockTitle>DETAIL</BlockTitle>
      <List strong inset dividersIos>
        <ListItem title="Login" link="/login/" />
        <ListItem title="Luanch" link="/luanch/" />
        <ListItem
          title="Dynamic (Component) Route"
          link="/dynamic-route/blog/45/post/125/?foo=bar#about"
        />
        <ListItem
          title="Default Route (404)"
          link="/load-something-that-doesnt-exist/"
        />
        <ListItem
          title="Request Data & Load"
          link="/request-and-load/user/123456/"
        />
      </List>

      <Fab
        position="right-bottom"
        morphTo=".demo-fab-sheet.fab-morph-target"
        href="/new/"
      >
        <Icon ios="f7:plus" md="material:add" />
      </Fab>
    </Page>
  );
};
export default HomePage;
