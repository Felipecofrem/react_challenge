const Header = (props) => {
    const myStyle = {fontSize:'30px'}
    return (
        <div className="container">
            <p style={myStyle}>{props.title}</p>
        </div>
    ); 
};
export default Header