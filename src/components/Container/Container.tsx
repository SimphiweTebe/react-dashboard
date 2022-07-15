import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.main`
width: 95%;
max-width: 1200px;
margin: auto;
position: relative;
display: flex;
align-items: flex-start;
`

type Props = {
    children: ReactNode
}

function Container({ children }: Props) {
  return (
    <StyledContainer>
        {children}
    </StyledContainer>
  )
}

export default Container