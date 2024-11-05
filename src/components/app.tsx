import { useState, useEffect } from "react";
import Header from "./header";

const App = ({initialData}) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      
    }, []);

    return (
        <div className="container">
            <Header message={"Header"} />
            {/* <button onClick={() => {
                setCounter(counter + 1);
            }}>{counter}</button> */}
        </div>
    );
}

export default App;