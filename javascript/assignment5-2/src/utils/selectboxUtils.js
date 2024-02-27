export function updateSelectValue() {
    const mySelect = document.querySelector('.selectBoxes');
  
    // 로컬 스토리지에서 값을 가져와서 설정합니다.
    const selectedOption = localStorage.getItem('selectedOption');
    if (selectedOption) {
      // 로컬 스토리지에 값이 있는 경우, 해당 값을 선택합니다.
      mySelect.value = selectedOption;
    }

    // 셀렉트 박스의 변경 이벤트를 처리하여 로컬 스토리지에 선택된 값을 저장합니다.
    mySelect.addEventListener('change', () => {
      localStorage.setItem('selectedOption', mySelect.value);
    });
}
