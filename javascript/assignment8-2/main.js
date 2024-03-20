import { initializeApp } from './src/controller/controller.js';
import { listInit } from './src/controller/addList.js';
import viewInit from './src/view/viewInit.js';

window.addEventListener('DOMContentLoaded', () => {
  viewInit();
  listInit();
  initializeApp();
})

