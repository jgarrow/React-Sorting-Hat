import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import styled from "@emotion/styled";
import "./App.css";

import SortingCeremony from "./components/SortingCeremony";

const Button = styled(Link)`
    display: inline-block;
    cursor: pointer;
    box-sizing: border-box;
    padding: 5px 10px;
    text-align: center;
    background: lightgray;
    border-radius: 5px;
`;

class App extends Component {
    constructor() {
        super();
        this.state = {
            // for slide transition between questions
            componentPosition: 0,
            // "points" for determining which house you're in
            hufflepuff: 0,
            ravenclaw: 0,
            gryffindor: 0,
            slytherin: 0
        };
    }

    // "page" transitions
    handleTransition = () => {
        const newPosition = this.state.componentPosition - 100;

        this.setState({
            ...this.state,
            componentPosition: newPosition
        });
    };

    incrementHouseScore = house => {
        console.log("score state before updating: ", house, this.state[house]);

        const currentScore = this.state[house];
        const newScore = currentScore + 1;

        console.log("score state after updating: ", house, newScore);

        this.setState({ ...this.state, [house]: newScore });
    };

    render() {
        return (
            <div className="App">
                <h1>Welcome to Hogwarts</h1>
                <Button to="/sorting-ceremony">Begin Sorting Ceremony</Button>

                <Route
                    exact
                    path="/sorting-ceremony"
                    render={props => (
                        <SortingCeremony
                            componentPosition={this.state.componentPosition}
                            hufflepuff={this.state.hufflepuff}
                            ravenclaw={this.state.ravenclaw}
                            gryffindor={this.state.gryffindor}
                            slytherin={this.state.slytherin}
                            incrementHouseScore={this.incrementHouseScore}
                            handleTransition={this.handleTransition}
                            {...props}
                        />
                    )}
                />
            </div>
        );
    }
}

export default App;
