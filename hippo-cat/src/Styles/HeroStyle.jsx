
import './resourcesStyles/HeroStyle.css';

function HeroStyle(props) {
    const { children } = props
    return (
        <div className="container"> {children}</div>

    )

}
export default HeroStyle