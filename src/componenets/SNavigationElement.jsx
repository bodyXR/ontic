import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const SNavigationElement = styled(NavLink)(() => ({
  fontSize: '20px',
  fontFamily:"Arial",
  fontWeight: 'bold',
  textTransform: "capitalize",
  color: "#424242",
  textDecoration: "none",
  "&.activeelement": {
    borderBottom: `2px solid #424242`,
  },
}));

export default SNavigationElement;