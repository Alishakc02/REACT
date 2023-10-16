import Card from "./Card.js" 
import { useEffect, useState } from "react";
function App2(){
    const [age, setAge] = useState(0);
    useEffect(() => {
        setAge(20);
    }, []);
    return (
        <Card age={age}/>
    );
}
export default App2;