import React from 'react';
import { Link } from "react-router-dom";
import { CSSTransitionGroup } from 'react-transition-group';
import './Home.css';


export default function Home() {
  return (
    <div className="homeOuterContainer">
    
      <div className="homeInnerContainer">
        
        <CSSTransitionGroup
         transitionName="fade"
         transitionAppear={true}
         transitionAppearTimeout={900}
         transitionEnter={false}
         transitionLeave={false}
        >
          <h1>Realtime Chat Application</h1>
        
      <h2><span role="img" className="tick" aria-label="emoji">✔</span> No need of account </h2>
      <h2><span role="img" className="tick" aria-label="emoji">✔</span> Away from social media </h2>
      <h2><span role="img" className="tick" aria-label="emoji">✔</span> Simply create room and join </h2>
     <Link to={"/join"}>
          <button className={'button chat mt-20'} type="submit">Try it out</button>
    </Link>
    </CSSTransitionGroup>
    </div>
    
  </div>
  );
}
