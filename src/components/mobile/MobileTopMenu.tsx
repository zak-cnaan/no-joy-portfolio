import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import styled from "styled-components";
import TopNav from "../menues/TopNav";
import { responsive } from "../../assets/styles/bp";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

import TopButton from "../menues/TopButton";

const Div = styled.div`
  ${responsive.min_md} {
    display: none;
  }
`;

const D = styled(Drawer)`
  background-color: var(--gray-1) !important;
  border-bottom: 1px solid var(--gray-6);
`;
const MobileTopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Div>
      <TopButton onClick={toggleDrawer}>
        <FaBars />
      </TopButton>
      <D open={isOpen} onClose={toggleDrawer} direction="top">
        <TopNav variant="mobile" />
      </D>
    </Div>
  );
};

export default MobileTopMenu;
