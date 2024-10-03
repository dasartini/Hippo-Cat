import HeadBarStyle from "../Styles/HeadBarStyle"
import twitter from '../assets/twitter.svg'
import telegram from '../assets/telegram.svg'
function Headbar() {

    return (
        <HeadBarStyle>
            <div className="navBar">
                
                <h1>$HC</h1>
                <h2>Hippo Cat</h2>
                <a href="https://x.com/hippocats" target="_blank"> <img className='icons' src={twitter} /></a>
                <a href="https://t.me/hippocatcto" target="_blank"><img className='icons' src={telegram} /></a>
                <a href="https://raydium.io/swap/?inputMint=sol&outputMint=8gsPhwLeVNQe6NNi42T6Q2n2q3ZPFwiaJwrk7CzaKhLC" target="_blank"> <button className="button">BUY NOW</button>
            </a>
           
            
            </div>
        </HeadBarStyle>
    )
}

export default Headbar