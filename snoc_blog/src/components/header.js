import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <div>
      <Navbar fixed="top" light expand="sm">
        <div className="container">
          <NavbarText>{siteTitle} - Colorado</NavbarText>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/team">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tags">Tags</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default Header
