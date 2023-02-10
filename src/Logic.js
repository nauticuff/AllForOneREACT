import { FetchSayHello, FetchAddingNumbers, FetchAskingQuestions, FetchGreaterLess, FetchMadLib, FetchOddEven, FetchReverse, FetchDirectory, FetchRestaurant } from './Fetch'
import { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';

function RenderHello() {
    const helloInputRef = useRef();
    const [input, setInput] = useState('response goes here');
    let helloInput;
    let helloRes;
    return (
        <>
            <br></br>
            <br></br>
            <input ref={helloInputRef} type="text" placeholder='enter name'></input>
            <Button onClick={async () => {
                helloInput = helloInputRef.current.value;
                if (helloInput === '') return
                helloRes = await FetchSayHello(helloInput);
                setInput(helloRes)
            }} variant="primary">Submit</Button>{' '}
            <p>{input}</p>
        </>
    );
}

function RenderAddingNumbers() {
    const addingInputOneRef = useRef();
    const addingInputTwoRef = useRef();
    const [input, setInput] = useState('response goes here');
    let addingInputOne;
    let addingInputTwo;
    let addingRes;
    
    return (
        <>
            <br></br>
            <br></br>
            <input ref={addingInputOneRef} placeholder='num one'></input>
            <span>+</span>
            <input ref={addingInputTwoRef} placeholder='num two'></input>
            <Button onClick={ async () => {
                addingInputOne = addingInputOneRef.current.value;
                addingInputTwo = addingInputTwoRef.current.value;
                if(addingInputOne === '' || addingInputTwo === '') return
                addingRes = await FetchAddingNumbers(addingInputOne, addingInputTwo)
                setInput(addingRes);
            }} variant="primary">Submit</Button>{' '}
            <p>{input}</p>
        </>
    );
}

function RenderAskingQuestions() {
    return (
        <>
            <br></br>
            <br></br>
            <input placeholder='name'></input>
            <input placeholder='time woke up'></input>
            <Button variant="primary">Submit</Button>{' '}
            <p>response goes here</p>
        </>
    )
}

function RenderGreaterLess() {
    return (
        <>
            <br></br>
            <br></br>
            <input placeholder='num one'></input>
            <span>Less than, greater than, equal to</span>
            <input placeholder='num two'></input>
            <Button variant="primary">Submit</Button>{' '}
            <p>response goes here</p>
        </>
    );
}

function RenderMadLib() {
    return (
        <>
            <br></br>
            <br></br>
            <input placeholder='Dont Even Think About It'></input>
            <Button variant="primary">Submit</Button>{' '}
            <p>response goes here</p>
        </>
    );
}

function RenderOddEven() {
    return (
        <>
            <br></br>
            <br></br>
            <input placeholder='num here'></input>
            <Button variant="primary">Submit</Button>{' '}
            <p>response goes here</p>
        </>
    );
}

function RenderReverse() {
    return (
        <>
            <br></br>
            <br></br>
            <input placeholder='reverse phrase here'></input>
            <Button variant="primary">Submit</Button>{' '}
            <p>response goes here</p>
        </>
    );
}

function RenderDirectory() {
    return (
        <>
            <br></br>
            <br></br>
            <input placeholder='student name'></input>
            <Button variant="primary">Submit</Button>{' '}
            <p>response goes here</p>
        </>
    );
}

function RenderRestaurant() {
    return (
        <>
            <br></br>
            <br></br>
            <input placeholder='Asian, Italian, Mexican'></input>
            <Button variant="primary">Submit</Button>{' '}
            <p>response goes here</p>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
}
export { RenderHello, RenderAddingNumbers, RenderAskingQuestions, RenderGreaterLess, RenderMadLib, RenderOddEven, RenderReverse, RenderDirectory, RenderRestaurant }


