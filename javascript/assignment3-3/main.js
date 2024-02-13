const $root = document.querySelector('.root');
const $title = document.createElement('div');
const $container = document.createElement('div');
const $codeBox = document.createElement('div');
const $callStack = document.createElement('div');
const $webApi = document.createElement('div');
const $callBack = document.createElement('div');
const $word = document.createElement('div');

const elements = [$codeBox, $callStack, $webApi, $callBack, $word];
elements.forEach(element => $container.appendChild(element));

$title.classList.add('title');
$root.appendChild($title);
$title.innerText = '<EventLoop>';

$container.classList.add('container');
$root.appendChild($container);

$codeBox.classList.add('code');
$codeBox.innerText = 'Code\n';

const $select = document.createElement('select');
$codeBox.appendChild($select);
$select.setAttribute('id', 'selectBox');

const $runBtn = document.createElement('button');
$runBtn.innerText = '실행';
$runBtn.setAttribute('id', 'run');
$codeBox.appendChild($runBtn);

const $resetBtn = document.createElement('button');
$resetBtn.innerText = '초기화';
$resetBtn.setAttribute('id', 'reset');
$codeBox.appendChild($resetBtn);

$callStack.classList.add('cs');
$callStack.innerText = 'CallStack';

$webApi.classList.add('web');
$webApi.innerText = 'WebApi';

$callBack.classList.add('cb');
$callBack.innerText = 'CallBack Queue';

$word.classList.add('word');
$word.innerText = 'EventLoop 동작!';

const $selected = document.createElement('div');
$codeBox.appendChild($selected);
$selected.setAttribute('id', 'selectedValue');

const $csResult = document.createElement('div');
$callStack.appendChild($csResult);
$csResult.setAttribute('id', 'csValue');

const $webResult = document.createElement('div');
$webApi.appendChild($webResult);
$webResult.setAttribute('id', 'apiValue');

const $cbMicro = document.createElement('div');
const $cbMicroVl = document.createElement('div');
$callBack.appendChild($cbMicro).innerText = 'Micro';
$cbMicro.classList.add('micro');
$cbMicro.appendChild($cbMicroVl);
$cbMicroVl.setAttribute('id', 'cbMicroValue');

const $cbMacro = document.createElement('div');
const $cbMacroVl = document.createElement('div');
$callBack.appendChild($cbMacro).innerText = 'Macro';
$cbMacro.classList.add('macro');
$cbMacro.appendChild($cbMacroVl);
$cbMacroVl.setAttribute('id', 'cbMacroValue');


// 옵션 이름 배열
const optionNames = ['선택하세요', '일반함수', '비동기함수', '비동기함수(web-api)'];
const selectedValues = []; // 선택한 값을 저장할 배열

// 각 옵션에 이름 부여
for (let i = 0; i < optionNames.length; i++) {
  const $option = document.createElement('option');
  $option.innerText = optionNames[i];
  $option.value = `option${i}`; // 각 옵션의 value 속성에 고유한 이름 할당
  if (i === 0) {
    $option.disabled = true; // 첫 번째 옵션은 선택할 수 없도록 설정
    $option.selected = true; // 첫 번째 옵션을 선택 상태로 만듦
  }
  $select.appendChild($option);
}

// 셀렉트 박스 초기화
$select.addEventListener('change', function() {
  // 선택한 옵션의 인덱스를 가져옴
  const selectedIndex = this.selectedIndex;
    
  if(selectedValues.length < 10){
    // 선택한 값을 배열에 추가
    const selectedValue = optionNames[selectedIndex];
    selectedValues.push(selectedValue);

    // 선택된 항목들 앞에 숫자를 붙여서 새로운 배열 생성
    const numberedItems = selectedValues.map((item, index) => `${index + 1}. ${item}`);

    // 배열에 있는 모든 값을 결과 텍스트로 설정
    document.getElementById('selectedValue').innerText = numberedItems.join("\n");
  }
  
  // 셀렉트 박스를 '선택하세요' 옵션으로 다시 설정
  this.selectedIndex = 0;
});

