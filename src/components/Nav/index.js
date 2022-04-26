import React, { Fragment } from "react"

import DesktopNav from "./desktopNav"
import MobileNav from "./mobileNav"

const Nav = () => {
  return (
    <Fragment>
      <MobileNav />
      <DesktopNav />
    </Fragment>
  )
}

export default Nav
