import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
    position: relative;
    margin: 2rem auto;
    width: 200px;
    height: 50px;
    z-index: 5;
`;

const BannerBody = styled.div`
    position: ${props => (props.isBottom ? "absolute" : "relative")};
    top: ${props => (props.isBottom ? "85%" : "0")};
    margin: 0 auto 2rem;
    margin-bottom: ${props => (props.isBottom ? "0" : "inherit")};
    background: ${props => (props.isBottom ? "#5b5b5b" : "antiquewhite")};
    width: 200px;
    height: 50px;
    border-top-left-radius: 20%;
    border-top-right-radius: 20%;
    box-shadow: ${props => (props.isBottom ? "none" : "0px 0px 5px 1px white")};
`;

const Title = styled.h1`
    text-align: center;
    margin: 0;
    position: relative;
    top: 5%;
`;

const Arrow = styled.div`
    position: absolute;
    top: 13px;
    width: 40px;
    height: 30px;
    background: antiquewhite;
    z-index: 4;
    left: ${props => (props.isLeft ? "-25px" : null)};
    right: ${props => (props.isLeft ? null : "-25px")};
    transform: ${props =>
        props.isLeft ? "skew(10deg, -10deg)" : "skew(-10deg, 10deg)"};

    &:before {
        content: "";
        position: absolute;
        border-color: transparent #5b5b5b;
        border-style: solid;
        height: 0px;
        width: 0px;
        left: ${props => (props.isLeft ? "-2px" : null)};
        right: ${props => (props.isLeft ? null : "-2px")};
        border-width: ${props =>
            props.isLeft ? "15px 0px 15px 15px" : "15px 15px 15px 0px"};
    }
`;

const Banner = ({ house }) => {
    return (
        <Container>
            <BannerBody>
                <Title>{house}</Title>
            </BannerBody>
            <BannerBody isBottom={true} />
            <Arrow isLeft={true} />
            <Arrow />
        </Container>
    );
};

export default Banner;
