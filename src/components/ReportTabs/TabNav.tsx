import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  gap: 30px;
  border: 1px solid #888;
  padding: 10px 20px;
  border-radius: 2px;
  margin: 40px 0;
`;

function TabNav() {
    
  return (
    <StyledNav>
        <Link to="/reports/report1">Report 1</Link>
        <Link to="/reports/report2">Report 2</Link>
        <Link to="/reports/report3">Report 3</Link>
    </StyledNav>
  )
}

export default TabNav