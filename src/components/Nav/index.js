import React from "react"
import "./style.scss"

import DesktopNav from "./desktopNav"
import MobileNav from "./mobileNav"

const Nav = () => {
  return window.innerWidth < 600 ? <MobileNav /> : <DesktopNav />
}

export default Nav
