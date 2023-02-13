export default async function FetchSayHello(name){
    const res = await fetch(`https://afoday2carlos.azurewebsites.net/sayhello/greet/${name}`);
    const data = await res.text();
    return data
}

async function FetchAddingNumbers(numOne, numTwo){
    const res = await fetch(`https://afoday2carlos.azurewebsites.net/add2numbers/add/${numOne}/${numTwo}`);
    const data = await res.text();
    return data
}

async function FetchAskingQuestions(name, time){
    const res = await fetch(`https://afoday2carlos.azurewebsites.net/questions/${name}/${time}`);
    const data = await res.text();
    return data
}

async function FetchGreaterLess(numOne, numTwo){
    const res = await fetch(`https://afoday2carlos.azurewebsites.net/evaluate/values/${numOne}/${numTwo}`);
    const data = await res.text();
    return data
}

async function FetchMadLib(nounOne,nounTwo,nounThree,adjOne,adjTwo,adjThree,nounFour,adverb,nounFive,adjFour,adjFive) { 
    const res = await fetch(`https://afoday2carlos.azurewebsites.net/story/${nounOne}/${nounTwo}/${nounThree}/${adjOne}/${adjTwo}/${adjThree}/${nounFour}/${adverb}/${nounFive}/${adjFour}/${adjFive}`); 
    const data = await res.text();
    return data
}

async function FetchOddEven(integer){
    const res = await fetch(`https://afoday2carlos.azurewebsites.net/oddoreven/${integer}`);
    const data = await res.text();
    return data
}

async function FetchReverse(phrase){
    const res = await fetch(`https://afoday2carlos.azurewebsites.net/enterstring/${phrase}`);
    const data = await res.text();
    return data
}

async function FetchDirectory(info){
    const res = await fetch(`https://afoday2carlos.azurewebsites.net/studentdirectory/getstudentbyinfo/${info}`);
    const data = await res.json();
    return data
}

async function FetchRestaurant(cuisine){
    const res = await fetch(`https://afoday2carlos.azurewebsites.net/category/${cuisine}`);
    const data = await res.text();
    return data
}

export { FetchSayHello, FetchAddingNumbers, FetchAskingQuestions, FetchGreaterLess, FetchMadLib, FetchOddEven, FetchReverse, FetchDirectory, FetchRestaurant }




