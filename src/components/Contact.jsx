import { useContext } from "react";
import { UserContext } from "../hooks/useContext";

export const Contact = () => {

    const data = useContext(UserContext);

    return (
        <div>
            <h4>This Contact Page</h4>
            <h4>{data}</h4>
        </div>
    )
};
