import HeroStyle from "../Styles/HeroStyle";
import hippoCat from '../assets/hippo.jpeg'
import tweet from '../assets/tweet.jpeg'
function Hero(){

    return(
        <HeroStyle>
            <div className="heroContainer">
        <img className='hippoCat' src={hippoCat}/>
        <div className="buttonsContainer">
        <button className='buy'> BUY NOW</button>
        <button className="chart">Chart</button>
        </div>
        <h1> First Hippo Cat coin on Pump.fun</h1>
        <img className='tweet' src={tweet}/>
        </div>
        
        </HeroStyle>
    )
}
export default Hero