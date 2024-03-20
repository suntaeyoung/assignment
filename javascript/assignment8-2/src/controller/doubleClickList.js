import { Model } from '../model/model.js';
import { View } from '../view/view.js';

// 더블클릭한 요소의 인덱스번호
let clickedIndex;
// 더블클릭한 todo목록의 html
let clickedInnerHTML;

const model = Model();
const view = View();

// 목록 더블클릭하면 edit창 띄우기
function doubleClickList() {
  document.querySelectorAll('.listBox').forEach(box => {
    box.addEventListener('dblclick', handleDoubleClick);
  })
  editCancel();
}

function handleDoubleClick(event) {
  const list = event.target;
  const todo = list.closest('.todo');
  const storageKey = model.getStorageKey(todo);

  const items = model.getItems(storageKey);

  const editTextarea = document.querySelector('.edit-textarea');
  const saveBtn = document.querySelector('.saveBtn');

  clickedIndex = Array.from(this.parentNode.children).indexOf(this);

  // 더블클릭한 요소의 innerHTML 가져오기
  clickedInnerHTML = this;

  view.showEdit();

  editTextarea.value = items[clickedIndex];

  editTextarea.addEventListener('input', () => {
    view.saveBtnAbleToggle(saveBtn, editTextarea);
  })
}

// edit창에서 완료버튼 누르기 
function editSave() {
  const todo = clickedInnerHTML.closest('.todo');

  // 변경된 textarea value 가져와서
  const editTextarea = document.querySelector('.edit-textarea');

  // 로컬스토리지 바꿔주고
  const storageKey = model.getStorageKey(todo);
  const items = model.getItems(storageKey);
  items.splice(clickedIndex, 1, editTextarea.value);
  model.setItems(storageKey, items);

  // 화면에 바꿔주기
  view.updateEdit(clickedInnerHTML, editTextarea);

  view.cancelEdit();
}

// edit창에서 취소버튼 누르기
function editCancel() {
  document.querySelector('.edit-close').addEventListener('click', function() {
    document.querySelector('.black-bg').classList.remove('show-modal');
  });
}



export { doubleClickList, editSave};