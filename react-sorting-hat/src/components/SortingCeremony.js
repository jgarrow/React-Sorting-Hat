import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import Question from "./Question";

const OuterContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: white;
`;

const SlidesContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    transform: ${props => css`translateX(${props.translateValue}%)`};
    transition: transform ease-out 0.45s;
    display: grid;
    grid-template-columns: repeat(6, 100vw);
`;

// Hufflepuff answers --
//      Q1: Opt1
//      Q2: Opt1
//      Q3: Opt2
//      Q4: Opt1
//      Q5: Opt1
//      Q6: Opt3

// Slytherin answers --
//      Q1: Opt2
//      Q2: Opt4
//      Q3: Opt3
//      Q4: Opt3
//      Q5: Opt2
//      Q6: Opt1

// Ravenclaw answers --
//      Q1: Opt4
//      Q2: Opt3
//      Q3: Opt1
//      Q4: Opt4
//      Q5: Opt3
//      Q6: Opt2

// Gryffindor answers --
//      Q1: Opt3
//      Q2: Opt2
//      Q3: Opt4
//      Q4: Opt2
//      Q5: Opt4
//      Q6: Opt4

const questions = [
    {
        question_num: 1,
        question: "Which word best describes you?",
        options: [
            {
                house: "hufflepuff",
                answer: "Observant"
            },
            {
                house: "slytherin",
                answer: "Passionate"
            },
            {
                house: "gryffindor",
                answer: "Assertive"
            },
            {
                house: "ravenclaw",
                answer: "Profound"
            }
        ]
    },
    {
        question_num: 2,
        question:
            "You know your best friend cheated on a test to be the only student who scored higher than you. The professor is suspicious and asks you if they cheated. What do you do?",
        options: [
            {
                house: "hufflepuff",
                answer:
                    "Lie and say you don't know (but hope that somebody else tells the truth)."
            },
            {
                house: "gryffindor",
                answer:
                    "Say that the professor should ask your best friend (and resolve to tell your friend that if they don't tell the truth, you will)."
            },
            {
                house: "ravenclaw",
                answer:
                    "Tell the truth. If your friend is prepared to win by cheating, they deserve to be found out. And since you're both in the same house, the points they'll use will be won back by you since you'll then have the highest score."
            },
            {
                house: "slytherin",
                answer:
                    "You wouldn't wait for the professor to ask you. If you knew someone cheated, you would tell the professor as soon as possible."
            }
        ]
    },
    {
        question_num: 3,
        question:
            "You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before allowing you to pass. Do you:",
        options: [
            {
                house: "ravenclaw",
                answer:
                    "Attempt to confuse the troll into letting all 3 of you pass without fighting?"
            },
            {
                house: "hufflepuff",
                answer:
                    "Suggest drawing lots to decide which of you will fight?"
            },
            {
                house: "slytherin",
                answer:
                    "Suggest that all three of you should fight, without telling the troll?"
            },
            {
                house: "gryffindor",
                answer: "Volunteer to fight?"
            }
        ]
    },
    {
        question_num: 4,
        question:
            "After you died, what would you most like people to do when they hear your name?",
        options: [
            {
                house: "hufflepuff",
                answer: "Miss you, but smile"
            },
            {
                house: "gryffindor",
                answer: "Ask for more stories about your adventures"
            },
            {
                house: "slytherin",
                answer: "Think with admiration of your achievements"
            },
            {
                house: "ravenclaw",
                answer:
                    "I don't care what people think of me after I'm dead; it's what they think of me while I'm alive that counts."
            }
        ]
    },
    {
        question_num: 5,
        question:
            "Four boxes are placed before you. Which would you try to open?",
        options: [
            {
                house: "hufflepuff",
                answer:
                    "The small tortoiseshell box, embellished with gold, inside which some small creature seems to be squeaking."
            },
            {
                house: "slytherin",
                answer:
                    "The gleaming jet black box with a silver lock and key, marked with a mysterious rune that you know to be the mark of Merlin."
            },
            {
                house: "ravenclaw",
                answer:
                    "The ornate golden casket, standing on clawed feet, whose inscription warns that both secret knowledge and unbearable temptation lie within."
            },
            {
                house: "gryffindor",
                answer:
                    "The small pewter box, unassuming and plain, with a scratched message upon it that reads, 'I open only for the worthy'."
            }
        ]
    },
    {
        question_num: 6,
        question:
            "Which of the following do you find most difficult to deal with?",
        options: [
            {
                house: "slytherin",
                answer: "Hunger"
            },
            {
                house: "ravenclaw",
                answer: "Cold"
            },
            {
                house: "hufflepuff",
                answer: "Loneliness"
            },
            {
                house: "gryffindor",
                answer: "Boredom"
            }
        ]
    }
];

const SortingCeremony = props => {
    return (
        <OuterContainer>
            <SlidesContainer translateValue={props.componentPosition}>
                {questions.map(question => (
                    <Question
                        key={question.question_num}
                        qstn={question}
                        handleTransition={props.handleTransition}
                        hufflepuff={props.hufflepuff}
                        ravenclaw={props.ravenclaw}
                        gryffindor={props.gryffindor}
                        slytherin={props.slytherin}
                    />
                ))}
            </SlidesContainer>
        </OuterContainer>
    );
};

export default SortingCeremony;
