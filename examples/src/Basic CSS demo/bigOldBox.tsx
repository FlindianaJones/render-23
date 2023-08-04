import styled from 'styled-components'

export const bigOldBox = styled.textarea`
resize: ${props => props.onResize ? 'both' : 'none'};
width: 100%;
`
