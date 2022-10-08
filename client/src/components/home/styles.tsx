import styled from 'styled-components'

export const Header = styled.header `
  width: 100%;
  background-color: #FFFFFF;
  height: 5.5rem;

`

export const Box = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1080px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  h1 {
    color: #8ACB3F;
    font-family: 'General Sans', sans-serif;
  }

`

export const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  height: 31.5rem;

`

export const Base = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .moneybox {
    width: 11.9rem;
    height: 2.99rem;
    padding: 1rem;
    border-radius: 7px;
    background-color: #FFFFFF;
    position: relative;

    .box {
      position: absolute;
      top: 0.6rem;
      left: 7rem;
      font-size: 14px;
    }
    
    span {
      font-family: 'General Sans', sans-serif;
      font-weight: 500;
      color: #120e0ed3;
      position: relative;
      top: -0.1rem;
      left: -5rem;
    }

    p {
      width: 9.7rem;
      position: relative;
      right: 5rem;
      color: #8ACB3F;
      font-family: 'General Sans', sans-serif;
      margin-top: -0.2rem;
      font-weight: 600;
    }

    .circle {
      width: 3rem;
      height: 3rem;
      border-radius: 5rem;
      background-color: #E6E6E6;
      position: relative;
      left: -2.5rem;
      top: -1rem;

      img {
        width: 2rem;
        margin: 0.5rem;

      }
    }
  }

  button {
    width: 11.9rem;
    font-family: 'General Sans', sans-serif;
    padding: 1rem;
    border: 0;
    border-radius: 7px;
    color: #FFFFFF;
    background-color: #8ACB3F;
    outline: 0;
    transition: 0.4s;
    cursor: pointer;
    
    &:hover {
      filter: brightness(1.1);
      transform: scale(0.97);
    }
  }

`

export const TableBox = styled.div`
  width: 100%;
  height: 26.5rem;
  background-color: #FFFFFF;
  padding: 5rem;
  border-radius: 7px;

  input {
    width: 35%;
    height: 1.5rem;
    margin-bottom: 0.5rem;
    outline: 0;
    padding: 0.8rem 0.6rem;
    font-family: 'Poppins',sans-serif;
    border: 1px solid black;
    border-radius: 5px;
    
  }

  .containertable {
    width: 100%;
    height: 20rem;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    overflow-y: scroll;
    color: #858585;

    table {
      border-spacing: 0 0.5rem;
      width: 100%;

      td {
        text-align: center;
        color: #3C3C3C;
        margin-top: 1.5rem;
        position: relative;
        top: 1.5rem;
      }

      #price {
        color: #8ACB3F;
      }

      .couplebottom {
        position: relative;
        right: 5rem;
        top: 13px;        
      }

      button {
        margin: 1.5rem 0 0 0.7rem;
        cursor: pointer;  
        border: 0;
        outline: 0;
        background-color: white;

        img {
          width: 1.2rem;

        }

      }

      
    }
  }

  .containertable {
    ::-webkit-scrollbar {
      width: 6px;
      background: #F4F4F4;
    }

    ::-webkit-scrollbar-thumb   {
      border-radius: 1rem;
      background-color: #E6E6E6;
    }

  }


`


