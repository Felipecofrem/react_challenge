const Footer = (props) => {
    const myStyle = {fontSize:'20px'}
    return (
        <div className="container">
            <p style={myStyle}>{props.title}</p>
            <p>{props.webDescription}</p>
        </div>
    ); 
};
export default Footer