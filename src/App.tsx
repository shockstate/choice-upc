import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleComponent from './components/ExampleComponent';
import ComponentWithStateVariable from './components/ComponentWithStateVariable';
import QuestionSurvey from './components/QuestionSurveyReal';
import Survey from './models/Survey';

function App() {

  // const [survey, setSurvey] = useState<Survey>();

  // const questions: string[] = []; //http.get.blabalba/
  
  // function onChangeQuestion1 (result: QuestionAnswer) {
  //   // actualitzar l'object survey
  // }
  // function getUserData (result: QuestionAnswer) {
  //   // actualitzar l'object survey
  // }

  return (
    // <Header></Header>
    // <Body></Body> => {
    //   if(result == null )
    //   <Questions></Questions>
    //   if ( result =! null)
    //   <Results></Results>
    // }
    // <Footer></Footer>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ExampleComponent textToShow='hola Nora :)'></ExampleComponent>
        <QuestionSurvey></QuestionSurvey>
        <QuestionSurvey></QuestionSurvey>
        <QuestionSurvey></QuestionSurvey>
        {/* <QuestionSurvey title='Question 1 text' onChange={onChangeQuestion1}></QuestionSurvey>
        <QuestionSurvey title='Question 1 text' onChange={onChangeQuestion1}></QuestionSurvey>
        <QuestionSurvey title='Question 1 text' onChange={onChangeQuestion1}></QuestionSurvey>
        <QuestionSurvey title='Question 1 text' onChange={onChangeQuestion1}></QuestionSurvey> */}
        <ComponentWithStateVariable />
      </header>
    </div>
  );
}

export default App;
