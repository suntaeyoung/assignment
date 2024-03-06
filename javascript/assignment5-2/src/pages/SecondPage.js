export default function secondPageContents() {
  return /* html */`
    <div class="container">
      <div class="containerTitle">
        <div class="titleCap"></div>
        <div class="titleText">Survey</div>
        <div class="titleSubText">* 표시는 필수 질문임</div>
        
      </div>

      <div class="containerSelect">
        <div class="titleCap">
          <div class="titleText">section2</div>
        </div>
        <div class="selectArea">
          <div class="selectText">
            <span class="selectInput">select</span>
            <span class="star"> *</span>
          </div>
          <div class="selectGroup">
            <select class="selectBoxes">
              <option disabled selected value="">선택하세요</option>
              <option value="select option1">select option1</option>
              <option value="select option2">select option2</option>
              <option value="select option3">select option3</option>
            </select>
          </div>
        </div>
      </div>

      <div class="containerTextarea">
        <div class="textAreaBox">
          <div class="AreaText">
            <span class="textArea">textarea</span>
            <span class="star"> *</span>
          </div>
          <div>
            <textarea id="myTextarea" placeholder="내 답변"></textarea>
          </div> 
        </div>
      </div>

      <div class="footerBtn">
        <div class="btnBox">
          <button data-navigate="/" class="backPage btn">이전</button>
          <button data-navigate="/third" class="submitBtn btn">제출</button>
          <a href="/" class="deletePage reset btn">양식 지우기</a>
        </div>
      </div>
    </div>
  `;
}