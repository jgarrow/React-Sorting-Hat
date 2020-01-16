/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
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
    width: 75px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.p`
    visibility: ${props => (props.displayed === true ? "visible" : "hidden")};
    cursor: pointer;
    background: #81a4db;
    padding: 5px 10px;
    color: black;
    font-size: 1rem;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    width: 60px;
    text-align: center;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: white;
        background: #356abc;
        box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
    }
`;

const Question = ({ qstn, incrementHouseScore, handleTransition }) => {
    const questionNum = qstn.question_num;
    const question = qstn.question;
    const options = qstn.options;

    return (
        <QuestionSlide>
            <QuestionWrapper>
                <h1>{question}</h1>
                <ul>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => incrementHouseScore(option.house)}
                        >
                            {option.answer}
                        </li>
                    ))}
                </ul>
                <NextContainer>
                    {questionNum !== 6 ? (
                        <Button
                            css={{
                                cursor: "pointer"
                            }}
                            onClick={() => handleTransition()}
                        >
                            Next
                        </Button>
                    ) : (
                        <Button
                            css={{
                                cursor: "pointer"
                            }}
                            onClick={() => handleTransition()}
                        >
                            Finish
                        </Button>
                    )}
                    <MdArrowForward
                        css={{
                            cursor: "pointer"
                        }}
                        onClick={() => handleTransition()}
                    />
                </NextContainer>
            </QuestionWrapper>
        </QuestionSlide>
    );
};

export default Question;
