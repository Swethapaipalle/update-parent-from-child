import React, { useEffect } from "react";
import Child from "./Child";

function Parent() {
    const [counter, setCounter] = React.useState(0)

    const [value, setValue] = React.useState(
        "I need to be updated from my child"
    );

    let count = counter
    const onSubmit = () => {
        setCounter(count++)
    }
    useEffect(() => {
        setValue(counter)
    }, [counter])
    return (
        <>
            <h3>Update Parent State Challenge (Using Callback)</h3>
            <div className="wrapper">
                <div>Parent</div>
                <div className="box-wrapper">{value}</div>
            </div>

            <div className="wrapper">
                <Child onSubmit={onSubmit} />
            </div>
        </>
    );
}
export default Parent

