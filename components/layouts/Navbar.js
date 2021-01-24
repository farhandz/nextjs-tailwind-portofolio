import React from 'react'
import {useRouter} from 'next/router'
import { route } from 'next/dist/next-server/server/router';

function Navbar() {
  const router = useRouter()
    const [show, setShow] = React.useState(false)
    return (
      <>
        <div className="bg-indigo-700 sticky top-0">
          <div className="flex lg:items-center  flex-col lg:flex-row lg:mx-10">
            <div className="flex justify-between items-center lg:mx-0 mx-2">
              <div
                onClick={() => router.push("/")}
                className=" cursor-pointer font-bold text-4xl text-white"
              >
                farhandz
              </div>
              <div
                onClick={() => setShow(!show)}
                className=" text-white lg:hidden cursor-pointer"
              >
                {show ? (
                  <i className="fas fa-times fa-2x"></i>
                ) : (
                  <i className="fas fa-bars fa-2x"></i>
                )}
              </div>
            </div>
            <div
              className={` ${
                show ? "nav-normal" : "nav-absol"
              }  flex justify-between flex-col lg:flex-row  w-full`}
            >
              <div className="cursor-pointer flex flex-col lg:flex-row">
                <div
                  onClick={() => router.push("/skill")}
                  className=" hover:text-blue-900  lg:mx-10 py-5 font-bold text-white  mx-5"
                >
                  Skill
                </div>
                <div
                  onClick={() => router.push("/portofolio")}
                  className=" hover:text-blue-900  lg:mx-10 py-5 font-bold text-white  mx-5"
                >
                  Portofolio
                </div>
                <div
                  onClick={() => router.push("/contact")}
                  className=" hover:text-blue-900  lg:mx-10 py-5 font-bold text-white  mx-5"
                >
                  Contact me
                </div>
              </div>
              <div className="flex flex-col lg:flex-row">
                <div
                  onClick={() => router.push("/blog")}
                  className=" hover:text-blue-900 cursor-pointer lg:mx-10 py-5 font-bold text-white  mx-5"
                >
                  Blog
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Navbar
