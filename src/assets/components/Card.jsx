const Cards = (props) => {
    return (
        <div className="card" style={{width:"18rem"}}>
            <img className="card-img-top" src={props.srcImage} title={props.titleImage}/>
            <div className="card-body">
              <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
};

export default Cards;