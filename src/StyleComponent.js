import styled from 'styled-components'

export const Heading = styled.h1`
  color: red;
`

export const Paragraph = styled.h1`
  color: blue;
`

export const CustomeButton = styled.button`
  background-color: ${props => (props.outline ? 'green' : 'white')};
  padding: 10px;
  color: ${props => (props.outline ? 'white' : 'green')};
  border-style: disc;
  border-radius: 5px;
  margin-left: 10px;
`
