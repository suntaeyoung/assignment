import { createSubject } from '../model/model.js';
import { createColorView } from '../view/view.js';

const setupApp = () => {
  // 색상 뷰 객체 생성
  const view = createColorView();
  
  // 주제 객체 생성
  const subject = createSubject();
  
  // 주제 객체에 관찰자 객체를 등록
  subject.addObserver(view);

  // 버튼 클릭 핸들러 함수
  const handleButtonClick = (color) => {
    // 주제 객체의 setColor 메서드 호출하여 모델의 상태 업데이트
    subject.setColor(color);
  };
  
  // 버튼 클릭 이벤트 리스너 등록
  const $btnList = document.querySelectorAll('.btn-color');
  $btnList.forEach(btn => {
    btn.addEventListener('click', () => {
      handleButtonClick(btn.innerHTML);
    });
  });
};

export { setupApp };

