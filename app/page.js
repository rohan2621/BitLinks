import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <main className="bg-[#f8f8ff]" >
        <section className='grid  md:grid-cols-2 h-[100vh] md:h-[60vh]'>
          <div className='flex flex-col justify-center items-center gap-6 p-25'>

            <h1 className="font-medium text-4xl text-center ">The best URL shortener in the Market
            </h1>
            <p className="text-center text-gray-500">

              We are the most straightfoward URL Shortener in the world. Most of the url
              shorteners will track you or ask you to give your details for login. We understand
              your needs and hence we have created this URL shortener
            </p>
            <div className="flex gap-4 ">
              <Link href="/shorten">

              <button className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Try Now
                </span>
              </button>
              </Link>

              <Link href="https://github.com/rohan2621">
                <button className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    GitHub
                  </span>
                </button>
              </Link>
            </div>

          </div>
          <div className=' relative'>
            <Image src="/vector1.png" alt="a image" fill={true} className="object-contain" />
          </div>
        </section>
      </main>
    </>
  );
}
