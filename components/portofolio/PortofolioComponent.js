import React from 'react'
import Slider from "react-slick";

function PortofolioComponent() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="my-5 lg:mx-5 mx-2">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="bg-white flex flex-col  ">
            <img src="/image/portofolio/tikets.png" alt="" />
            <div>
              <h2 className="lg:mx-5 lg:my-2  font-yusei">
                Taka Ticket is Aplication for purchase of plane tickets. This
                app has feature realtime chat for chatting between buyer and
                admin for confirm the payment .Taka Ticket was developed by me
                and my team. Taka Ticket developed using javascript environment
                such as vue js , express, node, socket io, and mysql
              </h2>
              <p
                onClick={() => window.open("http://bit.ly/farhan_ticket")}
                className="text-blue-500 font-bold text-2xl text-center cursor-pointer"
              >
                demo
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-col  ">
            <img src="/image/portofolio/pewworld.png" alt="" />
            <div>
              <h2 className="lg:mx-5 lg:my-2 font-yusei">
                Peworld App is Aplication for jobseker like a linkedin. Peworld
                app has feature sorting based on joob seeker is experience or
                not and filter based on skill. Peworld App developed using
                javascript environment such as vue js , express, node, socket
                io, and mysql
              </h2>
              <p
                onClick={() => window.open("http://18.208.165.238:8000/")}
                className="text-blue-500 font-bold text-2xl text-center cursor-pointer"
              >
                demo
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-col  ">
            <img src="/image/portofolio/chat.png" alt="" />
            <div>
              <h2 className="lg:mx-5 lg:my-2 font-yusei">
                Taka Chat is a realtime chat aplication like a telegram, Taka
                App has feature private chat and friend list. Taka Chat has
                feature share location. Taka Chat developed using javascript
                environment such as vue js , express, node, socket io, and mysql
              </h2>
              <p
                onClick={() => window.open("http://18.208.165.238:9000/")}
                className="text-blue-500 font-bold text-2xl text-center cursor-pointer"
              >
                demo
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-col  ">
            <img src="/image/portofolio/pos.png" alt="" />
            <div>
              <h2 className="lg:mx-5 lg:my-2 font-yusei">
                Taka Pos is a aplication poin of sales Taka Pos Has feature add
                to cart, Taka Pos has Feature dialy report, monthly report in
                pdf format and can print from the browser, Taka Chat developed
                using javascript environment such as vue js , express, node,
                socket io, and mysql, redis
              </h2>
              <p
                onClick={() => window.open("http://18.208.165.238:8500/")}
                className="text-blue-500 font-bold text-2xl text-center cursor-pointer"
              >
                demo
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-col  ">
            <img src="/image/portofolio/villa.png" alt="" />
            <div>
              <h2 className="lg:mx-5 lg:my-2 font-yusei">
                Taka Villa is a aplication rent a villa. Taka Villa has feature
                booking villa just by phone. Taka Chat developed using
                javascript environment such as React js , Redux, express, node,
                socket io, and mongodb
              </h2>
              <p
                onClick={() => window.open("https://peaceful-mestorf-3bd649.netlify.app")}
                className="text-blue-500 font-bold text-2xl text-center cursor-pointer"
              >
                demo
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-col  ">
            <img src="/image/portofolio/smm.png" alt="" />
            <div>
              <h2 className="lg:mx-5 lg:my-2 font-yusei">
                Taka Smm is a website for purchase follower all sosial media
                automatically. Interagtion with payment gateway Taka smm
                developed using javascript environment such as React js , Nest
                js, node, Redux, Redux thun, rxjs and mongodb
              </h2>
            </div>
          </div>
          <div className="bg-white flex flex-col  ">
            <img src="/image/portofolio/heart.png" alt="" />
            <div>
              <h2 className="g:mx-5 lg:my-2 font-yusei">
                Taka Heart is a aplication for Express love, developing using
                React js
              <p
                onClick={() => window.open("https://pedantic-montalcini-82e706.netlify.app/")}
                className="text-blue-500 font-bold text-2xl text-center cursor-pointer"
              >
                demo
              </p>
              </h2>
            </div>
          </div>
          <div className="bg-white flex flex-col  ">
            <img src="/image/portofolio/quran.png" alt="" />
            <div>
              <h2 className="g:mx-5 lg:my-2 font-yusei">
                Quran Online is aplication for listening and reading alquran.
                Quran developed using javascript environment such as React js
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PortofolioComponent