import MainImage from "../assets/main.png"
import Image from "next/dist/client/image"
import Layout from "../components/Layout"
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
              <p className="max-w-md text-gray-700">
                Developer from South Australia. I aim to deepen my understanding
                in various areas of software and web development.
              </p>
            </div>
            <div className="relative mb-2  xl:ml-auto md:ml-auto mr-auto mt-3">
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
            <div className="flex flex-row justify-between ">
              <div>
                <h2 className="font-bold mt-4">Get Tracked</h2>
                <p className="text-gray-700 max-w-md mt-2 mb-1">
                  A project manager/bug tracker built with the MERN stack. Users
                  can create projects, track their bugs and features, and add
                  tickets and comments.
                </p>

                <p className="font-bold text-md">Technology</p>
                <p className="text-md italic">
                  React, Express, NodeJS, MongoDB, Tailwindcss
                </p>
              </div>
              <div className="inline-flex ">
                <span className="p-2 hover:cursor-pointer hover:text-[#BED600] duration-500">
                  <a href="https://get-tracked.herokuapp.com/" target="#">
                    Live{" "}
                  </a>
                </span>
                <span className="p-2 hover:cursor-pointer hover:text-[#BED600] duration-500">
                  <a href="https://github.com/JamesIde/get-tracked" target="#">
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
                  Youtube videos. It uses maps, lists and comparators to sort,
                  search and index the data. A GUI using the Java Swing
                  framework allows the user to interact with the underlying data
                  structures.
                </p>
                <p className="font-bold text-md">Technology</p>
                <p className="text-md italic">Java</p>
              </div>
              <div className="inline-flex pl">
                <p className="p-2 hover:cursor-pointer hover:text-[#BED600] duration-500">
                  <a
                    href="https://user-images.githubusercontent.com/50192239/138374096-c028b072-ca7d-40af-86f5-4b9804134cd6.gif"
                    target="#"
                  >
                    Demo
                  </a>
                </p>
                <p className="p-2 hover:cursor-pointer hover:text-[#BED600] duration-500">
                  <a
                    href="https://github.com/JamesIde/youtube_trender"
                    target="#"
                  >
                    GitHub{" "}
                  </a>
                </p>
              </div>
            </div>
            <hr />

            <div className="flex flex-row justify-between ">
              <div>
                <h2 className="font-bold mt-4">Riftwar Cycle Bookstore</h2>
                <p className="text-gray-700 max-w-md mt-2 mb-1">
                  An ecommerce website dedicated to popular fiction novels by
                  author Raymond E Feist. Key features include user
                  authentication, order creation, order management and the
                  integration of Stripe Payment API to track order statuses
                  through custom webhooks.
                </p>
                <p className="font-bold text-md">Technology</p>
                <p className="text-md italic">
                  React, Redux, Express, NodeJS, MongoDB, Tailwindcss
                </p>
              </div>
              <div className="inline-flex pl">
                <p className="p-2"></p>
                <p className="p-2 hover:cursor-pointer hover:text-[#BED600] duration-500">
                  <a
                    href="https://github.com/JamesIde/riftwar-cycle-bookshop"
                    target="#"
                  >
                    GitHub{" "}
                  </a>
                </p>
              </div>
            </div>
            <hr className="w-full mt-2" />
          </div>
        </div>
      </Layout>
    </div>
  )
}
