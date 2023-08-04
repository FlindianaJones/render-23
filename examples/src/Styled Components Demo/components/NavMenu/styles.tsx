import styled from "styled-components"

interface containerProps {
  direction?: string
}

export const Container = styled.div`
    display: flex;
    flex-direction: ${(props: containerProps) => props.direction === 'vertical' ? 'column': 'row' };
    justify-content: ${(props: containerProps) => props.direction === 'vertical' ? 'flex-start': 'flex-end'};
    background-color: bisque;
`