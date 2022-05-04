import React from "react";
import styled  from "styled-components";
import { Fade } from "react-awesome-reveal";

function Section({title,discription,backgroundImg,leftBtnText,rightBtnText}){
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade direction={"up"} delay={100}>
            <ItemText>
                <h1>{title}</h1>
                <p>{discription}</p>
            </ItemText>
            </Fade>
          
            <Buttons>
            <Fade direction={"up"} delay={100}>
                <ButtonGroup>
                    <LeftButton>
                       {leftBtnText}
                    </LeftButton>
                    {
                        rightBtnText &&   // if rightbt exist then only show RightButton
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
        </Wrap>

    )
}

export  default Section

const Wrap = styled.div`
       width: 100vw;
       height: 100vh;
       background-size: cover;
       background-position: center;
       background-repeat: not-repeat;
       background-image: url('/images/model-s.jpg');
       display:flex;
       flex-direction:column;
       justify-content: space-between; // vertical bcoz column
       align-items:center; 
       background-image: ${props =>  `url("/images/${props.bgImage}")`}
       
`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`

const ButtonGroup = styled.div`
display: flex;
margin-bottom:30px;
@media (max-width: 768px){
    flex-direction: column;
}
`
const LeftButton  = styled.div`
            background-color: rgba(23,26,32,0.8);
            height:40px;
            width:256px;
            color:white;
            display: flex;
            font-weight: bold;
            justify-content: center;   // for centering horizontal
            align-items: center;
            opacity: 0.85;
            border-radius: 100px;
            text-transform: uppercase;
            font-size: 12px;
            cursor:pointer;
            margin:8px;
`
const RightButton = styled(LeftButton)`
            background-color:white;
            opacity:0.65;
            color:black;
`

const DownArrow = styled.img`
     
        height:40px;
        overflow-x: hidden;
        animation: animatedown infinite 1.5s;
`
const Buttons = styled.div``