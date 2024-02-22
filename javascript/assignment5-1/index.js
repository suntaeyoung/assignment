import FirstPage from "./src/pages/FirstPage.js";
import SecondPage from "./src/pages/SecondPage.js";
import ThirdPage from "./src/pages/ThirdPage.js";

const $app = document.querySelector('#App');

const routes = {
  "/": FirstPage,
  "/second": SecondPage,
  "/third": ThirdPage
}

// 초기 화면 첫번째 페이지로 설정
const mainPage = new routes["/"]();
$app.innerHTML = mainPage.template();

// 주소 바뀌고 페이지 갈아끼워주는 함수
const changUrl = (requestUrl) => {
  history.pushState(null, null, requestUrl);

  const checkPage = new routes[requestUrl]();
  $app.innerHTML = checkPage.template();
}

// 클릭했을때 changUrl 함수 호출
document.addEventListener('click', (event) => {
  if (event.target.classList.contains("goToFirst")) {
    changUrl("/");
  }
  if (event.target.classList.contains("goToSecond")) {
    changUrl("/second");
  }
  if (event.target.classList.contains("goToThird")) {
    changUrl("/third");
  }
})
