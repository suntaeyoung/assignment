function Model() {
  function getItems(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  function getStorageKey(todo) {
    return todo.classList.contains('done') ? 'dones' :
            todo.classList.contains('doing') ? 'doings' :
              todo.classList.contains('todo') ? 'todos' : '';
  }

  function setItems(key, items) {
    localStorage.setItem(key, JSON.stringify(items));
  }

  // column이라는 키 이름으로 배열 생성
  function createColumn() {
    // 로컬 스토리지에서 이전에 저장된 column 값을 불러온다
    const storedColumn = localStorage.getItem('column');
    // 저장된 값이 없다면 기본값으로 설정
    const defaultColumn = storedColumn ? JSON.parse(storedColumn) : ['해야할 일', '하는중', '다했어'];
    setItems('column', defaultColumn);
  }
  
  return {
    getItems,
    getStorageKey,
    setItems,
    createColumn
  };
}
export { Model };
