import { Model } from '../model/model.js';
import { View } from '../view/view.js';

const model = Model();
const view = View();

export default function setupDragAndDrop() {
  const draggables = document.querySelectorAll('.listBox');
  const listBoxes = document.querySelectorAll('.listBoxes');

  // 각 listBox에 drag 시작하면 dragging 클래스 추가한다
  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    })

    // drag 끝나면 dragging 클래스 삭제한다
    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    })
  })

  // drag 하고 있는 요소가 해당 
  listBoxes.forEach(listBox => {
    const parentElement = listBox.parentElement;
    parentElement.addEventListener('dragover', e => {
      e.preventDefault();
      const afterElement = getDragAfterElement(listBox, e.clientY);
      const draggable = document.querySelector('.dragging');
      afterElement === undefined
        ? listBox.appendChild(draggable)
        : listBox.insertBefore(draggable, afterElement); 
      updateLocalStorageOrder();
    });
  });
  
  // 좌표
  function getDragAfterElement(listBox, y) {
    const draggableElements = [...listBox.querySelectorAll('.listBox:not(.dragging)')];
  
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      return (offset < 0 && offset > closest.offset)
        ? {offset: offset, element: child}
        : closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }

  function updateLocalStorageOrder() {
    // 화면에서 값을 가져옴
    const todoTextElements = document.querySelectorAll('.todoText');

    const todos = [];
    const doings = [];
    const dones = [];

    todoTextElements.forEach(element => {
      const inputValue = element.innerHTML;
      const parentTodo = element.closest('.todo');

      // 부모 요소의 클래스에 따라 각 배열에 추가
      parentTodo.classList.contains('done') 
        ? dones.push(inputValue) 
        : parentTodo.classList.contains('doing') 
          ? doings.push(inputValue) 
          : todos.push(inputValue);
    });

    // 변경된 배열을 각각의 로컬 스토리지에 저장
    const storageKeys = ['todos', 'doings', 'dones'];
    const dataArrays = [todos, doings, dones];

    storageKeys.forEach((key, index) => {
        model.setItems(key, dataArrays[index]);
    });


    // todo-count 값 업데이트
    document.querySelectorAll('.todo').forEach(todo => {
      const countElement = todo.querySelector('.todo-count');

      const storageKey = model.getStorageKey(todo);

      const items = model.getItems(storageKey);
      
      view.countUpdate(countElement, items);

    });
  }
}