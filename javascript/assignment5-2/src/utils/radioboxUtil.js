
export function updateRadioValue() {
  const radioButtons = document.querySelectorAll('input[type="radio"]');

  radioButtons.forEach(radioButton => {
    radioButton.checked = localStorage.getItem(radioButton.id) === 'true'; // 선택된 라디오 버튼의 id를 사용하여 로컬 스토리지에 저장

    radioButton.addEventListener('change', () => {
      // 현재 선택된 라디오 버튼을 확인
      if (radioButton.checked) {
        localStorage.setItem(radioButton.id, radioButton.checked); // 선택된 라디오 버튼의 id를 사용하여 로컬 스토리지에 저장
      } 
      // 나머지 라디오 버튼을 확인하여 선택되지 않았으면 로컬 스토리지에서 제거
      radioButtons.forEach(btn => {
        if (btn !== radioButton && !btn.checked) {
          localStorage.removeItem(btn.id);
        }
      });
    });
  });
}
