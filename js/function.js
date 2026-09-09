const sayGoodMorning = () => {
    console.log('おはようございます！');
    console.log('昨日はよく眠れましたか？');
    console.log('今日も一日頑張りましょう！');
}

const sayGoodEvening = () => {
    console.log('こんばんわ!');
    console.log('今日も一日お疲れさまでした。');
}

sayGoodMorning();

sayGoodEvening();

const calculateTotal = (price) => {
    console.log(price + 500 + '円');
}

calculateTotal(1200);

const addTwoArgument = (price, shippingFree) => {
    console.log(price + shippingFree + '円');
}

addTwoArgument(1200, 700);

const double = (num) => {
    return num * 2;
}

console.log(double(30));

const useVariable = () => {
    const userNames = '侍太郎';
    console.log(userNames);
}

useVariable();

console.log(userNames);