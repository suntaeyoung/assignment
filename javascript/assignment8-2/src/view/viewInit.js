export default function viewInit() {
  const $root = document.querySelector('#root');

  $root.innerHTML = /* html */ `
    <div class="container">
      <div class="black-bg">
        <div class="edit-box">
          <div class="edit-container">
            <div class="edit-item">
              <span class="text">Edit note</span>
              <span class="edit-close">x</span>
            </div>
            <div class="addList addShow">
              <span>Note</span>
              <textarea class="edit-textarea" rows="20" maxlength="500" placeholder="Enter a note" ></textarea>
              <div class="saveBox">
                <button class="saveBtn">Save note</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column-black-bg">
        <div class="column-edit-box">
          <div class="column-edit-container">
            <div class="column-edit-item">
              <span class="text">Edit column</span>
              <span class="column-edit-close">x</span>
            </div>
            <div class="addList addShow">
              <span>Column name</span>
              <textarea class="column-edit-textarea" rows="1" maxlength="50"></textarea>
              <div class="saveBox">
                <button class="updateColumnBtn">update Column</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="black-nav">
        <h4 class="title">TODO 서비스</h4>
        <h4 class="menu">menu</h4>
        <h4 class="dark-btn">🌙</h4>
      </div>


      <div class="todo-container">
        <div class="todo listItems">
          <div class="item">
            <span class="text column todo-column"></span>
            <span class="todo-count">(0)</span>
            <span class="plusBtn" id="todoAddBtn">+</span>
            <span class="deleteBtn">x</span>
          </div>
          <div class="addList" id="todoInput">
            <textarea class="textarea" maxlength="500" placeholder="Enter a note" ></textarea>
            <div style="text-align:right">
              <span><span class="reCount">0</span> / 500</span>
            </div>
            <div class="buttonBox">
              <button class="addBtn" disabled>Add</button>
              <button class="cancelBtn">Cancel</button>
            </div>
          </div>
          <div class="listBoxes"></div>
        </div>


        <div class="todo doing listItems">
          <div class="item">
            <span class="text column doing-column"></span>
            <span class="todo-count">(0)</span>
            <span class="plusBtn" id="doingAddBtn">+</span>
            <span class="deleteBtn">x</span>
          </div>
          <div class="addList" id="doingInput">
            <textarea class="textarea" maxlength="500" placeholder="Enter a note"></textarea>
            <div style="text-align:right">
              <span><span class="reCount">0</span> / 500</span>
            </div>
            <div class="buttonBox">
              <button class="addBtn" disabled>Add</button>
              <button class="cancelBtn">Cancel</button>
            </div>
          </div>
          <div class="listBoxes"></div>
        </div>

        <div class="todo done listItems">
          <div class="item">
            <span class="text column done-column"></span>
            <span class="todo-count">(0)</span>
            <span class="plusBtn" id="doneAddBtn">+</span>
            <span class="deleteBtn">x</span>
          </div>
          <div class="addList" id="doneInput">
            <textarea class="textarea" maxlength="500" placeholder="Enter a note"></textarea>
            <div style="text-align:right">
              <span><span class="reCount">0</span> / 500</span>
            </div>
            <div class="buttonBox">
              <button class="addBtn" disabled>Add</button>
              <button class="cancelBtn">Cancel</button>
            </div>
          </div>
          <div class="listBoxes"></div>
        </div>

      </div>
    </div>
  `;
}