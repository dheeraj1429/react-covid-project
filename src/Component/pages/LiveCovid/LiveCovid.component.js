import React from "react";
import CovidComponent from "../Covid.component/Covid.component";
import "./LiveCovid.style.css";

class LiveCovid extends React.Component {
  constructor() {
    super();

    this.state = {
      collection: [],
    };
  }

  componentDidMount() {
    fetch(`https://data.covid19india.org/data.json`)
      .then((res) => res.json())
      .then((data) => this.setState({ collection: data.statewise }));
  }

  render() {
    return (
      <div className="container">
        {this.state.collection.map(({ active, deaths, lastupdatedtime, state }) => (
          <CovidComponent name={active} tested={deaths} date={lastupdatedtime} state={state} />
        ))}
      </div>
    );
  }
}

export default LiveCovid;
