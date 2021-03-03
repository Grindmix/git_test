"use strict";

let cell = document.getElementsByClassName('cell');
let turnOrder = true;
let columns;
let field = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function turn(row, column) {
  let elem = document.getElementById(`row${row},column${column}`);
  if (elem.textContent != ''){
    return
  }
  if (turnOrder == true) {
    elem.textContent = 'X';
    field[row][column] = 'X';
    turnOrder = false;
  }
  else {
    elem.textContent = 'O';
    field[row][column] = 'O';
    turnOrder = true;
  }
  winRow();
  winColumn();
  winDiagonal();
}
