import { FetchSayHello, FetchAddingNumbers, FetchAskingQuestions, FetchGreaterLess, FetchMadLib, FetchOddEven, FetchReverse, FetchDirectory, FetchRestaurant } from './Services/DataService.js'
import { useRef, useState } from 'react';
import userEvent from '@testing-library/user-event';

function RenderNav(){
    return (
    <header>
        <a className='logo'>
            <svg width="67" height="36" viewBox="0 0 67 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="40" fill="black"></rect>
          <path d="M16.096 23.432H10.432L9.592 26H4L10.216 9.008H16.36L22.552 26H16.936L16.096 23.432ZM14.8 19.424L13.264 14.696L11.728 19.424H14.8Z" fill="#FFFBF0"></path>
          <path d="M36.2 9.008V13.232H29.528V15.584H34.328V19.592H29.528V26H24.2V9.008H36.2Z" fill="#FFFBF0"></path>
          <path d="M44.48 26.168C42.88 26.168 41.408 25.792 40.064 25.04C38.736 24.288 37.68 23.248 36.896 21.92C36.112 20.592 35.72 19.096 35.72 17.432C35.72 15.768 36.112 14.272 36.896 12.944C37.68 11.616 38.736 10.584 40.064 9.848C41.408 9.096 42.88 8.72 44.48 8.72C46.08 8.72 47.544 9.096 48.872 9.848C50.2 10.584 51.248 11.616 52.016 12.944C52.8 14.272 53.192 15.768 53.192 17.432C53.192 19.096 52.8 20.592 52.016 21.92C51.248 23.248 50.192 24.288 48.848 25.04C47.52 25.792 46.064 26.168 44.48 26.168ZM44.48 21.2C45.536 21.2 46.352 20.864 46.928 20.192C47.504 19.504 47.792 18.584 47.792 17.432C47.792 16.264 47.504 15.344 46.928 14.672C46.352 13.984 45.536 13.64 44.48 13.64C43.408 13.64 42.584 13.984 42.008 14.672C41.432 15.344 41.144 16.264 41.144 17.432C41.144 18.584 41.432 19.504 42.008 20.192C42.584 20.864 43.408 21.2 44.48 21.2Z" fill="#FFFBF0"></path>
            </svg>
        </a>
        <p className='menu'>Menu</p>
    </header>
    );
}

function RenderHello() {
    const helloInputRef = useRef();
    const [input, setInput] = useState('response goes here');
    let helloInput;
    let helloRes;
    return (
        <>
            <div className='card-row'>
            <div className='large'>
                <h1 className='text-end'>SAY HELLO</h1>
                <div className='response-area'>
                    <p className='text-center'>{input}</p>
                </div>
                <button onClick={async () => {
                helloInput = helloInputRef.current.value;
                if (helloInput === '') return
                helloRes = await FetchSayHello(helloInput);
                setInput(helloRes)
            }}  className='btn-right'>Submit</button>
                <input ref={helloInputRef} className='input' placeholder='enter name here'></input>
            </div>
            <div className='small'>
                <p className='info'>Enter your name and be mystified by the magic that is a personal greeting.</p>
            </div>
            </div>
            <div className='text-center'>
                <svg width="304" height="304" viewBox="0 0 304 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M152 166.25C159.87 166.25 166.25 159.87 166.25 152C166.25 144.13 159.87 137.75 152 137.75C144.13 137.75 137.75 144.13 137.75 152C137.75 159.87 144.13 166.25 152 166.25Z" fill="black"></path>
                <path d="M228 166.25C235.87 166.25 242.25 159.87 242.25 152C242.25 144.13 235.87 137.75 228 137.75C220.13 137.75 213.75 144.13 213.75 152C213.75 159.87 220.13 166.25 228 166.25Z" fill="black"></path>
                <path d="M76 166.25C83.8701 166.25 90.25 159.87 90.25 152C90.25 144.13 83.8701 137.75 76 137.75C68.1299 137.75 61.75 144.13 61.75 152C61.75 159.87 68.1299 166.25 76 166.25Z" fill="black"></path>
                </svg>
            </div>
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
            <div className='card-row'>
            <div className='small'>
                <p className='info'>Enter two numbers and be mystified by the magic that is basic arithmetic.</p>
            </div>
            <div className='large'>
                <h1 >ADDING NUMBERS</h1>
                <div className='response-area'>
                    <p className='text-center'>{input}</p>
                </div>
                <input ref={addingInputOneRef} className='input-left' placeholder='enter number'></input>
                <input ref={addingInputTwoRef} className='input-left' placeholder='enter number'></input>
                <button onClick={ async () => {
                addingInputOne = addingInputOneRef.current.value;
                addingInputTwo = addingInputTwoRef.current.value;
                if(addingInputOne === '' || addingInputTwo === '') return
                addingRes = await FetchAddingNumbers(addingInputOne, addingInputTwo)
                setInput(addingRes);
            }}  className='btn-left'>Submit</button>
                
            </div>
            </div>
            <div className='text-center'>
                <svg width="304" height="304" viewBox="0 0 304 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M152 166.25C159.87 166.25 166.25 159.87 166.25 152C166.25 144.13 159.87 137.75 152 137.75C144.13 137.75 137.75 144.13 137.75 152C137.75 159.87 144.13 166.25 152 166.25Z" fill="black"></path>
                <path d="M228 166.25C235.87 166.25 242.25 159.87 242.25 152C242.25 144.13 235.87 137.75 228 137.75C220.13 137.75 213.75 144.13 213.75 152C213.75 159.87 220.13 166.25 228 166.25Z" fill="black"></path>
                <path d="M76 166.25C83.8701 166.25 90.25 159.87 90.25 152C90.25 144.13 83.8701 137.75 76 137.75C68.1299 137.75 61.75 144.13 61.75 152C61.75 159.87 68.1299 166.25 76 166.25Z" fill="black"></path>
                </svg>
            </div>

        </>
    );
}

