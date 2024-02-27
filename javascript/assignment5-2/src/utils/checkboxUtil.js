export function updateCheckValue() {
  const checkButtons = document.querySelectorAll('input[type="checkbox"]');
  checkButtons.forEach(checkButton => {
    checkButton.checked = localStorage.getItem(checkButton.id) === 'checked';
    
    checkButton.addEventListener('change', () => {
      localStorage.setItem(checkButton.id, checkButton.checked ? 'checked' : '');
    });
  });
}
