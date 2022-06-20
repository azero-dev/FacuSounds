import styled from 'styled-components'
import { Link } from 'gatsby'

export const HeadArea = styled.header`
position: relative;
background-color: #cc0000;
height: 10vh;
z-index: 10;
`

export const HeadDiv = styled.div`
margin: 0 0 0 10vw;
padding: 3vh 0;
`
export const HeadLink = styled(Link)`
color: white;
text-decoration: none;
`
