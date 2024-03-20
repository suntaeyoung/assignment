import { View } from '../view/view.js';

// +버튼 누르면 열고 닫기, cancel 버튼 누르면 닫기
export default function plusToggle(event) {
  const view = View();

  const plusButton = event.target;
  const todo = plusButton.closest('.todo');
  const idValue = todo.querySelector('.addList').id;
  view.toggleInput(idValue);
}