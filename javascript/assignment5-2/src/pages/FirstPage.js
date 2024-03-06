export default function firstPageContents() {
  return /* html */`
    <div class="container">
      <div class="containerTitle">
        <div class="titleCap"></div>
        <div class="titleText">Survey</div>
        <div class="titleSubText">* 표시는 필수 질문임</div>
      </div>

      <form id="myForm">
        <div class="containerRadio">
          <div class="radioText">
            <span class="radioInput">radio input</span>
            <span class="star"> *</span>
          </div>
          <div class="radioGroup">
            <div class="radioBox">
              <input type="radio" name="radioGroup" id="radio option1">
              <label for="radio option1"> radio option1</label>
            </div>
            <div class="radioBox">
              <input type="radio" name="radioGroup" id="radio option2">
              <label for="radio option2"> radio option2</label>
            </div>
            <div class="radioBox">
              <input type="radio" name="radioGroup" id="radio option3">
              <label for="radio option3"> radio option3</label>
            </div>
          </div>
        </div>

        <div class="containerCheckbox">
          <div class="checkText">
            <span class="checkInput">checkbox input</span>
            <span class="star"> *</span>
          </div>
          <div class="checkGroup">
            <div class="checkBox">
              <input type="checkbox" id="check option1">
              <label for="check option1"> check option1</label>
            </div>
            <div class="checkBox">
              <input type="checkbox" id="check option2">
              <label for="check option2"> check option2</label>
            </div>
            <div class="checkBox">
              <input type="checkbox" id="check option3">
              <label for="check option3"> check option3</label>
            </div>
          </div>
        </div>
      </form>
      <div class="footerBtn">
        <div class="btnBox">
          <button data-navigate="/second" class="nextPage btn">다음</button>
          <a href="/" class="deletePage reset btn">양식 지우기</a>
        </div>
      </div>
    </div>
  `;
}