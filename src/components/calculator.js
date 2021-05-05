import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./calculator.css";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState(1);
  const [secondNumber, setSecondNumber] = useState(2);
  const [operator, setOperator] = useState("+");
  const [results, setResults] = useState(null);
  const serverUrl = "https://paulcollins.dev/api";
  const { getAccessTokenSilently,isAuthenticated } = useAuth0();

  useEffect(async () => {
    if (isAuthenticated) {
      if (!results) {
        getCalculations();
      }
    }
  });




  const getCalculations = async () => {
    const token = await getAccessTokenSilently();

    fetch(`${serverUrl}/calculator`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      })
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(err => console.log(err))
  }



  const postNewCalculation = async () => {
    try {
      const token = await getAccessTokenSilently();
      const data = { firstNumber, secondNumber, operator };

      const response = await fetch(
        `${serverUrl}/calculator`,
        {
          method: 'POST',

          headers: {
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data)
        }
      );

      const responseData = await response.json();
      console.log(responseData);
      setResults(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange1 = (event) => {
    setFirstNumber(event.target.value);
  }

  const handleChange2 = (event) => {
    setSecondNumber(event.target.value);
  }

  return (
    <div className="cols">
      <div>
        <h2>Calculator</h2>
        <div className="calculator-form">
          <input type="number" value={firstNumber} onChange={handleChange1} />
          <select>
            <option value='+'>+</option>
          </select>
          <input type="number" value={secondNumber} onChange={handleChange2} />
          <button className="button" onClick={postNewCalculation}>Submit</button>
        </div>
      </div>
      <div>
        <h4>Results</h4>
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>UserId</th>
                <th>First</th>
                <th>Operator</th>
                <th>Second</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {results &&
                results.map((result, index) => {
                  return (
                    <tr key={index}>
                      <td>{result.id.slice(0, 5)}..</td>
                      <td>{result.userId.slice(6, 10)}..</td>
                      <td>{result.firstNumber}</td>
                      <td>{result.operator}</td>
                      <td>{result.secondNumber}</td>
                      <td>{result.outcome}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default Calculator;