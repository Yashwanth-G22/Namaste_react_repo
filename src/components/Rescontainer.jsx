import { WithPromotedResCard } from "../utils/promoted-higher-compoenent";
import { RestaurantCard } from "./Rescard"

const WithPromotedRestaurantCard =  WithPromotedResCard(RestaurantCard);

export const ResMainContainer = (props) => {
    const { items } = props;
    return items.map((resData) => {
        return resData.promoted ? <WithPromotedRestaurantCard resData={resData} /> : <RestaurantCard resData={resData} />
    });
}

