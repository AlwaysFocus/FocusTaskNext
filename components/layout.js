import Link from "next/link"
import Head from 'next/head'

const name = "Eli Whalen"
export const siteTitle = "FocusTask Next"

export default function Layout({ children }) {
  return (
    <div>
        <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <div className="flex flex-row bg-white h-screen">
          <div className="flex flex-col justify-between w-16 items-center bg-gray-200">
            <div className="flex flex-col w-full space-y-4">
              <Link href="/">
              <a className="w-full h-16 flex justify-center items-center hover:bg-yellow-500 rounded-md cursor-pointer">
                  <svg className="w-8 h-8 text-black transform hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </a>
              </Link>
              <Link href="/projects/github-search">
              <a className="w-full h-16 flex justify-center items-center hover:bg-yellow-500 rounded-md cursor-pointer">
                  <svg className="w-8 h-8 text-black transform hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </a>
              </Link>
              <Link href="/tasks/user-tasks">
              <a className="w-full h-16 flex justify-center items-center hover:bg-yellow-500 rounded-md cursor-pointer">
              <svg className="w-8 h-8 text-black transform hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
              </a>
              </Link>
            
            
            </div>
            <div className="flex flex-col space-y-4 w-full">
              <a className="w-full h-16 flex justify-center items-center hover:bg-yellow-500 rounded-md cursor-pointer">
                  <svg className="w-8 h-8 text-black transform hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
              </a>
              <a className="w-full h-16 flex justify-center items-center hover:bg-yellow-500 rounded-md cursor-pointer">
                  <svg className="w-8 h-8 text-black transform hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </a>
              <a className="w-full h-16 flex justify-center items-center hover:bg-yellow-500 rounded-md cursor-pointer">
                  <svg className="w-8 h-8 text-black transform hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
              </a>  
            </div>
        </div>
      {children}
      </div>
      
    </div>
  );
}
