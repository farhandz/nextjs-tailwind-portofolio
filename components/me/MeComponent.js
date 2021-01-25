import React from 'react'
import Typewriter from "typewriter-effect";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Bounce";
import Spin from 'react-reveal/Spin';
import {useRouter} from 'next/router'



function MeComponent() {
  const router = useRouter()
  const [show , setShow] = React.useState(false)
  const [counter, setCounter] = React.useState(0)

  const onClickinfo = () => {
    setShow(!show)
    setCounter(counter + 1)
  }
    return (
      <div className="text-center bg-default h-full">
        <div className="bg-coding flex flex-col items-center  justify-center ">
          <Spin>
            <img className="mt-10" src="/image/Ellipse 1.png" alt="" />
          </Spin>
          <div className="section-info-profile w-full flex flex-col justify-center ">
            <div className="flex justify-center flex-col">
              <i className="fas fa-laptop-code text-black fa-3x mt-2"></i>
              <h3 className="font-bold text-4xl my-2 font-eb">
                Farhan Ammar Dzakwan
              </h3>
            </div>
            <h1 className="font-ibm">❝Lets Play With Code❞</h1>
            <div>
              <Bounce>
                <h1 className="font-ibm">Tegal, Central Java, Indonesia</h1>
              </Bounce>
              <p>
                Backend Developer, Software Engineer{" "}
                <i className="fas fa-mug-hot"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-3 mt-10">
          <h1 className="text-5xl font-yusei text-white">
            <Typewriter
              options={{
                strings: ["Farhan", "Ammar", "Dzakwan"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          ;
          <Fade left>
            <p className="mt-4 font-ibm mt-10 lg:mx-32 my-10  text-white font-semibold text-xl">
              Hello, Let me introduce my self, my name farhan ammar. I'm from
              Tegal, Central java , Indonesia. I'm a web developer escpesially
              in fullstack javascript developer. I was graduated from
              Arkademy(Tech Academy) in 2020. Recently im work as backend
              developer at one of start up company in indonesia. My favourite
              stack is nest js for backend, react js for frontend and mongodb
              for database. Recently i was learn flutter for mobile development
            </p>
          </Fade>
        </div>

        <Fade left>
          <div className="text-white flex flex-col justify-center movivation-info">
            <h3 className=" text-black ">Motivation</h3>
            <h1 className=" text-5xl font-ibm text-black ">
              Make Your Decision And Keep Confident
              <hr />
            </h1>
          </div>
        </Fade>
        <Fade left>
          <div className=" flex justify-center bg-black mt-2 skill-info">
            <div className="flex justify-center gap-2 justify-center items-center  mx-28 py-5">
              <img src="/image/porto/nest.png" alt="" />
              <img src="/image/porto/expess.png" alt="" />
              <img src="/image/porto/react.png" alt="" />
              <img src="/image/porto/redux.png" alt="" />
            </div>
          </div>
        </Fade>
        <div className="info-wa">
          <div
            onClick={onClickinfo}
            className="flex z-40 justify-center items-center"
          >
            <Spin spy={counter}>
              <img src="/image/porto/codev3.png" alt="" />
            </Spin>
            <Fade>
              <h1 className={` ${show ? "" : "hidden"} bg-white ml-2`}>
                need application development services?{" "}
                <span
                  onClick={() => router.push("/contact")}
                  className="text-indigo-700 cursor-pointer"
                >
                  Contact Me
                </span>
              </h1>
            </Fade>
          </div>
        </div>
      </div>
    );
}

export default MeComponent
