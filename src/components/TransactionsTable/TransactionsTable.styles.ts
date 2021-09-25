import styled from "styled-components";

export const Container = styled.div`
margin-top: 4rem;
`

// no original ta width: 100%
export const Table = styled.table`
 width:calc(100% - 1.2rem); 
 border-spacing: 0 .5rem;
`

export const THead = styled.thead`

`

export const Tr = styled.tr`

`
export const Th = styled.th`
 color: var(--body-text);
 font-weight: 400;
 padding:  1rem 2rem;
 text-align: left;
 line-height: 1.5rem;

 @media screen and(max-width:600px){
     padding: 0.2rem .5rem;
 }
`

export const Td = styled.td`
 padding: 1rem 2rem;
 border:0;
 background-color: var(--shape);
 color:var(--body-text);
 border-radius: 0.25rem;

&:first-child{
    color:var(--title-text);
}

&.deposit{
    color:var(--green);
}

&.withdraw{
    color:var(--red);
}

@media screen and (max-width:400px){
    padding: .2rem .5rem;
} 
`

export const TBody = styled.tbody``