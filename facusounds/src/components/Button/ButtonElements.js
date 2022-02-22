import styled from 'styled-components'

export const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 1.1em;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #cc0000;
  border: none;
  border-radius: 50%;
  box-shadow: 2px 6px #3d0000;
  user-select: none;
  transition: background-color .2s;

  &:hover {
    background-color: #a30000;
  }

  &:active {
    background-color: #510000;
    box-shadow: 1px 3px #3d0000;
    transform: translateY(4px);
    transition: background-color 0s;
  }
`