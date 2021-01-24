import React from 'react'
import Typewriter from "typewriter-effect";

function MeComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return (
      <div className="text-center bg-default h-full">
        <div className="flex justify-center">
          <img className="mt-10" src="/image/han.png" alt="" />
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
          <h1 className="text-indigo-700 text-xl  mt-4">
            FullStack Web Developer
          </h1>
          <span className="font-bold text-white">Tech enthusiastic</span>
          <p className="mt-4 font-ibm mt-10 lg:mx-32  text-white font-semibold text-xl">
            Hello, Let me introduce my self, my name farhan ammar. I'm from
            Tegal, Central java , Indonesia. I'm a web developer escpesially in
            fullstack javascript developer. I was graduated from Arkademy(Tech
            Academy) in 2020. Recently im work as backend developer at one of
            start up company in indonesia. My favourite stack is nest js for
            backend, react js for frontend and mongodb for database. Recently i
            was learn flutter for mobile development
          </p>
        </div>
        <div className="flex justify-center gap-2  mx-28 py-5">
          <img src="/image/porto/node.png" alt="" />
          <img src="/image/porto/expess.png" alt="" />
          <img src="/image/porto/react.png" alt="" />
          <img src="/image/porto/redux.png" alt="" />
          <img src="/image/porto/mongo.png" alt="" />
          <img src="/image/porto/nest.png" alt="" />
          <img src="/image/porto/typescript.png" alt="" />
        </div>
      </div>
    );
}

export default MeComponent
