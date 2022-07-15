import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillHome, AiFillBell, AiFillBook, AiFillSetting } from 'react-icons/ai';

const StyledSideBar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 0;
  left: 0;
  min-width: 170px;
  border-right: 2px solid #F0F0F0;
  padding-right: 20px;

  a{
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    padding: 8px 15px;
    border-radius: 6px;
    color: #000;

    &:hover{
      background: #6a5acd;
      color: #fff;
    }
  }

  .count{
    background-color: #bb3385;
    color: #fff;
    padding: 4px 5px;
    border-radius: 50%;
    font-size: 10px;
  }
`

function SideBar() {
  return (
    <StyledSideBar>
      <Link to="/">
        <AiFillHome /><span>Home</span>
      </Link>
      <Link to="/alerts">
        <AiFillBell /><span>Alerts</span> <div className="count">13</div>
      </Link>
      <Link to="/reports">
        <AiFillBook /><span>Reports</span>
      </Link>
        
      <Link to="/settings">
        <AiFillSetting /><span>Settings</span>
      </Link>
        
    </StyledSideBar>
  )
}

export default SideBar