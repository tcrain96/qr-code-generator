import './App.css'
import Generator from './components/Generator'
import AdditionalGeneratorButton from './components/AdditionalGeneratorButton'
import { useState } from "react";

function App() {

  const [numGenerators, SetNumGenerator] = useState(1);
  const generators = [];
  const AddLinkGenerator = ()=>{
    SetNumGenerator(numGenerators + 1);
  }
  for(var i = 0; i < numGenerators; i++){
    generators.push(<Generator key={i}/>)
  }

  return (
    <>
     {generators}
     <AdditionalGeneratorButton AddLinkAmount={AddLinkGenerator}/>
    </>
  )
}

export default App
