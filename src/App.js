import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import DropDownMenu from './DropDownMenu';
import CategoryButtons from './CategoryButton';

function App() {
  return (
    <div className="App">
      <h1 className='header'>London Mini Guide</h1>
      <DropDownMenu/>
      <CategoryButtons/>
    </div>
  );
}

export default App;
