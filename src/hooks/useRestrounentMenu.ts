import { useState, useEffect } from "react";

export const useRestrounentMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        setResInfo('yashwanth')
    }, [])

    return { resInfo };
}
