import React from 'react'
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
  DropdownItem} from 'reactstrap'

const Header = (props) => {
  return (
    <div>
      <Navbar className="navbar-header-app">
        <NavbarBrand href="/">Logo</NavbarBrand>
      </Navbar>
      <Navbar className="navbar-link" color="light" light expand="md">
        <NavbarToggler onClick={props.handleToggleNavbar} />
        <Collapse isOpen={props.collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/nosotros">Nosotros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Nuestras Soluciones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Nuestros clientes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Equipo IW</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contacto</NavLink>
            </NavItem>
            {props.isSignedIn && <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                                Perfil
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                                	<div>
                                		<img src={props.user.photoURL} />
	                                    <p>{props.user.name}</p>
                  </div>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={props.onSignOut}>
                  <span>Cerrar sesión</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>}
            {!props.isSignedIn &&
                        <NavItem>
                          <NavLink href="/login">Login</NavLink>
                        </NavItem>}
	            	</Nav>
          		</Collapse>
        	</Navbar>
    </div>
  )
}

export default Header
