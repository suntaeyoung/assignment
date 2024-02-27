import createRouter from "./router.js";
import firstPageContents from "./pages/FirstPage.js";
import secondPageContents from "./pages/SecondPage.js";
import thirdPageContents from "./pages/ThirdPage.js";
import { updateTextareaValue } from "./utils/textareaUtil.js";
import { updateRadioValue } from "./utils/radioboxUtil.js";
import { updateCheckValue } from "./utils/checkboxUtil.js";
import { updateSelectValue } from "./utils/selectboxUtils.js";
import { updateResultValue } from "./utils/resultUtil.js";

const container = document.querySelector("#root");
const router = createRouter();

// 페이지 정보를 담은 객체
const pages = {
  "/": () => { 
    container.innerHTML = 
      firstPageContents(); 
      updateRadioValue();
      updateCheckValue();
    },
  "/second": () => { 
    container.innerHTML = 
      secondPageContents();
      updateTextareaValue();
      updateSelectValue();
    },
  "/third": () => {
    container.innerHTML = 
      thirdPageContents();
      updateResultValue();
    }
}

// pages객체에 주어진 페이지들을 router에 추가하는 함수
function addPages(pages) {
  for (const path in pages) {
    const component = pages[path];
    router.addRoute(path, component);
  }
}

// 페이지를 추가
addPages(pages);
// 라우터 시작
router.start();

document.addEventListener("click", (event) => {
  // 만약 클릭된 요소가 reset 클래스를 가지고 있다면
  if (event.target.classList.contains("reset")) {
    // 확인과 취소 버튼이 있는 경고창을 표시
    const isConfirmed = window.confirm("작성을 새롭게 하시겠습니까?");
    // 사용자가 확인 버튼을 클릭한 경우
    if (!isConfirmed) {
      event.preventDefault();
      return;
    }
    localStorage.clear(); // 로컬 스토리지 지우기
    window.location.reload(); // 페이지 새로고침
  }
});

// 클릭한 요소가 data-navigate 속성을 가지고 있으면 해당 속성의 값을 가져와 라우터를 통해 페이지를 변경.
document.addEventListener("click", event => {
  if(event.target.matches("[data-navigate]")) {
    router.navigate(event.target.dataset.navigate);
  }
});
