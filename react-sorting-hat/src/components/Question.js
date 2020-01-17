/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

    &:hover {
        text-decoration: underline;
    }
`;

// const Input = styled.div`
//     position: absolute;
//     opacity: 0;
//     cursor: pointer;
//     height: 0;
//     width: 0;
// `;

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
        display: ${props => {
            console.log(props);
            return props.selected ? "block" : "none";
        }};
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
            // isNextDisplayed: false,
            // isChecked: false,
            selectedAnswer: null,
            selectedAnswerHouse: ""
        };
    }

    // setSelectedAnswerHouse = answer => {
    //     this.setState({ ...this.state, selectedAnswerHouse: answer.house });
    // };

    // handleCheckClick = index => {
    //     this.setState({
    //         ...this.state,
    //         selectedAnswer: index
    //     });
    //     this.setState({
    //         ...this.state,
    //         isChecked: !this.state.isChecked
    //     });
    // };

    handleClick = (answer, index) => {
        if (index === this.state.selectedAnswer) {
            index = null;
        }

        this.setState({
            ...this.state,
            // isNextDisplayed: !this.state.isNextDisplayed,
            selectedAnswerHouse: answer.house,
            selectedAnswer: index
            // isChecked: !this.state.isChecked
        });
    };

    render() {
        const questionNum = this.props.qstn.question_num;
        const question = this.props.qstn.question;
        const options = this.props.qstn.options;
        return (
            <QuestionSlide>
                <QuestionWrapper>
                    <h1>{question}</h1>
                    <div
                    // css={{ listStyle: "none", paddingLeft: "0" }}
                    >
                        {options.map((option, index) => (
                            <OptionContainer key={index}>
                                {/* <label
                                
                                className="container"
                                htmlFor="option"
                                // onClick={() => {
                                //     this.handleClick();
                                //     this.handleCheckClick();
                                //     this.setSelectedAnswerHouse(option);
                                // }}
                            > */}

                                <Checkbox
                                    // id="option"
                                    // name={`option_${index}`}
                                    // type="checkbox"
                                    // isChecked={this.state.isChecked}
                                    selected={
                                        this.state.selectedAnswer === index
                                    }
                                    onClick={() => {
                                        // this.props.incrementHouseScore(
                                        //     option.house
                                        // );
                                        // this.handleCheckClick(index);
                                        // this.setSelectedAnswerHouse(option);
                                        this.handleClick(option, index);
                                    }}
                                />
                                <Option
                                    isChecked={this.state.isChecked}
                                    onClick={() => {
                                        // this.props.incrementHouseScore(
                                        //     option.house
                                        // );
                                        // this.handleCheckClick(index);
                                        // this.setSelectedAnswerHouse(option);
                                        this.handleClick(option, index);
                                    }}
                                >
                                    {option.answer}
                                </Option>
                                {/* <span
                                    className="checkmark"
                                    // isChecked={this.state.isChecked}
                                /> */}
                                {/* </label> */}
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
                                    // this.props.incrementHouseScore(
                                    //     this.state.selectedAnswerHouse
                                    // );
                                }}
                            >
                                Next
                            </Button>
                        ) : (
                            <Link
                                css={{
                                    cursor: "pointer",
                                    textDecoration: "none",
                                    color: "black"
                                }}
                                to="/your-house"
                                // onClick={() => {
                                //     this.props.handleTransition(
                                //         this.state.selectedAnswerHouse
                                //     );
                                // this.props.incrementHouseScore(
                                //     this.state.selectedAnswerHouse
                                // );
                                // }}
                            >
                                Finish
                            </Link>
                        )}
                        {questionNum !== 6 && (
                            <MdArrowForward
                                css={{
                                    cursor: "pointer",
                                    fontSize: "1.5rem"
                                }}
                                onClick={() => {
                                    this.props.handleTransition();
                                    this.props.incrementHouseScore(
                                        this.state.selectedAnswerHouse
                                    );
                                }}
                            />
                        )}
                    </NextContainer>
                </QuestionWrapper>
            </QuestionSlide>
        );
    }
}

export default Question;
