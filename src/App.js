import React, {useState} from 'react';
import Personal from './Personal';
import Medical from './Medical';
import Submit from './Submit';
import Complete from './Complete';

function App() {
  const [stage, setStage] = useState('personal');
  const [fields, setFields] = useState({});

  //update the global variable, Fields, accessible to components via props
  let updateFields = (name, value) => {
    let temp = {...fields};
    temp[name] = value;
    setFields(temp);
  }

  //Rerender function for each stage of the form, accessible to components 'back' and 'next' buttons via props
  let reRender = (e) => {
    setStage(e)
  }

  return (
    stage === "personal" ? 
      <Personal 
        reRender={reRender} 
        fields={fields} 
        updateFields={(name, value) => updateFields(name, value)} 
        /> : 
        stage === "medical" ? 
          <Medical 
            reRender={reRender} 
            fields={fields} 
            updateFields={(name, value) => updateFields(name, value)} 
            /> : 
            stage === "submit" ?
              <Submit 
                reRender={reRender} 
                fields={fields} 
                updateFields={(name, value) => updateFields(name, value)} 
                /> : 
                <Complete />
  )
}

export default App;
