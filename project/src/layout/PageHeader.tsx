import React from 'react'
import HeaderLogo from '../Component/HeaderLogo';
import HeaderNavigation from '../Component/HeaderNavigation';
import NavigationItems from '../Component/NavigationItems';
import ShoppingCart from '../Component/ShoppingCart';
import { navs } from '../data/HeaderNavs';

const PageHeader = () => {
  return (
    <header>
      <div className="container">
        <div className="header-main flex">
          <HeaderLogo link='/' logo='Electrican' />
          <nav className="header-nav inline-flex">
            <HeaderNavigation>
              {navs.map((nav) => {
                return (
                  <NavigationItems
                    key={`NaviItems${nav.id}`}
                    valuePath={nav.valuePath}
                    label={nav.label}
                  />
                );
              })}
            </HeaderNavigation>
            <ShoppingCart/>
          </nav> 
        </div>
      </div>
    </header>
  )
}

export default PageHeader