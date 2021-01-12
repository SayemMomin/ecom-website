import logo from './logo.svg';
import './App.css';
import { i18n } from "./components/Translations/I18n";
import ExampleComponents from './components/Translations/ExampleComponents/ExampleComponents';
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState("en");

  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div className="App">
      <button value="arab" onClick={handleOnclick}>
        Arabic
      </button>
      <button value="en" onClick={handleOnclick}>
        English
      </button>
      <button value="es" onClick={handleOnclick}>
        Spanish
      </button>
      <button value="zh" onClick={handleOnclick}>
        Chinese
      </button>
      <ExampleComponents lang={language}/>
    </div>
  );
}

export default App;
