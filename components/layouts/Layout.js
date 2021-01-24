import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({children, title = 'this is default title'}) => {
    return (
      <>
        <div >
          <Navbar />
          <Header title={title} />
          {children}
          <Footer />
        </div>
      </>
    );
}

export default Layout
