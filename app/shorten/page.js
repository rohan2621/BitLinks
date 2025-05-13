"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Page = () => {

  const [url, setUrl] = useState('')
  const [Generated, setGenerated] = useState("")
  const [shorturl, setShorturl] = useState('')
  const handleGenerate = () => {
    if (url === '' || shorturl === '') {
      alert('Please fill all the fields')
      return
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:3000/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(process.env.NEXT_PUBLIC_HOST);
        setGenerated(`http://localhost:3000/${shorturl}`)
          alert(result.message)
        
     
        console.log(result)
      setShorturl('')
      setUrl('')})
      .catch((error) => console.error(error));

  }

  return (
    <>
      <div className='h-[80vh] w-screen flex justify-center items-center'>

        <div className=' mx-auto rounded-2xl  w-[35vw] bg-[#f8f8ff]'>

          <div className='flex flex-col justify-center   h-[40vh] mx-auto w-[30vw]'>
            <h1 className='text-2xl font-semibold'>Generate your short URLs</h1>

            <div className='flex flex-col gap-3 mt-4'>
              <input type="text" placeholder='Enter your URL here' className='border font-medium bg-white border-gray-300 rounded-md p-3' value={url} onChange={(e) => setUrl(e.target.value)} />
              <input type="text" placeholder='Enter a shorturl' className='border font-medium bg-white border-gray-300 rounded-md p-3' value={shorturl} onChange={(e) => setShorturl(e.target.value)} />
            </div>
            <button onClick={handleGenerate} className="relative mt-3 inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 w-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Generate
              </span>
            </button>
            {Generated && <div className='flex flex-col gap-2 mt-4'>
              <h1 className='text-lg font-semibold'>Your short URL is</h1>
              <Link href={`${Generated}}`} className='text-blue-500'>{Generated}</Link>
              </div>}

          </div>
        </div>
      </div>
    </>
  )
}

export default Page