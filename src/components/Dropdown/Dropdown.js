import React from 'react';
import { menuData } from '../../data/MenuData';
import { Button } from '../Navbar/ButtonStyle';
import { DropdownContainer, Icon, CloseIcon, DropdownWrapper, DropdownMenu, DropdownLink, BtnWrap} from './DropdownStyle';

const Dropdown = ({toggle, isOpen}) => {
    return (
        <DropdownContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => {
                        return(
                            <DropdownLink to={item.link} key={index} onClick={toggle}>
                            {item.title}
                            </DropdownLink>
                        )
                    })}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary="true" big="true" round="true" to="/contact" onClick={toggle}>
                        Contact Us
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
