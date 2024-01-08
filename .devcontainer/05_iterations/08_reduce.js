const myNums = [1, 2, 7]

const myTotal = myNums.reduce( function (accumulator,currentValue) {
    // console.log(`Accumulator: ${accumulator} and current value: ${currentValue}`);
    return accumulator + currentValue
}, 0 )

// console.log(myTotal);

// via arrow function
const myTotal2 = myNums.reduce( (acc,currval) => acc+currval , 0 )
// console.log(myTotal2);

const shoppingCart = [
    {
        itemName:'js course',
        price:1999
    },
    {
        itemName:'py course',
        price:999
    },
    {
        itemName:'web-dev course',
        price:7999
    },
    {
        itemName:'android-dev course',
        price:4999
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price , 0 )
console.log(priceToPay);