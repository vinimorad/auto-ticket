import {createGlobalStyle}  from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    background-color: #F9F9F9;
  }

  .react-modal-overlay {
    /* width: 100%;
    max-width: 1250px;
    position: absolute;
    inset: 0;
    background-color: red;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center; */
    position: absolute;
    top: 0;
    /* background-color: red; */
    margin: 0 auto;
    text-align: center;
    width: 100%;
    height: 100vh;
  }
  
  .react-modal-content {
    width: 100%;
    margin: 0 auto;
    position: relative;
    max-width: 1250px;
    display: flex;
    justify-content: center;
    /* padding: 3rem; */
    /* background-color: black; */
  }

  .react-modal-close {
    width: 1rem;
    position: absolute;
    right: 0;
    font-weight: bold;
    top: 0;
    border: 0;
    color: black;
    &:hover {
      filter: brightness(0.9)
    }
  }

  




`