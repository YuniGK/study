/* eslint-disable */ 

import Box from './Box';
import BoxChange from './BoxChange';

function App() {  
  return (
    <div className="App">
      <Box/>

      <BoxChange name = "text 01" num = "01"/>
      <BoxChange name = "text 02" num = "02"/>
      <BoxChange name = "text 03" num = "03"/>
    </div>
  );
}

export default App;