function RenderAskingQuestions() {
    const timeRef = useRef();
    const nameRef = useRef();
    const [input, setInput] = useState('response goes here');
    let timeValue;
    let nameValue;
    let askingRes;
    return (
        <>
            
            <div className="card-row">
            <div className="large">
            <h1 className="text-end">ASKING QUESTIONS</h1>
            <div className="response-area">
              <p>{input}</p>
            </div>
            <button onClick={ async () => {
                timeValue = timeRef.current.value;
                nameValue = nameRef.current.value;
                if(timeValue === '' || nameValue === '') return
                askingRes = await FetchAskingQuestions(nameValue, timeValue)
                setInput(askingRes);
            }} type="button" className="btn-right">Submit</button>
            <input ref={timeRef} className='input-right' type="text" placeholder="enter time here"></input>
            <input ref={nameRef} className='input-right' type="text" placeholder="enter name here"></input>
          </div>
          <div className="small">
            <p className='info'>Enter your name and the time
              you woke up to
              be mystified by
              a <span >very</span> personal
              greeting.</p>
          </div>
        </div>
        <div className='text-center'>
                <svg width="304" height="304" viewBox="0 0 304 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M152 166.25C159.87 166.25 166.25 159.87 166.25 152C166.25 144.13 159.87 137.75 152 137.75C144.13 137.75 137.75 144.13 137.75 152C137.75 159.87 144.13 166.25 152 166.25Z" fill="black"></path>
                <path d="M228 166.25C235.87 166.25 242.25 159.87 242.25 152C242.25 144.13 235.87 137.75 228 137.75C220.13 137.75 213.75 144.13 213.75 152C213.75 159.87 220.13 166.25 228 166.25Z" fill="black"></path>
                <path d="M76 166.25C83.8701 166.25 90.25 159.87 90.25 152C90.25 144.13 83.8701 137.75 76 137.75C68.1299 137.75 61.75 144.13 61.75 152C61.75 159.87 68.1299 166.25 76 166.25Z" fill="black"></path>
                </svg>
            </div>
        </>
    )
}

