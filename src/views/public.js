import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Public = () => {
  const [message, setMessage] = useState("");
  const serverUrl = "https://paulcollins.dev/api";

  const callApi = async () => {
    try {
      const response = await fetch(`${serverUrl}/messages/public-message`);

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  
  return (
    <div className="container">
      <h1>Public API Call</h1>
      <p>/api/messages/public</p>
      <div
        className="btn-group mt-5"
        role="group"
        aria-label="External API Requests Examples"
      >
        <button type="button" className="btn btn-primary" onClick={callApi}>
          Get Public Message
        </button>
      </div>
      {message && (
        <div className="mt-5">
          <h6 className="muted">Result</h6>
          <div className="container-fluid">
            <div className="row">
              <code className="col-12 text-light bg-dark p-4">{message}</code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Public;
