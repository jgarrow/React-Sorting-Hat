import React, { Component } from "react";
import styled from "@emotion/styled";

const OuterContainer = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    position: relative;
    display: inline-block;
`;

class House extends Component {
    constructor(props) {
        super(props);
        this.state = {
            house: ""
        };
    }

    componentDidMount() {
        let yourHouse = "";
        const houses = {
            hufflepuff: this.props.hufflepuff,
            ravenclaw: this.props.ravenclaw,
            gryffindor: this.props.gryffindor,
            slytherin: this.props.slytherin
        };

        console.log("houses: ", houses);

        yourHouse = Object.keys(houses).reduce((a, b) =>
            houses[a] > houses[b] ? a : b
        );
        console.log("Your house: ", yourHouse);

        this.setState({ ...this.state, house: yourHouse });
    }

    render() {
        return (
            <OuterContainer>
                <h1>Congratulations! You are in {this.state.house}!</h1>
            </OuterContainer>
        );
    }
}

export default House;
