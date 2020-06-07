
var test_date = "101";

var date_tag = document.querySelector("#Date")
var fajr_tag = document.querySelector("#Fajr")
var sunrise_tag = document.querySelector("#Sunrise")
var zawal_tag = document.querySelector("#Zawal")
var asr_s_tag = document.querySelector("#Asr_s")
var asr_h_tag = document.querySelector("#Asr_h")
var maghrib_tag = document.querySelector("#Maghrib")
var esha_tag = document.querySelector("#Esha")

console.log(date_tag.textContent);


// get today's date and turn it into a string

var today = new Date();
var today_month = (today.getMonth()+1)
var today_month_str = today_month.toString()
var today_date = (today.getDate())
var today_date_str = today_date.toString()

if (today_date < 10) { today_date_str = "0" + today_date_str}

var today_str = today_month_str + today_date_str;
console.log(today_str)

var current = today// set current;
// console.log(current);


// end

test_date = today_str;

//





d3.csv("times.csv").then(function(blah) {
	
	var index_num = blah.findIndex( ({ Date }) => Date === test_date  );
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
	//  see example under examples. 
	// also see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
	// console.log(index_num);
	
	date_tag.innerHTML = "Date: " + blah[index_num].Date
	fajr_tag.innerHTML = "Fajr: " + blah[index_num].Fajr
	sunrise_tag.innerHTML = "Sunrise: " + blah[index_num].Sunrise
	zawal_tag.innerHTML = "Zawal: " + blah[index_num].Zawal
	asr_s_tag.innerHTML = "Asr_s: " + blah[index_num].Asr_s
	asr_h_tag.innerHTML = "Asr_h: " + blah[index_num].Asr_h
	maghrib_tag.innerHTML = "Maghrib: " + blah[index_num].Maghrib
	esha_tag.innerHTML = "Esha: " + blah[index_num].Esha
});



// now starting the event stuff


var button = document.querySelector("#Previous")
button.addEventListener("click",function(){
	// console.log("someone clicked the button")
	// now figure out yesterday's date
	var yester = current;
	yester.setDate(yester.getDate() - 1); 
			// no idea why the above code works, but got it from here: 
		// https://stackoverflow.com/questions/5511323/calculate-the-date-yesterday-in-javascript
	//console.log(yester)
	current = yester; //(setting the current to yesterday)
	// ok so now we have yetserday's date. 



	// /now convert yesterday's date into a string
	var prev_month = (yester.getMonth()+1)
	var prev_month_str = prev_month.toString()
	var prev_date = (yester.getDate())
	var prev_date_str = prev_date.toString()
	if (prev_date < 10) { prev_date_str = "0" + prev_date_str}
	var prev_str = prev_month_str + prev_date_str;
	//console.log(prev_str)
	// /end converting into a string. 

	test_date = prev_str;


	// now looking up previous salaah times
	d3.csv("times.csv").then(function(blah) {
		var index_num = blah.findIndex( ({ Date }) => Date === test_date  );
		date_tag.innerHTML = "Date: " + blah[index_num].Date
		fajr_tag.innerHTML = "Fajr: " + blah[index_num].Fajr
		sunrise_tag.innerHTML = "Sunrise: " + blah[index_num].Sunrise
		zawal_tag.innerHTML = "Zawal: " + blah[index_num].Zawal
		asr_s_tag.innerHTML = "Asr_s: " + blah[index_num].Asr_s
		asr_h_tag.innerHTML = "Asr_h: " + blah[index_num].Asr_h
		maghrib_tag.innerHTML = "Maghrib: " + blah[index_num].Maghrib
		esha_tag.innerHTML = "Esha: " + blah[index_num].Esha
	});
	// end previous salaah times

})




var button = document.querySelector("#Next")
button.addEventListener("click",function(){
	// console.log("someone clicked the button")
	// now figure out yesterday's date
	var nex = current;
	nex.setDate(nex.getDate() + 1); 
			// no idea why the above code works, but got it from here: 
		// https://stackoverflow.com/questions/5511323/calculate-the-date-yesterday-in-javascript
	//console.log(yester)
	current = nex; //(setting the current to yesterday)
	// ok so now we have yetserday's date. 



	// /now convert yesterday's date into a string
	var next_month = (nex.getMonth()+1)
	var next_month_str = next_month.toString()
	var next_date = (nex.getDate())
	var next_date_str = next_date.toString()
	if (next_date < 10) { next_date_str = "0" + next_date_str}
	var next_str = next_month_str + next_date_str;
	//console.log(prev_str)
	// /end converting into a string. 

	test_date = next_str;


	// now looking up previous salaah times
	d3.csv("times.csv").then(function(blah) {
		var index_num = blah.findIndex( ({ Date }) => Date === test_date  );
		date_tag.innerHTML = "Date: " + blah[index_num].Date
		fajr_tag.innerHTML = "Fajr: " + blah[index_num].Fajr
		sunrise_tag.innerHTML = "Sunrise: " + blah[index_num].Sunrise
		zawal_tag.innerHTML = "Zawal: " + blah[index_num].Zawal
		asr_s_tag.innerHTML = "Asr_s: " + blah[index_num].Asr_s
		asr_h_tag.innerHTML = "Asr_h: " + blah[index_num].Asr_h
		maghrib_tag.innerHTML = "Maghrib: " + blah[index_num].Maghrib
		esha_tag.innerHTML = "Esha: " + blah[index_num].Esha
	});
	// end previous salaah times

})