function RenderGreaterLess() {
    const numOneRef = useRef();
    const numTwoRef = useRef();
    const [input, setInput] = useState('response goes here');
    let numOneValue;
    let numTwoValue;
    let greaterlessRes;
    return (
        <>
            <div className='card-row'>
            <div className='small'>
                <p className='info'>Enter two numbers and be mystified by the magic that is basic comparison.</p>
            </div>
            <div className='large'>
                <h1>GREATER THAN OR LESS THAN</h1>
                <div className='response-area'>
                    <p className='text-center'>{input}</p>
                </div>
                <input ref={numOneRef} className='input-left' placeholder='enter number'></input>
                <input ref={numTwoRef} className='input-left' placeholder='enter number'></input>
                <button onClick={ async () => {
                numOneValue = numOneRef.current.value;
                numTwoValue = numTwoRef.current.value;
                if(numOneValue === '' || numTwoValue === '') return
                greaterlessRes = await FetchGreaterLess(numOneValue, numTwoValue)
                setInput(greaterlessRes);
            }}  className='btn-left'>Submit</button>
                
            </div>
            </div>
            <div className='text-center'>
                <svg width="304" height="304" viewBox="0 0 304 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M152 166.25C159.87 166.25 166.25 159.87 166.25 152C166.25 144.13 159.87 137.75 152 137.75C144.13 137.75 137.75 144.13 137.75 152C137.75 159.87 144.13 166.25 152 166.25Z" fill="black"></path>
                <path d="M228 166.25C235.87 166.25 242.25 159.87 242.25 152C242.25 144.13 235.87 137.75 228 137.75C220.13 137.75 213.75 144.13 213.75 152C213.75 159.87 220.13 166.25 228 166.25Z" fill="black"></path>
                <path d="M76 166.25C83.8701 166.25 90.25 159.87 90.25 152C90.25 144.13 83.8701 137.75 76 137.75C68.1299 137.75 61.75 144.13 61.75 152C61.75 159.87 68.1299 166.25 76 166.25Z" fill="black"></path>
                </svg>
            </div>
        </>
    );
}

function RenderMadLib() {
    const nounOneRef = useRef();
    const nounTwoRef = useRef();
    const nounThreeRef = useRef();
    const nounFourRef = useRef();
    const nounFiveRef = useRef();
    const adjOneRef = useRef();
    const adjTwoRef = useRef();
    const adjThreeRef = useRef();
    const adjFourRef = useRef();
    const adjFiveRef = useRef();
    const adverbRef = useRef();
    
    const [input, setInput] = useState('response goes here');
    let nounOneValue;
    let nounTwoValue;
    let nounThreeValue;
    let nounFourValue;
    let nounFiveValue;
    let adjOneValue;
    let adjTwoValue;
    let adjThreeValue;
    let adjFourValue;
    let adjFiveValue;
    let adverbValue;

    let madLibRes;
    return (
        <>
            <div className="card-row">
            <div className="large">
            <h1 className="text-end">MAD LIB</h1>
            <div className="response-area">
              <p>{input}</p>
            </div>
            <div>
                <div className="input-left"><input ref={adverbRef} type="text" placeholder="enter an adverb"></input></div>
                <div className="input-left"><input ref={adjOneRef} type="text" placeholder="enter an adjective"></input></div>
                <div className="input-left"><input ref={nounOneRef} type="text" placeholder="enter a noun"></input></div>
            </div>
            <div>
                <div className="input-left"><input ref={nounFiveRef} type="text" placeholder="enter a noun"></input></div>
                <div className="input-left"><input ref={adjTwoRef} type="text" placeholder="enter an adjective"></input></div>
                <div className="input-left"><input ref={nounTwoRef} type="text" placeholder="enter a noun"></input></div>
                <div className="input-left"><input ref={adjFourRef} type="text" placeholder="enter an adjective"></input></div>
            </div>
            <div>
                <div className="input-left"><input ref={adjThreeRef} type="text" placeholder="enter an adjective"></input></div>
                <div className="input-left"><input ref={nounThreeRef} type="text" placeholder="enter a noun"></input></div>
                <div className="input-left"><input ref={adjFiveRef} type="text" placeholder="enter an adjective"></input></div>
                <div className="input-left"><input ref={nounFourRef} type="text" placeholder="enter a noun"></input></div>
            </div>
            <button onClick={ async () => {
                adverbValue = adverbRef.current.value;
                adjOneValue = adjOneRef.current.value;
                nounOneValue = nounOneRef.current.value;
                nounFiveValue = nounFiveRef.current.value;
                adjTwoValue = adjTwoRef.current.value;
                nounTwoValue = nounTwoRef.current.value;
                adjFourValue = adjFourRef.current.value;
                adjThreeValue = adjThreeRef.current.value;
                nounThreeValue = nounThreeRef.current.value;
                adjFiveValue = adjFiveRef.current.value;
                nounFourValue =  nounFourRef.current.value;

                if(adverbValue === '' || adjOneValue === '' || nounOneValue === '' || nounFiveValue === '' || adjTwoValue === '' || nounTwoValue === '' || adjFourValue === '' || adjThreeValue === '' || nounThreeValue === '' || adjFiveValue === '' || nounFourValue === '') return
                madLibRes = await FetchMadLib(nounOneValue, nounTwoValue, nounThreeValue, adjOneValue, adjTwoValue, adjThreeValue, nounFourValue, adverbValue, nounFiveValue, adjFourValue, adjFiveValue)
                setInput(madLibRes);
            }} type="button" className="btn-right">Submit</button>
          </div>
          
          <div className="small">
            <p className='info'>Enter your best guesses and be mystified by an amusing mad lib.</p>
          </div>
        </div>
        <div className='text-center'>
                <svg width="304" height="304" viewBox="0 0 304 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M152 166.25C159.87 166.25 166.25 159.87 166.25 152C166.25 144.13 159.87 137.75 152 137.75C144.13 137.75 137.75 144.13 137.75 152C137.75 159.87 144.13 166.25 152 166.25Z" fill="black"></path>
                <path d="M228 166.25C235.87 166.25 242.25 159.87 242.25 152C242.25 144.13 235.87 137.75 228 137.75C220.13 137.75 213.75 144.13 213.75 152C213.75 159.87 220.13 166.25 228 166.25Z" fill="black"></path>
                <path d="M76 166.25C83.8701 166.25 90.25 159.87 90.25 152C90.25 144.13 83.8701 137.75 76 137.75C68.1299 137.75 61.75 144.13 61.75 152C61.75 159.87 68.1299 166.25 76 166.25Z" fill="black"></path>
                </svg>
            </div>
        </>
    );
}

