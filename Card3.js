import react from "react";
import { useContext } from "react";
import { CounterContext } from "../Helper/context";
const Card3 = () => {
    const { count} = useContext(CounterContext);
    return <p>count:{count}</p>;
};
export default Card3;