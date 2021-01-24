import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import FadeIn from "react-fade-in";


const Layout = ({children, title = 'this is default title'}) => {
    return (
      <>
      <FadeIn>
        <div >
          <Navbar />
          <Header title={title} />
          {children}
          <Footer />
        </div>

      </FadeIn>
      </>
    );
}

export default Layout
