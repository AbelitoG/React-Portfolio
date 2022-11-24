
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';



const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const args = {
    color: "light",
    light: "true",
    expand: "md",
    container: "fluid"
  }

const handleClick = (e) => {
    const id = e.target.id
    props.setPage(id)
}


    return (
        <div>
      <Navbar {...args}>
        <NavbarBrand href="/">Abel Gonzales</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="#" id = "about" onClick={handleClick}>About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" id = "portfolio" onClick={handleClick}>
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" id = "contact" onClick={handleClick}>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    )
}
export default Navigation