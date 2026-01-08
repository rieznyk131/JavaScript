//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let listPrinter = (listItem) =>
  document.write(
      `<ul>
        <li>${listItem}</li>
        <li>${listItem}</li>
        <li>${listItem}</li>
      </ul>`
  );

listPrinter(`lorem ipsum`)


