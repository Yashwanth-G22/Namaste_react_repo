export const RestaurantCard = (props) => {
    const { image, resName, foodName, rating, delivery } = props;
    return(
        <div className="card">
            <img  src={image} alt="" />
            <h3>{resName}</h3>
            <h4>{foodName}</h4>
            <h4>{rating} star</h4>
            <h4>{delivery} mins</h4>
        </div>
    )
}