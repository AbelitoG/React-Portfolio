
import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from 'reactstrap';



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
    //     <div>
    //   <Navbar {...args}>
    //     <NavbarBrand href="/">Abel Gonzales</NavbarBrand>
    //     <NavbarToggler onClick={toggle} />
    //     <Collapse isOpen={isOpen} navbar>
    //       <Nav className="me-auto" navbar>
    //         <NavItem>
    //           <NavLink href="#" id = "about" onClick={handleClick}>About Me</NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink href="#" id = "portfolio" onClick={handleClick}>
    //             Portfolio
    //           </NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink href="#" id = "contact" onClick={handleClick}>
    //             Contact
    //           </NavLink>
    //         </NavItem>
    //       </Nav>
    //       <NavbarText>Simple Text</NavbarText>
    //     </Collapse>
    //   </Navbar>
    // </div>
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a
              id="about" onClick={handleClick}
            >About</a></li>
            <li><a
              id="portfolio" onClick={handleClick}
            >Portfolio</a></li>
            <li><a
              id="contact" onClick={handleClick}
            >Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a 
        id="about" onClick={handleClick}
        className="btn btn-ghost normal-case text-xl"
        
        >Gonzus</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
        </button>
        <button className="btn btn-ghost btn-circle">
        </button>
      </div>
    </div>

  )
}
export default Navigation