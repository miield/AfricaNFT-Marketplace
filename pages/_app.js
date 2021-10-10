/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../images/afnftlogo.jpg'
import Layout from '../src/components/layout'
import styles from '../styles/search.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/index.css'



function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <div >
      <div className='d-flex justify-content-between container align-items-center py-2 my-3'> 
        <div> <span className='text-primary'> AfricaNFT </span>
          </div>

          <div>
            <button className='btn btn-sm btn-dark px-5 rounded-pill fs-5 py-2 text-bold'> Login</button>
            </div>
        </div>
      
      <div className='d-flex justify-content-between container align-items-center py-2 py-3 border-2'>
      <div> 
          <span className='fs-6 fw-light'> search items, collections, accounts</span>
        </div>

        <div>
        <ul className='d-flex list-unstyled custom-nav' > 
            <li className='mx-1 fw-bolder fs-5'> 
            <Link href='/' className='text-decoration-none' style={{textDecoration:'none'}}>
            Home
            </Link>
            </li>
            {/* <li className='mx-1 fw-bolder fs-5'> 
            <Link href='/create-new-nft'>
            List Nfts
            </Link>
            </li> */}
            <li className='mx-1 fw-bolder fs-5'> 
                    <Link href="/my-assets">
            My Assets
      
          </Link>
            </li>
            <li className='mx-1 fw-bolder fs-5'> 
            <Link href="/lazy-mint">
          
          Lazy Mint Assets
      
      </Link>
            </li>
            <li className='mx-1 fw-bolder fs-5'> 
            <Link href="/upload-to-ipfs">   IPFS Upload  
      </Link>
             </li>

          </ul>
          </div>
      </div>


          {/* <div className='w-100 text-center p-3' style={{
            color:'#C3CBCD',  
            background:'#373F41'
          }}>  


          <small  className='fw-bolder' style={{opacity:'0.6'}}>

          &copy; AfricaNfts.com. All right reserved

          </small>

            </div> */}


{/* 
            
      <nav className="border-b p-2 bg-blue-300 font-sans font-bold "> 
        <p className="text-4xl font-bold font-sans ml-2 mt-2 "> 
        <Image src={logo} alt="AfricaNFT Marketplace Logo" width={50} height={50} className="rounded-full" />
           AfricaNFT Marketplace  

    <div className="flex relative text-gray-600 focus-within:text-pink-500 float-right w-1/3">
      <span className="absolute inset-y-0 left-0 flex pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        </button>
      </span>
      <input className="rounded-full px-8 p-4 mr-5 ml-1 divide-gray-500 float-right text-xl w-full" 
        placeholder='Search for Assets and Collectibles' type='text'
        //onChange={onChange}
        //onFocus={onFocus}
        //value={query}
        />
    </div>
      </p>
        <div className="flex mt-4 font-bold font-sans ml-8">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-new-nft">
            <a className="mr-6 text-pink-500">
              Create New NFTs
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500">
              List My NFT Assets
            </a>
          </Link>
          <Link href="/lazy-mint">
            <a className="mr-6 text-pink-500">
              Lazy Mint Assets
            </a>
          </Link>
          <Link href="/upload-to-ipfs">
            <a className="mr-6 text-pink-500">
              IPFS Upload
            </a>
          </Link>
          
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav> */}
      <Component {...pageProps} />
    </div>
    </Layout>
  )
}

export default MyApp