function RenderOddEven() {
    const oddEvenRef = useRef();
    const [input, setInput] = useState('response goes here');
    let oddEvenValue;
    let oddEvenRes;

    return (
        <>
            <div className='card-row'>
            <div className='small'>
                <p className='info'>Enter an integer and be mystified by the magic that is basic deduction.</p>
            </div>
            <div className='large'>
                <h1>ODD OR EVEN</h1>
                <div className='response-area'>
                    <p className='text-center'>{input}</p>
                </div>
                <input ref={oddEvenRef} className='input-left' placeholder='enter number'></input>
                <button onClick={ async () => {
                oddEvenValue = oddEvenRef.current.value;
                if(oddEvenValue === '') return
                oddEvenRes = await FetchOddEven(oddEvenValue)
                setInput(oddEvenRes);
            }}  className='btn-left'>Submit</button>
            </div>
            </div>
            <div className='text-center'>
                <svg width="304" height="304" viewBox="0 0 304 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M152 166.25C159.87 166.25 166.25 159.87 166.25 152C166.25 144.13 159.87 137.75 152 137.75C144.13 137.75 137.75 144.13 137.75 152C137.75 159.87 144.13 166.25 152 166.25Z" fill="black"></path>
                <path d="M228 166.25C235.87 166.25 242.25 159.87 242.25 152C242.25 144.13 235.87 137.75 228 137.75C220.13 137.75 213.75 144.13 213.75 152C213.75 159.87 220.13 166.25 228 166.25Z" fill="black"></path>
                <path d="M76 166.25C83.8701 166.25 90.25 159.87 90.25 152C90.25 144.13 83.8701 137.75 76 137.75C68.1299 137.75 61.75 144.13 61.75 152C61.75 159.87 68.1299 166.25 76 166.25Z" fill="black"></path>
                </svg>
            </div>
        </>
    );
}

function RenderReverse() {
    const reverseRef = useRef();
    const [input, setInput] = useState('response goes here');
    let reverseValue;
    let reverseRes;

    return (
        <>
            <div className='card-row'>
            <div className='large'>
                <h1 className='text-end'>REVERSE IT</h1>
                <div className='response-area'>
                    <p className='text-center'>{input}</p>
                </div>
                <button onClick={async () => {
                reverseValue = reverseRef.current.value;
                if (reverseValue === '') return
                reverseRes = await FetchReverse(reverseValue);
                setInput(reverseRes)
            }}  className='btn-right'>Submit</button>
                <input ref={reverseRef} className='input' placeholder='enter name here'></input>
            </div>
            <div className='small'>
                <p className='info'>Enter your phrase and be mystified by its counter.</p>
            </div>
            </div>
            <div className='text-center'>
                <svg width="304" height="304" viewBox="0 0 304 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M152 166.25C159.87 166.25 166.25 159.87 166.25 152C166.25 144.13 159.87 137.75 152 137.75C144.13 137.75 137.75 144.13 137.75 152C137.75 159.87 144.13 166.25 152 166.25Z" fill="black"></path>
                <path d="M228 166.25C235.87 166.25 242.25 159.87 242.25 152C242.25 144.13 235.87 137.75 228 137.75C220.13 137.75 213.75 144.13 213.75 152C213.75 159.87 220.13 166.25 228 166.25Z" fill="black"></path>
                <path d="M76 166.25C83.8701 166.25 90.25 159.87 90.25 152C90.25 144.13 83.8701 137.75 76 137.75C68.1299 137.75 61.75 144.13 61.75 152C61.75 159.87 68.1299 166.25 76 166.25Z" fill="black"></path>
                </svg>
            </div>
        </>
    );
}

