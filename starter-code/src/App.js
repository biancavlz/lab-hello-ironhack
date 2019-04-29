import React from 'react';
import './App.css';

class App extends React.Component {
  render(){
    const introSection = (
      <div className="intro-section">
        <h1 className="intro-header">Say hello to ReactJS</h1>
        <span>You will learn a Frontend library from scratch, to become a better developer</span>
        <button>Awesome!</button>
      </div>
    )

    const infoSection = (
      <div className="info-section">
        <div className="info-item">
          <img src="./images/icon1.png" alt="declarative"/>
          <h3>Declarative</h3>
          <p>React makes it  painless to create interactive UIs</p>
        </div>
        <div className="info-item">
          <img src="./images/icon2.png" alt="declarative"/>
          <h3>Declarative</h3>
          <p>React makes it  painless to create interactive UIs</p>
        </div>
        <div className="info-item">
          <img src="./images/icon3.png" alt="declarative"/>
          <h3>Declarative</h3>
          <p>React makes it  painless to create interactive UIs</p>
        </div>
        <div className="info-item">
          <img src="./images/icon4.png" alt="declarative"/>
          <h3>Declarative</h3>
          <p>React makes it  painless to create interactive UIs</p>
        </div>
      </div>
    )

    const mainElement = (
      <div>
        {introSection}
        {infoSection}
      </div>
    );
    return mainElement
  }
}

export default App;