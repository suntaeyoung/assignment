export default function createRouter() {
  const routes = [];
  let checkRoutes;

  const router = {
    addRoute(path, component) {
      routes.push({ path, component });
      return this;
    },
    start() {
      checkRoutes = () => {
        const currentPath = window.location.pathname;
        let currentRoute = routes.find(route => route.path === currentPath);

        if (!currentRoute) {
          currentRoute = routes.find(route => route.path === "/");
          history.pushState(null, null, "/");
        }

        currentRoute.component();
      };

      window.addEventListener("popstate", checkRoutes);
      checkRoutes();
    },
    navigate(path) {
      history.pushState(null, null, path);
      checkRoutes();
    }
  };

  return router;
}
