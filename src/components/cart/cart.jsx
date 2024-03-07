import { useRestrounentMenu } from "../../hooks/useRestrounentMenu";

export const Cart = () => {

    const { resInfo } = useRestrounentMenu();

    return (
        <div>
            <h1>Cart</h1>
            <h3>The things are shown, where you going buy soon</h3>
            <h1>{resInfo}</h1>
        </div>
    )
};
