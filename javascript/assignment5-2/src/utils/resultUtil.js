export function updateResultValue() {
  const resultValue = document.querySelector(".resultValue");

  const radioResults = [];
  const checkResults = [];

  for (const radio in localStorage) {
    if (localStorage.getItem(radio) === 'true') {
      radioResults.push(radio);
    }
  }

  for (const check in localStorage) {
    if (localStorage.getItem(check) === 'checked') {
      checkResults.push(check);
      checkResults.sort();
    }
  }

  resultValue.innerHTML = /* html */`
    radio 선택값 : {
      ${radioResults}
    }
    <br>
    check 선택값 : {
      ${checkResults}
    }
    <br>
    select 선택값 : {
      ${localStorage.getItem('selectedOption')}
    }
    <br>
    textarea : {
      ${localStorage.getItem('area')}
    }
  `;
}