import './card.styles.css';

const Card = (props) => {
    let {name , id , email} = props.monster;
     return(
        <div className="card">
            <img alt={`monster ${name}`} 
            src={`https://robohash.org/${id}?set=3&size180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;