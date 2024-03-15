const createColorView = () => {
  const $root = document.querySelector('#root');
  
  // 첫 번째 색상 박스 생성
  const $colorBox1 = document.createElement('div');
  $colorBox1.classList.add('color-box');
  $root.appendChild($colorBox1);
  $colorBox1.innerHTML = 'observer1';

  // 두 번째 색상 박스 생성
  const $colorBox2 = document.createElement('div');
  $colorBox2.classList.add('color-box');
  $root.appendChild($colorBox2);
  $colorBox2.innerHTML = 'observer2';

  const colors = ['red', 'green', 'blue', 'yellow'];

  colors.forEach(color => {
    const $button = document.createElement('button');
    $button.classList.add('btn-color');
    $root.appendChild($button);
    $button.innerHTML = color;
  });

  // 각 색상 박스를 업데이트하는 함수
  const updateColorBox = (newColor, $box) => {
    $box.style.backgroundColor = newColor;
  };

   // 색상 업데이트 함수 객체
   const updateFunctions = {
    update1: (newColor) => {
      updateColorBox(newColor, $colorBox1);
    },
    update2: (newColor) => {
      updateColorBox(newColor, $colorBox2);
    }
  };

  return updateFunctions;

};

export { createColorView };
