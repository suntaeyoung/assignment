import { View } from "../view/view.js";

const view = View();

function darkMode() {
  const elements = document.querySelectorAll('#body, .black-nav, .todo, .doing, .done, .listBox');
  elements.forEach(element => {
    element.classList.toggle('dark');
  });

  view.darkToggle();
}

window.onload = function() {
  const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
  if (darkModeEnabled) {
    darkMode();
  }
};

export { darkMode };