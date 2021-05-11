import React, { Fragment } from "react";

import { Hero, HomeContent,Calculator } from "../components";

const Home = () => (
  <Fragment>
    <h1>Paul Collins</h1>
    <h4>Software Programmer</h4>
      <div>
      <ul>
      <li>For more info visit <a href="https://severalpens.com" target="blank">severalpens.com</a></li>
      <li>Auth0 set up mainly following this <a href="https://auth0.com/blog/complete-guide-to-react-user-authentication/"  target="blank">tutorial</a></li>
        <li>EC2 set up mainly  following this <a href="https://www.youtube.com/watch?v=NjYsXuSBZ5U&t=447s"  target="blank">tutorial</a></li>
        <li>An Auto Scaling Group was setup using <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-from-instance.html"  target="blank">tutorial</a></li>
        <li>Repo is available at <a href="https://github.com/severalpens/tkv3"  target="blank">https://github.com/severalpens/tkv3</a></li>
      </ul>
    </div>
  </Fragment>
);

export default Home;
