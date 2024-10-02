import HeadBarStyle from "../Styles/HeadBarStyle"
import twitter from '../assets/twitter.svg'
import telegram from '../assets/telegram.svg'
function Headbar(){

    return(
<HeadBarStyle>
        <div className="cardStyle">
            <h1>$HC</h1>
            <h2>Hippo Cat</h2>
            <img className='icons' src={twitter}/>
            <img className='icons' src={telegram}/>
        </div>
        </HeadBarStyle>
    )
}

export default Headbar