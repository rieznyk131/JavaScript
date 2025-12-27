function listPrinter (listItem) {
    document.write (`
        <ul>
            <li>${listItem}</li>
            <li>${listItem}</li>
            <li>${listItem}</li>
        </ul>
         `);
    }

listPrinter('lorem ipsum')