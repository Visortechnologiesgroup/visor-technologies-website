import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='About' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='Services' onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='Contact' onClick={toggle}>
                    Contact
                    </SidebarLink>
                    <SidebarLink to='Collab' onClick={toggle}>
                        Collab
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
