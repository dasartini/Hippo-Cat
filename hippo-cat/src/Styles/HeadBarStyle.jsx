import './resourcesStyles/HeadBarStyle.css';

function HeadBarStyle(props) {
    const { children } = props
    return (
        <div className="container"> {children}</div>

    )

}
export default HeadBarStyle