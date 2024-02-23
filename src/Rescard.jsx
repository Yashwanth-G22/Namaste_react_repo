export const RestaurantCard = (props) => {
    const {items} = props;
    const renderFD =() => items.map(({resName,foodName, rating, delivery, image}) => {
        return (
        <div className="card" key={resName}>
        <img  src={image} alt="" />
        <h3>{resName}</h3>
        <h4>{foodName}</h4>
        <h4>{rating} star</h4>
        <h4>{delivery} mins</h4>
    </div>)
})
    return  (renderFD());
    
}