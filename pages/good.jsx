import react from "react";
import styled from 'styled-components'
import Image from 'next/image'
import { css } from '@emotion/css'; 

const Time = styled.h1({
    position:"absolute",
    left: "203px",
    top: "100px",
    fontSize: "240px",
    fontFamily:"FlamingoSerif",
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

const bgimage =css`
    position:"absolute";
    top:0;
    left:0;
    zIndex:0;
`;

const GoodEnd = () => {
    return (
        <div>
            <Time>
                20:00
            </Time>

            <Name>
                username
            </Name>

            <Image className={bgimage}
            src="/background_good.png"
            width={1366}
            height={768}
            alt="bgimage"
            />
        </div>
    )
}

export default GoodEnd;