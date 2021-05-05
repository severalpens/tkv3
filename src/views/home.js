import React, { Fragment } from "react";

import { Hero, HomeContent,Calculator } from "../components";

const Home = () => (
  <Fragment>
    <h1>[M]ERN on EC2</h1>
    <br/>
    <h6>
      This is a React application with an Express API both being served from an AWS EC2 instance.
      </h6>
      <div>
      <ul>
        <li>Auth0 set up mainly following this <a href="https://auth0.com/blog/complete-guide-to-react-user-authentication/">tutorial</a></li>
        <li>EC2 set up mainly  following <a href="https://www.youtube.com/watch?v=NjYsXuSBZ5U&t=447s">this tutorial</a></li>
        <li>Repo is available at <a href="https://github.com/severalpens/tkv3">https://github.com/severalpens/tkv3</a></li>
      </ul>
    </div>
  </Fragment>
);

export default Home;
