import MainImage from "../assets/main.png";
import Image from "next/dist/client/image";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <div>
      <Layout title="Home">
        <div className="max-w-2xl mx-auto">
          <div className="flex xl:flex-row md:flex-row flex-col-reverse xl:mt-20 md:mt-10 xl:p-1 md:p-1 p-4">
            <div>
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                James Ide
              </h1>
              <div className="flex flex-row">
                <a
                  className=" pr-2 font-bold hover:cursor-pointer hover:text-[#BED600] duration-500"
                  href="https://www.linkedin.com/in/jamesaide/"
                  target="#"
                >
                  LinkedIn
                </a>
                <a
                  className="pl-2 pr-2 font-bold hover:cursor-pointer hover:text-[#BED600] duration-500"
                  href="https://github.com/JamesIde"
                  target="#"
                >
                  GitHub
                </a>
                <a
                  className=" pl-2 pr-2 font-bold hover:cursor-pointer hover:text-[#BED600] duration-500"
                  href="mailto:james.ide775@gmail.com"
                  target="#"
                >
                  Contact
                </a>
              </div>
              <p className="max-w-md text-gray-700 mt-3">
                Developer from South Australia. I aim to deepen my understanding
                in various areas of software and web development.
              </p>
            </div>
            <div className="relative mb-2 xl:ml-auto md:ml-auto mr-auto">
              <Image
                src={MainImage}
                alt="James Ide"
                height={150}
                width={150}
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>
          <div className=" xl:p-1 md:p-1 p-4">
            <h2 className="font-bold text-3xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
              Employment
            </h2>
            <div className="flex flex-row justify-between max-w-xl xl:p-1 md:p-1 p-4">
              <p className="text-gray-700 dark:text-gray-200 mt-3 mb-4">
                Consultant at{" "}
                <a
                  className="font-bold hover:cursor-pointer hover:text-[#BED600] duration-500"
                  href="https://chamonix.com.au/"
                  target="#"
                >
                  Chamonix IT Solutions
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-200 mt-3 mb-4">
                July 2022 -
              </p>
            </div>
            <h2 className="font-bold text-3xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
              Education
            </h2>
            <p className=" text-gray-700 mt-3">
              Bachelor of Information Technology (Networks and Cybersecurity)
              from{" "}
              <strong className="font-bold hover:cursor-pointer hover:text-[#BED600] duration-500">
                <a
                  href="https://www.flinders.edu.au/
            "
                  target="_#"
                >
                  Flinders University{" "}
                </a>
              </strong>
            </p>
            <p className="text-md text-gray-700 mt-1 mb-2 italic">
              Relevant topics: Application Development, Web-Based Systems
              Development, Database Design
            </p>
          </div>
          <div className="max-w-xl xl:p-1 md:p-1 p-4">
            <h2 className="font-bold text-3xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
              Projects
            </h2>
            <hr className="w-full mt-2" />
            <div className="flex flex-row justify-between ">
              <div>
                <h2 className="font-bold mt-4">Conduit</h2>
                <p className="text-gray-700 max-w-md mt-2 mb-1">
                  An scaleable article sharing platform, similar to Medium.
                </p>
                <p className="text-gray-700 max-w-md mt-2 mb-1">
                  JWT authentication with access tokens, refresh tokens, and
                  token revoking capability.
                </p>
                <p className="text-gray-700 max-w-md mt-2 mb-1">
                  Relational features such as following users, liking articles,
                  and commenting on articles.
                </p>
                <p className="text-gray-700 max-w-md mt-2 mb-1">
                  Server-side pagination and caching to reduce latency and
                  improve performance.
                </p>
                <p className="text-gray-700 max-w-md mt-2 mb-1">
                  Deployed as a Kubernetes Cluster to Google Kubernetes Engine
                  with an Nginx Ingress Controller for load balancing, routing
                  and serving static files.
                </p>
                <p className="font-bold text-md">Technology</p>
                <p className="text-md italic">
                  React, NestJS, PostgreSQL, Docker, Kubernetes, Nginx
                </p>
              </div>
              <div className="inline-flex">
                <span className="p-2 hover:cursor-pointer hover:text-[#BED600] duration-500">
                  <a href="https://conduits.ml" target="#">
                    Live{" "}
                  </a>
                </span>
                <span className="p-2 hover:cursor-pointer hover:text-[#BED600] duration-500">
                  <a href="https://github.com/JamesIde/Conduit" target="#">
                    GitHub{" "}
                  </a>
                </span>
              </div>
            </div>
            <hr className="w-full mt-2" />
            <div className="flex flex-row justify-between ">
              <div>
                <h2 className="font-bold mt-4">HiddenVilla</h2>
                <p className="text-gray-700 max-w-md mt-2 mb-1">
                  A mobile-first room booking system built with Angular and
                  Express.
                </p>
                <p className="text-gray-700 max-w-md mt-2 mb-1">
                  A TypeScript application where users can view and book hotel
                  rooms and make payments with Stripe Payment API.
                </p>
                <p className="text-gray-700 max-w-md mt-2 mb-1">
                  Implemented user authentication and authorization with access
                  tokens, refresh tokens, and cookies.
                </p>
                <p className="font-bold text-md">Technology</p>
                <p className="text-md italic">
                  Angular, Express, NodeJS, Prisma, mySQL, MaterialUI
                </p>
              </div>
              <div className="inline-flex pl">
                <span className="p-2 hover:cursor-pointer hover:text-[#BED600] duration-500">
                  <a href="https://hidden-villa-1.web.app/" target="#">
                    Live
                  </a>
                </span>
                <span className="p-2 hover:cursor-pointer hover:text-[#BED600] duration-500">
                  <a href="https://github.com/JamesIde/hidden-villa" target="#">
                    GitHub{" "}
                  </a>
                </span>
              </div>
            </div>
            <hr className="w-full mt-2" />
            <div className="flex flex-row justify-between ">
              <div>
                <h2 className="font-bold mt-4">YouTube Trender</h2>
                <p className="text-gray-700 max-w-md mt-2 mb-1">
                  An interactive application that parses JSON metadata about
                  Youtube videos.
                </p>
                <p className="text-gray-700 max-w-md mt-2 mb-1">
                  It uses maps, lists and comparators to sort, search and index
                  the data.
                </p>
                <p className="text-gray-700 max-w-md mt-2 mb-1">
                  A GUI using the Java Swing framework allows the user to
                  interact with the underlying data structures.
                </p>
                <p className="font-bold text-md">Technology</p>
                <p className="text-md italic">Java</p>
              </div>
              <div className="inline-flex pl">
                <span className="p-2 hover:cursor-pointer hover:text-[#BED600] duration-500">
                  <a
                    href="https://user-images.githubusercontent.com/50192239/138374096-c028b072-ca7d-40af-86f5-4b9804134cd6.gif"
                    target="#"
                  >
                    Demo
                  </a>
                </span>
                <span className="p-2 hover:cursor-pointer hover:text-[#BED600] duration-500">
                  <a
                    href="https://github.com/JamesIde/youtube_trender"
                    target="#"
                  >
                    GitHub{" "}
                  </a>
                </span>
              </div>
            </div>
            <hr className="mt-2 border-1" />
          </div>
        </div>
      </Layout>
    </div>
  );
}
