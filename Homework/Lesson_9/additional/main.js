const boxes = document.querySelectorAll('.box');

let maxHeight = 0;

boxes.forEach((box) => {maxHeight = Math.max(maxHeight, box.offsetHeight)});

boxes.forEach((box) => {box.style.height = maxHeight + 'px';});
