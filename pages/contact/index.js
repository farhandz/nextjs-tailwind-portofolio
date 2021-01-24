import React from 'react'
import Layout from '../../components/layouts/Layout'

function Contact() {
    return (
      <Layout title="contact">
        <div className="">
          <div className="h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col gap-5 ">
              <div onClick={() => window.open('https://web.facebook.com/minato.namikazefarhancyhtc')} className="flex lg:flex-row flex-col items-center justify-start">
                <i className="fab fa-facebook text-white fa-2x"></i>
                <h1 className="text-center text-white ml-2">
                  facebook.com/minato.namikazefarhancyhtc
                </h1>
              </div>
              <div onClick={() => window.open('https://mail.google.com/mail/u/0/#inbox')} className="flex lg:flex-row flex-col items-center justify-start ">
                <i className="far fa-envelope text-white fa-2x"></i>
                <h1 className="text-white ml-3 cursor-pointer">
                  ammarjoz09@gmail.com
                </h1>
              </div>
              <div onClick={() => window.open('https://www.instagram.com/ammarjoz09/')}  className="flex items-center lg:flex-row flex-col justify-start">
                <i className="fab fa-instagram text-white fa-2x"></i>
                <h1 className="hover:text-blue-900 cursor-pointer text-center text-white ml-2">
                  www.instagram.com/ammarjoz09/
                </h1>
              </div>
              <div onClick={() => window.open('https://www.linkedin.com/in/farhandz/')}  className="flex lg:flex-row flex-col items-center justify-start">
                <i className="text-white fab fa-linkedin fa-2x"></i>
                <h1 className="text-center text-white ml-2">
                  www.linkedin.com/in/farhandz/
                </h1>
              </div>
              <div onClick={() => window.open('https://github.com/farhandz/')}  className="flex lg:flex-row flex-col items-center justify-start">
                <i className="text-white fa-2x fab fa-github"></i>
                <h1 className="text-center text-white ml-2">
                  github.com/farhandz/
                </h1>
              </div>
              <div className="flex lg:flex-row flex-col items-center justify-start">
                <i className=" text-white  fa-2x fab fa-telegram"></i>
                <h1 className="text-center text-white ml-2">0895385215370</h1>
              </div>
            </div>
          </div>

        </div>
      </Layout>
    );
}

export default Contact
