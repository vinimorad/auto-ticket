import styled from 'styled-components'

export const Container = styled.form`
  font-family: 'General Sans', sans-serif;
  width: 35rem;
  background-color: #F9F9F9;
  position: absolute;
  top: 4.5rem;
  padding: 2rem;
  height: 33.6rem;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: left;

  h1 {
    color: #120e0eac;
    text-align: center;
    margin-bottom: 1rem;
  }

  span {
    color: #858585;;
    text-transform: uppercase;
    font-size: 10.5px;
    font-weight: 700;
  }

  span:first-of-type{
    position: absolute;
    right: 1.5rem;
    top: 25px;
    cursor: pointer;
    font-size: 16px;
  }

  input {
    width: 100%;
    background: #F0F0F0;
    outline: 0;
    border: 0;
    border-radius: 10px;
    height: 2rem;
    padding: 0 0.6rem;
    margin-top: 0.5rem;
    color: #3C3C3C;
    font-family: 'Poppins',sans-serif;
    margin-bottom: 1rem;
  }

  button {
    margin: 0 auto;
    text-align: center;
    display: flex;
    padding: 1rem 6rem;
    color: hsla(0, 0%, 100%, 1);
    background: #8ACB3F;
    border-radius: 10px;
    border: 0;
    font-family: 'General Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
    transition: 0.4s;
    cursor: pointer;

    :hover {
      transform: scale(0.97);
      filter: brightness(1.1);
    }
  }

  #save {
    background: #82d622;
    
  }


`