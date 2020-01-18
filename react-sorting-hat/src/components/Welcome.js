/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import SortingHat from "../img/sorting-hat.png";

const Heading = styled.h1`
    font-family: "Harry Potter";
    font-size: 3rem;
    margin-top: 5rem;
    margin-bottom: 0;
`;

const Button = styled(Link)`
    display: inline-block;
    cursor: pointer;
    box-sizing: border-box;
    padding: 10px 15px;
    text-align: center;
    background: #faebd7;
    border-radius: 5px;
    text-decoration: none;
    color: black;
`;

const Welcome = () => {
    return (
        <>
            <Heading>Welcome to Hogwarts</Heading>
            <Link
                to="/sorting-ceremony"
                css={{
                    cursor: "pointer",
                    textDecoration: "none",
                    background: "transparent"
                }}
            >
                <img
                    src={SortingHat}
                    alt="Sorting Hat"
                    css={{
                        width: "200px",
                        height: "auto"
                    }}
                />
            </Link>
            <Button to="/sorting-ceremony">Begin Sorting Ceremony</Button>
        </>
    );
};

export default Welcome;
