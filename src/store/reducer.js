const count = 0;
export default function reducer (state, action) {
    const {type, payload} = action;

    switch(type){
        case "Increment":
            return count +1;
        case "Decrement":
            return count - 1;
        default:
            return count;
    }
}
