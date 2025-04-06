import { Navbar, NavBody, MobileNav, NavbarLogo, NavbarButton, MobileNavHeader, MobileNavToggle, MobileNavMenu} from "./resizable-navbar";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  
  export function NavbarDemo() {
  
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    return (
      <div className="relative w-full">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <div className="flex gap-4">
              <Link className="pr-4 cursor-pointer hover:font-semibold" to="login">Requests</Link>
              <Link className="pr-4 cursor-pointer hover:font-semibold" to="login">Connections</Link>
              <Link className="pr-4 cursor-pointer hover:font-semibold" to="login">Login</Link>
            </div>
            <Link className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-1 rounded-full text-lg font-semibold hover:scale-105 shadow-lg cursor-pointer" to="login">Login</Link>
          </NavBody>
  
          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>
  
            <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            <div className="flex flex-col mx-auto text-lg">
              <Link className="font-semibold pr-4 cursor-po" to="login">Requests</Link>
              <Link className="font-semibold pr-4 cursor-po" to="login">Connections</Link>
              <Link className="font-semibold pr-4 cursor-po" to="login">Login</Link>
            </div>
              <div className="flex w-full flex-col gap-4">
                <Link 
                  to="login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full py-2 bg-white text-black text-center rounded-md font-bold"
                >
                  Login
                </Link>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
    );
  }