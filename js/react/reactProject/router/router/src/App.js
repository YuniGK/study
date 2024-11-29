import logo from './logo.svg';
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';

function App() {
  return (
    <div>
      {/*
      router - 경로
      https://reactrouter.com/en/main/router-components/browser-router


      */}
      <Homepage />
      <Aboutpage />
    </div>
  );
}

export default App;
