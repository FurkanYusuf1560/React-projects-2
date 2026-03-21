
import './App.css';
import PaginationTest from './components/1.pagination/test';
import DigitalClock from './components/2.digital-clock';
import CountdownTimerTest from './components/3. countdown-timer/test';
import StepProgressBarTest from './components/4. step-progress-bar/test';
import RandomQuoteGenerator from './components/5. random-quote-generator';
import ToolTipTest from './components/6. Tooltip/test';
import CurrencyConverter from './components/7. currency-converter';
import FilterProducts from './components/8. filter-products';

function App() {
  return (
    <div className='App'>
      <PaginationTest/>
      <DigitalClock/>
      <CountdownTimerTest/>
      <StepProgressBarTest/>
      <RandomQuoteGenerator/>
      <ToolTipTest/>
      <CurrencyConverter/>
      <FilterProducts/>
    </div>
  );
}

export default App;