const csArray = [];
const cbMicro = [];
const cbMacro = [];
const webApi = [];

function deleteCS() {
  setTimeout(() => {
    document.getElementById('csValue').innerText = '';
  }, 1000);
  csArray.shift();
}

// 초기화버튼 누르면 화면 새로고침
document.getElementById("reset").addEventListener("click", function() {
  location.reload();
})

// 실행 버튼 클릭 이벤트 리스너 추가
document.getElementById("run").addEventListener("click", function() {

  document.getElementById("selectBox").disabled = true;
  document.getElementById("run").disabled = true;

  selectedValues.forEach(function(item, index) {
    setTimeout(() => {
      const numberedItem = `${index + 1}. ${item}`; // 숫자를 붙인 항목
      switch(item){
        case '일반함수':
          csArray.push(numberedItem); // csArray에 추가
          document.getElementById('csValue').innerText = csArray.join("\n");
          deleteCS();
          csArray.shift();
          selectedValues.shift();
          break;
        case '비동기함수':
          cbMicro.push(numberedItem); // cbMicro에 추가
          document.getElementById('cbMicroValue').innerText = cbMicro.join("\n");
          selectedValues.shift();
          break;
        case "비동기함수(web-api)":
          webApi.push(numberedItem); // webApi에 추가
          document.getElementById('apiValue').innerText = webApi.join("\n");
          selectedValues.shift();          
          break;
        default:
          break;
      }
      eventLoopMicro();
      eventLoopWeb();

    }, (index + 1) * 2000);
  });
})


function eventLoopMicro() {
  if (selectedValues.length === 0 && csArray.length === 0) {

    for(let i = 0; i < cbMicro.length; i++) {
      // 임시 배열을 만들어서 i+1번째 요소를 제외한 부분을 추출
      const cbMicroCopy = cbMicro.slice(i + 1);

      setTimeout(() => {
        csArray.push(cbMicro[0]);
        document.getElementById('csValue').innerText = csArray.join('\n');

        cbMicro.shift();

        document.querySelector('.word').classList.add('visible');
        deleteCS();

        document.getElementById('cbMicroValue').innerText = cbMicroCopy.join('\n');

        eventLoopMacro();

        setTimeout(() => {
          document.querySelector('.word').classList.remove('visible');
        }, 1000); // 1초 후에 클래스 제거

      }, (i + 1) * 2000);
    }
  }
}

function eventLoopWeb() {
  if(!selectedValues.length) {
    const random = [...webApi].sort(() => Math.random() - 0.5);
    
    for(let i = 0; i < webApi.length; i++){
      setTimeout(() => {
        cbMacro.push(random[i]);
        document.getElementById('cbMacroValue').innerText = cbMacro.join("\n");

        webApi.splice(webApi.indexOf(random[i]), 1);
        document.getElementById('apiValue').innerText = webApi.join("\n");

        eventLoopMacro();
      }, (i + 1) * 2000);
    }
  }
}

function eventLoopMacro() {
  if (!selectedValues.length && !csArray.length && !cbMicro.length && !webApi.length) {
    for (let i = 0; i < cbMacro.length; i++) {
      // 임시 배열을 만들어서 i+1번째 요소를 제외한 부분을 추출
      let cbMacroCopy = cbMacro.slice(i + 1);

      setTimeout(() => {
        csArray.push(cbMacro[0]);
        document.getElementById('csValue').innerText = csArray.join("\n");

        cbMacro.shift();
        document.querySelector('.word').classList.add('visible');
        deleteCS();

        document.getElementById('cbMacroValue').innerText = cbMacroCopy.join("\n");

        setTimeout(() => {
          document.querySelector('.word').classList.remove('visible');
        }, 1000); // 1초 후에 클래스 제거

      }, (i + 1) * 2000);
    }
  }
}