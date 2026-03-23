
import './App.css';
import PaginationTest from './components/1.pagination/test';
import MusicPlayer from './components/10. music-player';
import ProgressBar from './components/11. progress-bar';
import BMICalculator from './components/12. bmi-calculator';
import ButtonRippleEffect from './components/13. button-ripple-effect';
import DragAndDropFeature from './components/14. drag-and-drop';
import FormValidation from './components/15. simple-form-validation';
import DigitalClock from './components/2.digital-clock';
import CountdownTimerTest from './components/3. countdown-timer/test';
import StepProgressBarTest from './components/4. step-progress-bar/test';
import RandomQuoteGenerator from './components/5. random-quote-generator';
import ToolTipTest from './components/6. Tooltip/test';
import CurrencyConverter from './components/7. currency-converter';
import FilterProducts from './components/8. filter-products';
import TipCalculator from './components/9. tip-calculator';

function App() {
  return (
    <div className='App'>
      {/* <PaginationTest/>
      <DigitalClock/>
      <CountdownTimerTest/>
      <StepProgressBarTest/>
      <RandomQuoteGenerator/>
      <ToolTipTest/>
      <CurrencyConverter/>
      <FilterProducts/>
      <TipCalculator/>
      <MusicPlayer/>
      <ProgressBar/>
      <BMICalculator/>
      <ButtonRippleEffect/> */}
      <DragAndDropFeature/>
      <FormValidation/>
    </div>
  );
}

export default App;
