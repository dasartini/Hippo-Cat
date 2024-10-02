import HeroStyle from "../Styles/HeroStyle";
import hippoCat from '../assets/hippo.jpeg'
import tweet from '../assets/tweet.jpeg'
import moo from '../assets/moo.jpeg'
function Hero(){

    return(
        <HeroStyle>
            <div className="heroContainer">
        <img className='hippoCat' src={hippoCat}/>
        <div className="buttonsContainer">
        <a href="https://raydium.io/swap/?inputMint=sol&outputMint=8gsPhwLeVNQe6NNi42T6Q2n2q3ZPFwiaJwrk7CzaKhLC" target="_blank"><button className='buy'> BUY NOW</button></a>
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/98gsPhwLeVNQe6NNi42T6Q2n2q3ZPFwiaJwrk7CzaKhLC" target="_blank">
        <button className="chart">Chart</button></a>
        </div>
        <img className="moo" src={moo}/>
        <h1> First Hippo Cat coin on Pump.fun</h1>
        <img className='tweet' src={tweet}/>
        </div>
        
        </HeroStyle>
    )
}
export default Hero