var price = document.querySelector(".actualPrice");
var slider = document.querySelector(".rangeSlider");
var toggle = document.querySelector(".switch");
var monthly = true;
var views = document.querySelector(".pageViews");
var time = document.querySelector(".timeFrame");
// console.log(monthly);
price.innerHTML = "$" + slider.value;
time.innerHTML = " /month";
views.innerHTML = "10K pageviews";
let sliderValue = 0;



slider.addEventListener("input",function(){
    switch (slider.value){
        case '1':
            sliderValue = 8;
            console.log(slider.value);
        break
        case '2':
            sliderValue = 12;
        break
        case '3':
            sliderValue = 16;
        break
        case '4':
            sliderValue = 24;
        break
        case '5':
            sliderValue = 36;
        break
    }

    if (monthly)
    {
        price.innerHTML = "$" + sliderValue;
    }
    else{
        price.innerHTML = "$" + ((sliderValue) * 12) * 0.75
    }

    switch (sliderValue){
        case "8":
            views.innerHTML = "10K pageviews";
        break;
        case "12":
            views.innerHTML = "50K pageviews";
        break;
        case "16":
            views.innerHTML = "100K pageviews";
        break;
        case "24":
            views.innerHTML = "500K pageviews";
        break;
        case "36":
            views.innerHTML = "1M pageviews";
        break;
    }   
})

toggle.addEventListener("change", function(){
    if (monthly === true)
    {
        monthly = false;
        time.innerHTML = " /year";
        price.innerHTML = "$" + ((sliderValue) * 12) * 0.75
    }
    else
    {
        monthly = true;
        time.innerHTML = " /month";
        price.innerHTML = "$" + sliderValue
    }
    // console.log(monthly);
})


// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month