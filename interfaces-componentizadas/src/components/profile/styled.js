import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
align-items:flex-start;

`
export const WrapperImage = styled.img`
border-radius:50%;
width:120px;
margin:10px;

`

export const WrapperInfoUser = styled.div`
display:flex;
align-items:flex-start;
flex-direction:column;
justify-content:space-between;
margin:8px;
height:200px;

h1{
    font-size:24px;
    font-weight:bold;
}

h3{
    font-size:18px;
    font-weight:bold;
}

h4{
    font-size:16px;
    font-weight:bold;
}

`
export const WrapperStatusCount = styled.div`
display:flex;
align-items:center;

div{
    margin:8px;
    text-align:center;
}

`
export const WrapperUsername = styled.div`
display:flex;
align-items:center;
margin-top:8px;

h3{
    margin-right:5px;
}

a{
    color:#4F4F4F;
    font-style:italic;
}

`

