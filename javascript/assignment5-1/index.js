import createRouter from "./router.js";
import firstPage from "./src/pages/FirstPage.js";
import secondPage from "./src/pages/SecondPage.js";
import thirdPage from "./src/pages/ThirdPage.js";

const container = document.getElementById("root");
const router = createRouter();

const pages = {
  "/": () => container.innerHTML = firstPage(),
  "/second": () => container.innerHTML = secondPage(),
  "/third": () => container.innerHTML = thirdPage(),
};

router.addRoute("/", pages["/"]).addRoute("/second", pages["/second"]).addRoute("/third", pages["/third"]).start();

window.addEventListener("click", (event) => {
  if (event.target.matches("[data-navigate]")) {
    router.navigate(event.target.dataset.navigate);
  }
});

