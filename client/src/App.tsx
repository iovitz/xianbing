import { Redirect, Route } from "react-router-dom";
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, settings, aperture, } from "ionicons/icons";

import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";
import Setting from "./pages/setting/setting";
import Add from './pages/add/add';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/add">
          <Add />
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
                <IonIcon aria-hidden="true" icon={home} />
              </IonTabButton>
              <IonTabButton tab="dashboard" href="/index/dashboard">
                <IonIcon aria-hidden="true" icon={aperture} />
              </IonTabButton>
              <IonTabButton tab="setting" href="/index/setting">
                <IonIcon aria-hidden="true" icon={settings} />
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </Route>
        <Route exact path="/">
          <Redirect to="/index/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
