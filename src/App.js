import 'bootstrap/dist/css/bootstrap.min.css';
import { RenderHello, RenderAddingNumbers, RenderAskingQuestions, RenderGreaterLess, RenderMadLib, RenderOddEven, RenderReverse, RenderDirectory, RenderRestaurant } from './Logic';
import './App.css';

function App() {
  return (
    <>
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
