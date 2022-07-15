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
        <Link to="/reports/report1">Weeks</Link>
        <Link to="/reports/report2">Months</Link>
        <Link to="/reports/report3">Years</Link>
    </StyledNav>
  )
}

export default TabNav