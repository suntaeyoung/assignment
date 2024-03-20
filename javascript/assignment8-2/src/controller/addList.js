import { Model } from '../model/model.js';
import { View } from '../view/view.js';
import setupDragAndDrop from './drag.js';
import deleteListClick from './deleteListClick.js';
import { doubleClickList } from './doubleClickList.js';

const model = Model();
const view = View();

function listInit() {
  // 로컬 스토리지에서 데이터 불러오기
  const keys = ['todos', 'doings', 'dones']; // 로컬 스토리지 키 설정

  keys.forEach((key, index) => {
    const items = model.getItems(key);

    // 화면 초기화
    items.reverse().forEach(todoText => {
      const listBox = document.querySelectorAll('.listBoxes')[index];
      const newElement = view.createListElement(todoText);
      listBox.insertBefore(newElement, listBox.firstChild);
    });

    // 화면에 목록 개수 업데이트
    const element = document.querySelectorAll('.todo-count')[index];
    view.updateCounter(element, items.length);
  })
  deleteListClick();
  doubleClickList();
  setupDragAndDrop();
}


// add 버튼을 활성화/비활성화
function btnDisabled(event) {
  const myText = event.target;
  const myTextContainer = myText.closest('.addList');
  const addBtn = myTextContainer.querySelector('.addBtn');

  view.addBtnAbleToggle(addBtn, myText);
}

// add 버튼 누르면 목록 쌓이게하기 
function addListClick(event) {
  const addButton = event.target;
  const todo = addButton.closest('.todo');
  const textarea = todo.querySelector('.textarea');
  const textCount = todo.querySelector('.reCount');
  const todoText = textarea.value;
  const listBox = todo.querySelector('.listBoxes');
  const element = todo.querySelector('.todo-count');

  if (todoText) {
    const newElement = view.createListElement(todoText);
    listBox.insertBefore(newElement, listBox.firstChild);

    view.textareaInit(addButton, textarea, textCount);

    const storageKey = model.getStorageKey(todo);
                        
    const items = model.getItems(storageKey);
    items.unshift(todoText);
    model.setItems(storageKey, items);

    view.updateCounter(element, items.length);
    
  }
  deleteListClick();
  doubleClickList();
  setupDragAndDrop();
}


export { listInit, btnDisabled, addListClick };