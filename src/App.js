import 'bootstrap/dist/css/bootstrap.min.css';
import { RenderHello, RenderAddingNumbers, RenderAskingQuestions, RenderGreaterLess, RenderMadLib, RenderOddEven, RenderReverse, RenderDirectory, RenderRestaurant, RenderNav } from './Logic.js';
import './App.css';

function App() {
  return (
    <>
      <style>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;900&display=swap');</style>
      <RenderNav />
      <RenderHello />
      <RenderAddingNumbers />
      <RenderAskingQuestions />
      <RenderGreaterLess />
      <RenderMadLib />
      <RenderOddEven />
      <RenderReverse />
      <RenderDirectory />
      <RenderRestaurant />
    </>
  );
}

export default App;
