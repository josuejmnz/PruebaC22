import React, { Component, useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'

    
export class DropDown extends Component {
      
    render() {
    const [dropdown, setDropdown] = useState(false);
    const openCloseDP = () => {
        setDropdown(!dropdown);
    }

    return (
      <div className='drop-down'>
        <DropDown isOpen = {dropdown} toggle = {openCloseDP}>
            <DropdownToggle>
                Menu
            </DropdownToggle>

            <DropdownMenu>
                <DropdownItem>1</DropdownItem>
                <DropdownItem>2</DropdownItem>
                <DropdownItem>3</DropdownItem>
                <DropdownItem>4</DropdownItem>
            </DropdownMenu>
        </DropDown>


      </div>
    )
    }
}

export default DropDown