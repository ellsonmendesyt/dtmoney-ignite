import styled from "styled-components";

export const Container = styled.div`
 display:grid;
 grid-template-columns: repeat(3,1fr);
 grid-gap: 2rem;
 margin-top: -10rem;
`

export const SummaryItem = styled.div`
 background-color: var(--shape);
 padding: 1.5rem 2rem; 
 border-radius: 0.25rem;
 color: var(--title-text);

 &.hilite-bg{
     background: var(--green);
     color:#fff;
 }
`

export const Header = styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
`

export const Title = styled.p`
  
`

export const Image = styled.img`

`

export const Total = styled.strong`
  display: block;
   margin-top: 1rem;
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 500;
`