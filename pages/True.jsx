import react from "react";
import { css } from '@emotion/css'; 
import styled from 'styled-components'
import Image from 'next/image'
// import './pages/true.css'

const Time = styled.h1({
    fontSize: "240px",
    textAlign: "center",
    color: "palevioletred",
})
  
const Wrapper = styled.section({
    // padding: "4em",
  });


const TrueEnd = () => {
    return (
        <div>
            <Wrapper>
            <Time>
                10:00
            </Time>
        </Wrapper>
        </div>
    )
}

export default TrueEnd;