import Accordion from './Components/accordion/Accordion';
// import AddStuff from './Components/addstuff/AddStuff';
import './index.css'

function App() {
  return (
   <div>
    <h1>
      Hello World!
    </h1>
    <Accordion title='Product Info' content='This is product stuff' />
    <div>
      {/* <AddStuff /> */}
    </div>
   </div>
  );
}

export default App;
