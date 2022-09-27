import styled from "styled-components"

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 30a0px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  transition: all 0.2s ease-in-out;
`

export const CartDropdownItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;

  button {
    margin-top: auto;
  }
`

export const CartDropdownEmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`