function RenderDirectory() {
    const directRef = useRef();
    const [firstRender, setFirst] = useState('First Name: ?');
    const [lastRender, setLast] = useState('Last Name: ?');
    const [slackRender, setSlack] = useState('Slack Name: ?');
    const [emailRender, setEmail] = useState('Email: ?');
    let directValue;
    let first;
    let last;
    let slack;
    let email;

    let directRes;

    return (
        <>
            <div className='card-row'>
            <div className='small'>
                <p className='info'>Enter that which you seek.</p>
            </div>
            <div className='large'>
                <h1>STUDENT DIRECTORY</h1>
                <div className='response-area'>
                    <p className='text-center'>{firstRender}</p>
                    <p className='text-center'>{lastRender}</p>
                    <p className='text-center'>{slackRender}</p>
                    <p className='text-center'>{emailRender}</p>
                </div>
                <input ref={directRef} className='input-left' placeholder='enter query here'></input>
                <button onClick={ async () => {
                directValue = directRef.current.value;
                if(directValue === '') return
                directRes = await FetchDirectory(directValue)
                first = directRes.firstName;
                last = directRes.lastName;
                slack = directRes.slackName;
                email = directRes.email;
                console.log(first)
                console.log(last)
                console.log(slack)
                console.log(email)
                setFirst(first);
                setLast(last);
                setSlack(slack);
                setEmail(email);
            }}  className='btn-left'>Submit</button>
            </div>
            </div>
            <div className='text-center'>
                <svg width="304" height="304" viewBox="0 0 304 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M152 166.25C159.87 166.25 166.25 159.87 166.25 152C166.25 144.13 159.87 137.75 152 137.75C144.13 137.75 137.75 144.13 137.75 152C137.75 159.87 144.13 166.25 152 166.25Z" fill="black"></path>
                <path d="M228 166.25C235.87 166.25 242.25 159.87 242.25 152C242.25 144.13 235.87 137.75 228 137.75C220.13 137.75 213.75 144.13 213.75 152C213.75 159.87 220.13 166.25 228 166.25Z" fill="black"></path>
                <path d="M76 166.25C83.8701 166.25 90.25 159.87 90.25 152C90.25 144.13 83.8701 137.75 76 137.75C68.1299 137.75 61.75 144.13 61.75 152C61.75 159.87 68.1299 166.25 76 166.25Z" fill="black"></path>
                </svg>
            </div>
        </>
    );
}

function RenderRestaurant() {
    const restaurantRef = useRef();
    const [input, setInput] = useState('response goes here');
    let restaurantValue;
    let restaurantRes;
    return (
        <>
            <div className='card-row'>
            <div className='small'>
                <p className='info'>Enter either Asian, Mexican, or Italian for a random restaurant from that cuisine.</p>
            </div>
            <div className='large'>
                <h1>RESTAURANT PICKER</h1>
                <div className='response-area'>
                    <p className='text-center'>{input}</p>
                </div>
                <input ref={restaurantRef} className='input-left' placeholder='enter cuisine here'></input>
                <button onClick={ async () => {
                restaurantValue = restaurantRef.current.value;
                if(restaurantValue === '') return
                restaurantRes = await FetchRestaurant(restaurantValue)
                setInput(restaurantRes);
            }}  className='btn-left'>Submit</button>
            </div>
            </div>
        </>
    );
}
export { RenderNav, RenderHello, RenderAddingNumbers, RenderAskingQuestions, RenderGreaterLess, RenderMadLib, RenderOddEven, RenderReverse, RenderDirectory, RenderRestaurant }


