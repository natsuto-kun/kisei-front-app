import react from "react";
import { css } from '@emotion/css'; 
import styled from 'styled-components'
import Image from 'next/image'
import bgimage from "../public/background_true.png";

const Time = styled.h1({
    position:"absolute",
    left: "203px",
    top: "100px",
    fontSize: "240px",
    fontFamily:"CoppepanJamAl",
    color: "#333333",
    zIndex:5,
})

const Name =styled.p({
    position:"absolute",
    left: "203px",
    top: "150px",
    fontSize:"64px",
    fontFamily:"Agency FB",
    color:"#333333",
    zIndex:5,
})
const Wrapper = styled.section({
    // padding: "4em",
  });

// const bgimage =styled.img`
//     position:"absolute";
//     top:0;
//     left:0;
//     zIndex:0;
// `;

const house = css`
    position:"absolute";
    top:0px;
    left:0;
    zIndex:3;
`;



const TrueEnd = () => {
    return (
        <Wrapper>
            <Time>
                10:00
            </Time>
                
            <Name>
                username
            </Name>

            <img
                src = {bgimage}
            />
            
            {/* <Image className={house}
            src="/house_true.png"
            width={400}
            height={500}
            /> */}
        </Wrapper>

    )
}

export default TrueEnd;