import React from "react";

export const useLazyLoading = async (loader) => {
    return (props) => {
        const component = React.useMemo(() => React.lazy(loader), []);
        return {default: React.createElement(component, props)};
    };
};
