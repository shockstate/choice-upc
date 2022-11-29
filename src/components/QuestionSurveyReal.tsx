import React, { useState } from "react";


interface QuestionSurveyProps {
}

const QuestionSurvey = (props: QuestionSurveyProps) => {

    // guardem el resultat del checkbox -> cada cop que clickis se t'imprimeixi per consola (console.log(value))

  return (
    <div>
        <div>
            TITLE PREGUNTA
        </div>
        <div>
            aixo es un checkbox
            aixo es un altre
            aixo es un altre
        </div>
    </div>
  );
};

export default QuestionSurvey;
