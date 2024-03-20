import plusToggle from './plusToggle.js';
import cancelClick from './cancelClick.js';
import textCount from './textCount.js';
import { btnDisabled,addListClick } from './addList.js';
import { editSave } from './doubleClickList.js';
import { columnInit, doubleClickColumn } from './clickColumn.js';
import { Model } from '../model/model.js';
import { darkMode } from './darkMode.js';

function Controller() {

  function init() {
    document.querySelector('.dark-btn').addEventListener('click', darkMode);

    document.querySelectorAll('.plusBtn').forEach(button => {
      button.addEventListener('click', plusToggle);
    })
    
    document.querySelectorAll('.cancelBtn').forEach(button => {
      button.addEventListener('click', cancelClick);
    })

    document.querySelectorAll('.textarea').forEach(count => {
      count.addEventListener('input', textCount);
    })
    document.querySelectorAll('.textarea').forEach((textarea) => {
      textarea.addEventListener('keyup', btnDisabled);
    })

    document.querySelectorAll('.addBtn').forEach(button => {
      button.addEventListener('click', addListClick);
    });

    document.querySelector('.saveBtn').addEventListener('click', editSave);

    columnInit();
    doubleClickColumn();
  }

  return {
    init
  };
}

// 앱 초기화 함수
function initializeApp() {
  const controller = Controller();
  const model = Model();

  model.createColumn();
  controller.init();

}

export { initializeApp };
