import { View } from '../view/view.js';

// 글자 수 세는 함수
export default function textCount(event) {
  const view = View();

  const textarea = event.target;
  const textareaLength = textarea.value.length;
  const addList = textarea.closest('.addList');
  
  view.textCountView(addList.querySelector('.reCount'),textareaLength);
}
