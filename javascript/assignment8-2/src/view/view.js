function View() {
  
  function toggleInput (idValue) {
    document.getElementById(idValue).classList.toggle('addShow');
  }

  function cancelButton(cancelIdValue) {
    document.getElementById(cancelIdValue).classList.remove('addShow');
  }

  function textCountView(element, textareaLength) {
    element.innerHTML = textareaLength;
  }

  function addBtnAbleToggle(addBtn, myText){
    addBtn.disabled = !myText.value.trim();
  }

  function createListElement(text) {
    const listItem = document.createElement('div');
    listItem.classList.add('listBox');
    listItem.setAttribute('draggable', true);

    if(document.querySelector('#body').classList.contains('dark')){
      listItem.classList.add('dark');
    }

    const todoText = document.createElement('span');
    todoText.classList.add('todoText');
    todoText.textContent = text;

    const listDelete = document.createElement('span');
    listDelete.classList.add('listDelete');
    listDelete.textContent = 'x';

    listItem.appendChild(todoText);
    listItem.appendChild(listDelete);

    return listItem;
  }

  function textareaInit(addButton, textarea, textCount) {
    textarea.value = '';
    textCount.innerHTML = 0;
    addButton.disabled = true;
  }

  function updateCounter(element, count) {
    element.innerHTML = `(${count})`;
  }

  function deleteList(listItem, todo, items) {
    listItem.remove();
    const todoCountElement = todo.querySelector('.todo-count');
    todoCountElement.innerHTML = `(${items.length})`;
  }

  function showEdit() {
    document.querySelector('.black-bg').classList.add('show-modal');
  }

  function saveBtnAbleToggle(saveBtn, editTextarea){
    saveBtn.disabled = !editTextarea.value.trim();
  }

  function updateEdit(clickedInnerHTML, editTextarea) {
    clickedInnerHTML.firstChild.innerHTML = editTextarea.value;
  }

  function cancelEdit() {
    document.querySelector('.black-bg').classList.remove('show-modal');
  }

  function countUpdate(countElement, items) {
    countElement.innerHTML = `(${items.length})`;
  }

  function showColumnEdit(column,columnEditTextarea) {
    document.querySelector('.column-black-bg').classList.add('show-modal');
    column.classList.add('selected');
    columnEditTextarea.value = column.innerHTML;
  }

  function darkToggle() {
    const darkBtn = document.querySelector('.dark-btn');
    if (darkBtn.innerHTML === '🔆') {
      darkBtn.innerHTML = '🌙';
      darkBtn.classList.remove('light');
      localStorage.setItem('darkMode', false);
    } else {
      darkBtn.innerHTML = '🔆';
      darkBtn.classList.add('light');
      localStorage.setItem('darkMode', true);
    }
  }
  

  return {
    toggleInput,
    cancelButton,
    textCountView,
    addBtnAbleToggle,
    createListElement,
    textareaInit,
    updateCounter,
    deleteList,
    showEdit,
    saveBtnAbleToggle,
    updateEdit,
    cancelEdit,
    countUpdate,
    showColumnEdit,
    darkToggle
  };
}


export { View };
