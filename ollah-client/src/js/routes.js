import HomePage from "../pages/home/home.jsx";
import AboutPage from "../pages/about.jsx";
import FormPage from "../pages/form.jsx";
import CatalogPage from "../pages/catalog.jsx";
import ProductPage from "../pages/product.jsx";
import SettingsPage from "../pages/settings/settings.jsx";

import DynamicRoutePage from "../pages/dynamic-route.jsx";
import RequestAndLoad from "../pages/request-and-load.jsx";
import NotFoundPage from "../pages/404.jsx";
import LoginPage from "../pages/login/login.jsx";
import DashboardPage from "../pages/dashboard/dashboard.jsx";
import NewPage from "../pages/new/new.jsx";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login/",
    component: LoginPage,
  },
  {
    path: "/new/",
    component: NewPage,
  },
  {
    path: "/dashboard/",
    component: DashboardPage,
  },
  {
    path: "/about/",
    component: AboutPage,
  },
  {
    path: "/form/",
    component: FormPage,
  },
  {
    path: "/catalog/",
    component: CatalogPage,
  },
  {
    path: "/product/:id/",
    component: ProductPage,
  },
  {
    path: "/settings/",
    component: SettingsPage,
  },

  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRoutePage,
  },
  {
    path: "/request-and-load/user/:userId/",
    async({ router, to, resolve }) {
      // App instance
      const { app } = router;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      const { userId } = to.params;
      console.log(userId);

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        const user = {
          firstName: "Vladimir",
          lastName: "Kharlampidi",
          about: "Hello, i am creator of Framework7! Hope you like it!",
          links: [
            {
              title: "Framework7 Website",
              url: "http://framework7.io",
            },
            {
              title: "Framework7 Forum",
              url: "http://forum.framework7.io",
            },
          ],
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user,
            },
          },
        );
      }, 1000);
    },
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
