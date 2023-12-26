import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

import styled from "styled-components";
import TopNav from "../menues/TopNav";
import { responsive } from "../../assets/styles/bp";
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';

const Div = styled.div`
  ${responsive.min_md} {
    display: none;
  }
`;


const D = styled(Drawer)`
  background-color: hsl(var(--color-muted)) !important;
`
const MobileTopMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <Div>
            <button onClick={toggleDrawer}><FaBars /></button>
            <D
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
            >
                <TopNav />
            </D>
        </Div>
    )
}

export default MobileTopMenu;
