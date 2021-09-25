import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`

:root{
    --background:#f0f2f5;
    --red:#e52e4d;
    --blue:#5429cc;
    --light-blue:#6933ff;
    --title-text:#363f5f;
    --body-text:#969cb3;
    --shape:#ffffff;
    --green:#33cc95;

    
}
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body,input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
}

html{
    @media (max-width:1080px){
        font-size: 93.75%; 
    }
    
    @media (max-width:720px){
        font-size:87.5%;
    }
}

body{
    background:var(---background);
   transition: all .2s ease-in;
    -webkit-font-smoothing:antialiased;
    background-color:#eee;
}
`
