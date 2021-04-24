import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./calculator.css";

const CalculatorResults = (props) => {
  return (
    <div>
      {results}
    </div>
  )
}

export default Calculator;