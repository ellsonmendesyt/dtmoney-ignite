import styled from "styled-components";



export const Container = styled.header`
 background:var(--blue);
`

export const Wrapper = styled.div`
  max-width:1120px;
  margin: 0px auto;
  width:100%;


  padding:  2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`


export const Button = styled.button`
 font-size: 1rem;
 color:#fff;
 background-color: var(--light-blue);
 border:0;
 padding: 0 2rem;
 border-radius: 0.25rem;
 height: 3rem;
 transition: filter .3s ease-in;

 &:hover{
     filter:brightness(0.6);
     transition: filter .3s ease-out;
 }
`

export const Image =styled.img`

`