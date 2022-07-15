import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.main`
width: 100%;
padding: 0 30px;
margin: 0 auto;
position: relative;
`

type Props = {
    children: ReactNode
}

function Wrapper({ children }: Props) {
  return (
    <StyledWrapper>
        {children}
    </StyledWrapper>
  )
}

export default Wrapper