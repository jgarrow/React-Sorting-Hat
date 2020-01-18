import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Heading = styled.h1`
    font-family: "Harry Potter";
    font-size: 3rem;
    margin-top: 5rem;
`;

const Button = styled(Link)`
    display: inline-block;
    cursor: pointer;
    box-sizing: border-box;
    padding: 5px 10px;
    text-align: center;
    background: lightgray;
    border-radius: 5px;
    text-decoration: none;
    color: black;
`;

const Welcome = () => {
    return (
        <>
            <Heading>Welcome to Hogwarts</Heading>
            <Button to="/sorting-ceremony">Begin Sorting Ceremony</Button>
        </>
    );
};

export default Welcome;
