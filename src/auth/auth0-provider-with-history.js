import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  
  const domain = "severalpens.auth0.com";

  //const clientId = "3N9O8O3zSlg4YktFCgShKYlxDOELJxbe";
  const clientId = "3CiD2wxM0wDkZabrjZ4dfRSxUVhRCLMJ";

  //const audience = "https://tokenvortex.com";
  const audience = "https://paulcollins.dev";

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
