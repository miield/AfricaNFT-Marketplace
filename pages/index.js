import axios from 'axios'
import Web3Modal from "web3modal"
import Image from 'next/image'
import banner from '../images/bg1.jpg'
import Head from 'next/head'
import Link from 'next/link'

import {
  nftaddress, nftmarketaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
// import NftSlides from './components/NftSlides/Index.js'

export default function Home() {
  return (
 <div> 
      <Head>
        <title>AfricaNFT MarketPlace - Explore, Create and Sell NFTs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> 

      <div className='d-flex justify-content-between container align-items-center py-2 py-3 border-2 px-4' style={{
        lineHeight:'1.5rem'
      }} >
        <div className='bg'>
          <h2 className='my-2'>Discover, Collect and sell NFTs </h2>

          <p style={{
            maxWidth:'20rem'
          }} className='mt-5'>
          Lorem Ipsum is simply dummy text of the printi
          ng and typesetting industry. Lorem Ipsum has been
          </p>

          <h4>Trade digital items on AfricaNfts</h4>

          <div className='my-3 home-link' >
          <button className='px-5 mt-4 fw-bold'  style={{
            padding:'0.8rem',
            background:'#0038F5',
            borderRadius:'10px',
            color:'white'
          }}> 
             <Link href='/create-new-nft'>
          Create
          </Link>
          </button>

          </div>
        
        <div className='my-3'>

           <button className='px-5 fw-bold'  style={{
            borderRadius:'10px',
            border:'1px solid #0038F5',
            padding:'0.8rem',
            background:'transparent'
          }}>
          
            <Link href='/all-nfts'>
          Discover
          </Link>
          
           </button>
          </div>
          
          </div>
          <div className="building_bg w-100" >
         


            </div>
        </div>


        {/* <NftSlides /> */}
        <div className="cloud w-100 text-white p-3"  style={{
        
        }} >

          <div style={{
           maxWidth:'60rem',
           lineHeight:'1.8rem',
           margin:'auto'
         }}> 
         <h4 className='text-center mt-4'>About AfricaNFTs</h4>

         <h1 className='mt-5'> Product Details</h1>

         <p style={{
           maxWidth:'25rem',
          lineHeight:'1.5rem'
          
          
         }}  className='mt-3'> className Lorem lreo  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem   Ip sum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book. I </p>

            <button className='border-0 btn btn-small btn-primary p-3 text-gray fw-bold' style={{
              opacity:'0.85'
            }}>learn more</button>
            </div>

         <div> 

           

           </div>
          </div>

            
            <div style={{
               background:'#C4C4C4',
               padding:'1rem'
            }}> 
          <div style={{
           maxWidth:'60rem',
           margin:'auto'
          
          }}> 

        <p style={{
          color:'#AF6262',
          fontSize:'1.8rem',
          fontWeight:600

        }}> Ready to get Started</p>
        <p style={{
          fontWeight:500
        }}>Get the latest AfricaNFTs update</p>

        <div>
          <input  placeholder='Your email address' style={{
            padding:'0.7rem',
            borderTopLeftRadius:'10px',
            borderBottomLeftRadius:'10px',
            outline:'0'
          
          }}
            />
          <button style={{
              padding:'0.7rem 0.8rem',
             borderRadius:'10px',
             background:'#3C64B1',
             marginLeft:'-0.5rem',
             color:'#fff'
          }}> search  </button>
          </div>

          </div>


         </div>

    </div>
  )
}
