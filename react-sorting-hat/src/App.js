import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "@emotion/styled";
import "./fonts/HarryPotter.ttf";
import "./fonts/lumos-font/Lumos.ttf";
import "./App.css";

import Welcome from "./components/Welcome";
import SortingCeremony from "./components/SortingCeremony";
import House from "./components/House";

const AppContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url(https://cdn.hipwallpaper.com/m/12/2/3k5wZX.jpg);
    background-repeat: no-repeat;
    background-size: cover;
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

    // "page" transitions -- also increments score
    handleTransition = house => {
        const newPosition = this.state.componentPosition - 100;

        const currentScore = this.state[house];
        const newScore = currentScore + 1;

        this.setState({
            ...this.state,
            componentPosition: newPosition,
            [house]: newScore
        });
    };

    render() {
        return (
            // Some questions pulled from the Pottermore Sorting Hat quiz
            <AppContainer>
                <Route exact path="/" component={Welcome} />
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
                            // incrementHouseScore={this.incrementHouseScore}
                            handleTransition={this.handleTransition}
                            {...props}
                        />
                    )}
                />
                <Route
                    exact
                    path="/your-house"
                    render={props => (
                        <House
                            // componentPosition={this.state.componentPosition}
                            hufflepuff={this.state.hufflepuff}
                            ravenclaw={this.state.ravenclaw}
                            gryffindor={this.state.gryffindor}
                            slytherin={this.state.slytherin}
                            {...props}
                        />
                    )}
                />
            </AppContainer>
        );
    }
}

export default App;
