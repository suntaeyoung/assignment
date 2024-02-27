export function updateTextareaValue() {
  const myTextarea = document.getElementById('myTextarea');
  myTextarea.value = localStorage.getItem('area');
  
  myTextarea.oninput = () => {
    localStorage.setItem('area', myTextarea.value);
  }
}