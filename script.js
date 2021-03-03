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

function newGame() {
  let input = document.getElementById('cellSize');
  let value = input.value.trim();
  if (value != '') {
    for (var i = 0; i < cell.length; i++) {
      cell[i].style.width = `${value}px`;
      cell[i].style.height = `${value}px`;
      cell[i].style.background = 'grey';
      cell[i].style.color = 'white';
      cell[i].textContent = '';
    }
  }
  else{
    for (var i = 0; i < cell.length; i++) {
      cell[i].style.background = 'grey';
      cell[i].style.color = 'white';
      cell[i].textContent = '';
    }
  }
  turnOrder = true;
  field = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
}
