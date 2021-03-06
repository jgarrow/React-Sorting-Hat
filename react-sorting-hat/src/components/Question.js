/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const QuestionSlide = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    position: relative;
    display: flex;
    justify-content: flex-end;
    background: url("https://vignette.wikia.nocookie.net/pottermore/images/c/c8/B1C7M2.jpg/revision/latest?cb=20120607161745"),
        black;
    background-position: center;

    @media (max-width: 750px) {
        background: url(https://vignette.wikia.nocookie.net/pottermore/images/c/c8/B1C7M2.jpg/revision/latest?cb=20120607161745),
            black;
        background-position: center;
        background-size: 100vw;
        background-repeat: no-repeat;
    }

    @media (max-width: 500px) {
        background: black;
        justify-content: center;
    }
`;

const QuestionWrapper = styled.div`
    width: 60%;
    height: 100%;
    margin-right: 1.5rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;

    @media (max-width: 500px) {
        margin-right: 0;
    }
`;

const Qstn = styled.h1`
    color: antiquewhite;
    text-align: center;

    @media (max-width: 960px) {
        font-size: 1.5rem;
    }

    @media (max-width: 700px) {
        font-size: 1.15rem;
    }
`;

const OptionContainer = styled.div`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
`;

const Option = styled.p`
    cursor: pointer;
    margin: 10px 0;
    color: antiquewhite;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 960px) {
        font-size: 1rem;
    }
`;

const Checkbox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: ${props => (props.selected ? "#2196F3" : "#eee")};

    &:hover {
        background-color: #ccc;
        cursor: pointer;
    }

    &:after {
        content: "";
        position: absolute;
        display: ${props => (props.selected ? "block" : "none")};
        left: ${props => (props.selected ? "9px" : "0")};
        top: ${props => (props.selected ? "5px" : "0")};
        width: ${props => (props.selected ? "5px" : "auto")};
        height: ${props => (props.selected ? "10px" : "auto")};
        border: ${props => (props.selected ? "solid white" : "none")};
        border-width: ${props => (props.selected ? "0 3px 3px 0" : "none")};
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    @media (max-width: 960px) {
        width: 1rem;
        height: 1rem;

        &:after {
            left: ${props => (props.selected ? "4px" : "0")};
            top: 0;
        }
    }
`;

const NextContainer = styled.div`
    width: 100px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    visibility: ${props =>
        props.selectedAnswer !== null ? "visible" : "hidden"};
`;

const Button = styled.p`
    cursor: pointer;
    background: #faebd7;
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
        background: #948571;
        box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
    }
`;

const StyledLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
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
            selectedAnswer: null,
            selectedAnswerHouse: ""
        };
    }

    handleClick = (answer, index) => {
        if (index === this.state.selectedAnswer) {
            index = null;
        }

        this.setState({
            ...this.state,
            selectedAnswerHouse: answer.house,
            selectedAnswer: index
        });
    };

    render() {
        const questionNum = this.props.qstn.question_num;
        const question = this.props.qstn.question;
        const options = this.props.qstn.options;
        return (
            <QuestionSlide>
                <QuestionWrapper>
                    <Qstn>{question}</Qstn>
                    <div>
                        {options.map((option, index) => (
                            <OptionContainer key={index}>
                                <Checkbox
                                    selected={
                                        this.state.selectedAnswer === index
                                    }
                                    onClick={() => {
                                        this.handleClick(option, index);
                                    }}
                                />
                                <Option
                                    isChecked={this.state.isChecked}
                                    onClick={() => {
                                        this.handleClick(option, index);
                                    }}
                                >
                                    {option.answer}
                                </Option>
                            </OptionContainer>
                        ))}
                    </div>
                    <NextContainer selectedAnswer={this.state.selectedAnswer}>
                        {questionNum !== 6 ? (
                            <Button
                                css={{
                                    cursor: "pointer"
                                }}
                                onClick={() => {
                                    this.props.handleTransition(
                                        this.state.selectedAnswerHouse
                                    );
                                }}
                            >
                                Next
                            </Button>
                        ) : (
                            <StyledLink
                                to="/your-house"
                                // still need to call handleTransition so that the score will increment for the last question
                                onClick={() => {
                                    this.props.handleTransition(
                                        this.state.selectedAnswerHouse
                                    );
                                }}
                            >
                                Finish
                            </StyledLink>
                        )}
                    </NextContainer>
                </QuestionWrapper>
            </QuestionSlide>
        );
    }
}

export default Question;
