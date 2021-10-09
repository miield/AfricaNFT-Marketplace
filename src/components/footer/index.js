import { Container, Row, Col } from 'react-grid-system';

function Footer() {
  return (
    <footer>
        <div className='w-100 text-center p-3' style={{
                    color:'#C3CBCD',  
                    background:'#373F41'
                  }}>  


                  <small  className='fw-bolder' style={{opacity:'0.6'}}>

                  &copy; AfricaNfts.com. All right reserved

                  </small>

         </div>
    </footer>
  )
}

export default Footer
