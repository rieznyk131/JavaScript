function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let result = 0.0;
    let value = 1;

    for (const item of currencyValues) {

        if (item.currency === exchangeCurrency) {
            if (item.value !== 0) {
                value = item.value;
            } else {
                return 'error'
            }
            break;
        }
    }

    result = sumUAH / value;
    return result;
}

let currencyValues = [{currency: 'USD', value: 25},
    {currency: 'EUR', value: 42}]

console.log(exchange(10000, currencyValues, 'USD'));
