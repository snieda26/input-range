import React, { useEffect, useRef, useState } from 'react'
import './RangeInput.css'

function RangeInput() {

    const [minNumber, setMinNumer] = useState(30)
    const [maxNumber, setMaxNumer] = useState(60)

    const upperPrice = useRef(null)
    const rangeInputParent = useRef(null)
    const range = useRef(null)

    const maxFixPrice = 100
    let priceGap = 10;

    const setPriceMin = (e) => {
        if (e.target.value < maxNumber - 10) {
            setMinNumer(e.target.value)
        }

    }

    const setPriceMax = (e) => {

        setMaxNumer(e.target.value)


    }



    const reducePrice = (e) => {

        if (e.target.value < maxNumber - 10) {
            setMinNumer(e.target.value)
        }


        range.current.style.left = ((minNumber / maxFixPrice) * 100) + "%";


        // set position of price count above
        console.log(((minNumber / e.target.max) * 100) + "%")
        upperPrice.current.children[0].style.left = ((minNumber / e.target.max) * 100) + "%";


    }

    const increasePrice = (e) => {

        if (e.target.value > minNumber + 10) {
            setMaxNumer(() => e.target.value)

        }
        range.current.style.right = 100 - (maxNumber / rangeInputParent.current.children[2].max) * 100 + "%";

        // span[1].textContent = maxPrice
        upperPrice.current.children[1].style.left = ((maxNumber / rangeInputParent.current.children[1].max) * 100) + "%";
    }

    useEffect(() => {
        range.current.style.left = ((minNumber / rangeInputParent.current.children[1].max) * 100) + "%";
        range.current.style.right = 100 - (maxNumber / rangeInputParent.current.children[2].max) * 100 + "%";

        upperPrice.current.children[0].style.left = (((minNumber / rangeInputParent.current.children[1].max) * 100)) + "%";
        upperPrice.current.children[1].style.left = (((maxNumber / rangeInputParent.current.children[1].max) * 100)) + "%";
    }, [])

    useEffect(() => {
        range.current.style.left = ((minNumber / maxFixPrice) * 100) + "%";
        range.current.style.right = 100 - (maxNumber / maxFixPrice) * 100 + "%";
    })

    return (
        <>
            <div className="wrapper">
                <div className="slider">
                    <div className="progress" ref={range}></div>
                </div>
                <div className="range-input" ref={rangeInputParent}>
                    <div className="upperPrices" ref={upperPrice}>
                        <span>
                            {minNumber}
                        </span>
                        <span>
                            {maxNumber}
                        </span>
                    </div>
                    <input type="range" onChange={reducePrice} className="range-min" min="0" max="100" value={minNumber} step="1" />
                    <input type="range" onChange={increasePrice} className="range-max" min="0" max="100" value={maxNumber} step="1" />
                </div>
                <div className="price-input">
                    <div className="field">
                        <input type="number" onChange={setPriceMin} className="input-min" value={minNumber} />
                    </div>
                    <div className="field">
                        <input type="number" onChange={setPriceMax} className="input-max" value={maxNumber} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default RangeInput