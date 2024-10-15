import HeadBarStyle from "../Styles/HeadBarStyle";
import dextools from '../assets/dextools.svg'
import dexcreener from '../assets/dexscreener.svg'
import pump from '../assets/pump.webp'
function Partners(){

    return(
        <HeadBarStyle>
            <br></br>
            <br></br>
        <div className="cardStyle">
        <h1 className="partners">Partners</h1>
       
                <a href="https://pump.fun/8gsPhwLeVNQe6NNi42T6Q2n2q3ZPFwiaJwrk7CzaKhLC" target="_blank"><img className='icons' src={pump} /></a>
                <a href="https://www.dextools.io/app/en/solana/pair-explorer/98gsPhwLeVNQe6NNi42T6Q2n2q3ZPFwiaJwrk7CzaKhLC" target="_blank"> <img className='icons' src={dextools} /></a>
                <a href="https://dexscreener.com/solana/9vay8edxwif98uzctkbqwtduqnpxw891ppkjqbsnr4cs" target="_blank"> <img className='icons' src={dexcreener} /></a>
              
           
        </div>
        </HeadBarStyle>
    )
}

export default Partners