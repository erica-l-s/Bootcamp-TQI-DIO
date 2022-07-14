import styled from "styled-components";




export const Wrapper = styled.div`
display:flex;
width:100%;
justify-content:space-between;
padding:8px;
align-items:center;

input{
    border:1px solid #ccc;
    border-radius:8px;
    width:100%;
    height:32px;
   
}

button{
    background-color:#ccc;
    padding:8px;
    margin:8px;
    font-size:16px;
    border-radius:8px;

    &:hover{
       box-shadow:5px 3px 8px rgba(131,111,255,0.5);
    }
}


`