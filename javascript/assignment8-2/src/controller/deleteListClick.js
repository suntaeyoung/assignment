import { Model } from '../model/model.js';
import { View } from '../view/view.js';

// 리스트 삭제하기
export default function deleteListClick() {
  document.querySelectorAll('.listDelete').forEach(deleteButton => {
    deleteButton.addEventListener('click', handleDeleteClick);
  });
}

function handleDeleteClick(event) {
  const model = Model();
  const view = View();  

  const confirmed = confirm('삭제하시겠습니까?');
  if(!confirmed) {
    return;
  }

  const listItem = event.currentTarget.parentNode;
  const todo = listItem.closest('.todo');
  const storageKey = model.getStorageKey(todo);

  const index = Array.from(listItem.parentNode.children).indexOf(listItem);
  const items = model.getItems(storageKey);

  if (items !== null) {
    items.splice(index, 1);
    model.setItems(storageKey, items);
  }
               
  view.deleteList(listItem, todo, items);
}