import { Redirect, Route } from "react-router-dom";
import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";

import { ConfigProvider } from "react-vant";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";
import Setting from "./pages/setting/setting";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <ConfigProvider>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/index/*">
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/index/home">
                  <Home />
                </Route>

                <Route exact path="/index/dashboard">
                  <Dashboard />
                </Route>
                <Route exact path="/index/setting">
                  <Setting />
                </Route>
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/index/home">
                  <IonIcon aria-hidden="true" icon={triangle} />
                </IonTabButton>
                <IonTabButton tab="dashboard" href="/index/dashboard">
                  <IonIcon aria-hidden="true" icon={ellipse} />
                </IonTabButton>
                <IonTabButton tab="setting" href="/index/setting">
                  <IonIcon aria-hidden="true" icon={square} />
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </Route>
          <Route exact path="/">
            <Redirect to="/index/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </ConfigProvider>
  </IonApp>
);

export default App;
