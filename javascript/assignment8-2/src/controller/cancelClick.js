import { View } from '../view/view.js';

// 취소 버튼에 대한 이벤트 핸들러 추가
export default function cancelClick(event) {
  const view = View();

  const cancelButton = event.target;
  const todo = cancelButton.closest('.todo');
  const cancelIdValue = todo.querySelector('.addList').id;
  view.cancelButton(cancelIdValue);
}