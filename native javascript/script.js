const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress"),
    span = document.querySelectorAll(".range-input span");
let priceGap = 10;
let minVal = parseInt(rangeInput[0].value),
    maxVal = parseInt(rangeInput[1].value);

// set progress width
range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";

// set position of price count above
span[0].style.left = ((minVal / rangeInput[0].max) * 100) + "%";
span[1].style.left = ((maxVal / rangeInput[0].max) * 100) + "%";

// set count of min price above
span[0].textContent = minVal

// set count of max price above
span[1].textContent = maxVal

priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);
        if ((maxPrice - minPrice >= priceGap) && maxPrice <= 100) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                span[0].textContent = minPrice




                range.style.left = ((minPrice / 100) * 100) + "%";


                // set position of price count above
                span[0].style.left = ((minPrice / rangeInput[0].max) * 100) + "%";

            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                console.log('number was changed')


                span[1].textContent = maxPrice
                span[1].style.left = ((maxPrice / rangeInput[0].max) * 100) + "%";

            }
        }
    });
});

// alert('hello')

rangeInput.forEach(input => {
    input.addEventListener("input", e => {


        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < priceGap) {

            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            span[0].textContent = minVal
            span[1].textContent = maxVal



            // set progress width
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";

            // set position of price count above
            span[0].style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            span[1].style.left = ((maxVal / rangeInput[0].max) * 100) + "%";
        }
    });
});