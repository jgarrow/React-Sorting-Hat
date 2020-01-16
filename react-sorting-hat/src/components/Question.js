/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { Component } from "react";
import styled from "@emotion/styled";

import { MdArrowForward } from "react-icons/md";

const QuestionSlide = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    position: relative;
    display: inline-block;
`;

// width: 100vw;
// height: 100vh;
// display: inline-block;
// overflow: auto;
// overflow-x: hidden;
// position: relative;

const QuestionWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

const NextContainer = styled.div`
    width: 100px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    visibility: ${props =>
        props.isNextDisplayed === true ? "visible" : "hidden"};
`;

const Button = styled.p`
    cursor: pointer;
    background: #81a4db;
    padding: 5px 10px;
    color: black;
    font-size: 1rem;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    width: 50%;
    max-width: 70%;
    text-align: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: white;
        background: #356abc;
        box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
    }
`;

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNextDisplayed: false
        };
    }

    handleClick = () => {
        this.setState({
            ...this.state,
            isNextDisplayed: !this.state.isNextDisplayed
        });
    };

    render() {
        // ({ qstn, incrementHouseScore, handleTransition }) => {
        const questionNum = this.props.qstn.question_num;
        const question = this.props.qstn.question;
        const options = this.props.qstn.options;
        return (
            <QuestionSlide>
                <QuestionWrapper>
                    <h1>{question}</h1>
                    <ul>
                        {options.map((option, index) => (
                            <li
                                key={index}
                                css={{ cursor: "pointer" }}
                                onClick={() => {
                                    this.props.incrementHouseScore(
                                        option.house
                                    );
                                    this.handleClick();
                                }}
                            >
                                {option.answer}
                            </li>
                        ))}
                    </ul>
                    <NextContainer isNextDisplayed={this.state.isNextDisplayed}>
                        {questionNum !== 6 ? (
                            <Button
                                css={{
                                    cursor: "pointer"
                                }}
                                // isNextDisplayed={this.state.isNextDisplayed}
                                onClick={() => this.props.handleTransition()}
                            >
                                Next
                            </Button>
                        ) : (
                            <Button
                                css={{
                                    cursor: "pointer"
                                }}
                                onClick={() => this.props.handleTransition()}
                            >
                                Finish
                            </Button>
                        )}
                        <MdArrowForward
                            css={{
                                cursor: "pointer",
                                fontSize: "1.5rem"
                            }}
                            // isNextDisplayed={this.state.isNextDisplayed}
                            onClick={() => this.props.handleTransition()}
                        />
                    </NextContainer>
                </QuestionWrapper>
            </QuestionSlide>
        );
    }
}

export default Question;
