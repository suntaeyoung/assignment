import { Model } from '../model/model.js';
import { View } from '../view/view.js';

const model = Model();
const view = View();


function columnInit() {
  const columnValue = model.getItems('column');
  const column = document.querySelectorAll('.column');

  column.forEach((item, index) => {
    item.innerHTML = columnValue[index];
  });
}

// column 더블클릭하면 제목변경창 띄우기
function doubleClickColumn() {
  document.querySelectorAll('.column').forEach(column => {
    column.addEventListener('dblclick', handleClickColumn);
  })
  columnSave();
  columnEditCancel();
}

function handleClickColumn(event) {
  const column = event.target;
  const columnEditTextarea = document.querySelector('.column-edit-textarea');
  const updateColumnBtn = document.querySelector('.updateColumnBtn');


  view.showColumnEdit(column,columnEditTextarea);

  columnEditTextarea.addEventListener('input', function () {
    updateColumnBtn.disabled = !columnEditTextarea.value || columnEditTextarea.value.trim() === '';
  })
} 

function columnSave() {
  document.querySelector('.updateColumnBtn').addEventListener('click', function() {

    // 변경된 textarea value 가져와서
    const columnEditTextarea = document.querySelector('.column-edit-textarea');
    const newValue = columnEditTextarea.value;

    // 선택된 열 업데이트
    const columns = document.querySelectorAll('.column');
    let selectedIndex = -1;
    columns.forEach((column, index) => {
      if (column.classList.contains('selected')) {
          selectedIndex = index;
          column.innerHTML = newValue;
          // 로컬 스토리지에 업데이트된 값 저장
          updateLocalStorageColumn(index, newValue);
      }
    });

    // 모달 닫기
    document.querySelector('.column-black-bg').classList.remove('show-modal');

    if (selectedIndex !== -1) {
        columns[selectedIndex].classList.remove('selected');
    }
  });
}

// 로컬 스토리지에 열 업데이트
function updateLocalStorageColumn(index, newValue) {
  const column = model.getItems('column');
  if (column && column[index]) {
      column[index] = newValue;
      model.setItems('column', column);
  }
}

function columnEditCancel() {
  document.querySelector('.column-edit-close').addEventListener('click', function() {
    document.querySelector('.column-black-bg').classList.remove('show-modal');

    const selectedColumn = document.querySelector('.column.selected');
    if (selectedColumn) {
      selectedColumn.classList.remove('selected');
    }
  });
}

export { columnInit, doubleClickColumn };