const AvailabilityArea = ({ storedBoxes }) => {
    const smallBoxes = storedBoxes.filter(box => box.size === "small");
    const mediumBoxes = storedBoxes.filter(box => box.size === "medium");
    const largeBoxes = storedBoxes.filter(box => box.size === "large");
    
    const smallBoxStr = smallBoxes.map(() => "|■").join("").padEnd(101, " |");
    const mediumBoxStr = mediumBoxes.map(() => "|■").join("").padEnd(101, "   |");
    const largeBoxStr = largeBoxes.map(() => "|■").join("").padEnd(101, "     |");

    return (
        <div className="">
            <pre>/----------------------------\</pre>
            <pre>{smallBoxStr.slice(0, 30)}</pre>
            <pre>|                            |</pre>
            <pre>|                           -|</pre>
            <pre>|  Small                     |</pre>
            <pre>|          {smallBoxStr.slice(31, 50)}</pre>
            <pre>|  Boxes --------------------|</pre>
            <pre>|          {smallBoxStr.slice(51, 70)}</pre>
            <pre>|  Area                      |</pre>
            <pre>|                           -|</pre>
            <pre>|                            |</pre>
            <pre>{smallBoxStr.slice(71, 101)}</pre>
            <pre>|----------------------------|</pre>
            <pre>{mediumBoxStr.slice(0, 30)}</pre>
            <pre>|                            |</pre>
            <pre>|     Medium Boxes Area     -|</pre>
            <pre>|                            |</pre>
            <pre>{mediumBoxStr.slice(31, 63)}</pre>
            <pre>|-----------------|------------------|</pre>
            <pre>{largeBoxStr.slice(0, 40)}</pre>
            <pre>|                                    |</pre>
            <pre>|         Large Boxes Area          -|</pre>
            <pre>|                                    |</pre>
            <pre>{largeBoxStr.slice(41, 80)}</pre>
            <pre>\-------------------------------------/</pre>

        </div>
    )
}

export default AvailabilityArea;