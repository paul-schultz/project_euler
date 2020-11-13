const firstDayIndex = [
      1,  32,  60,
     91, 121, 152,
    182, 213, 244,
    274, 305, 335
]

// Used when year is divisible by 4
const leapYearIndex = [
      1,  32,  61,
     92, 122, 153,
    183, 214, 245,
    275, 306, 336
]

function sunday() {
    // Need to nest all of this in a loop that will represent the year
    var sundays = [];
    for (var i = 1; i <= 365; i++) {
        if (i % 7 == 0)
        // Every year the modulo increases by 1 
        // After leap years it increases by 2 
        // After it gets to 6 it goes back down to 0
        // current value is for 1905
            sundays.push(i - 6)
    }

    console.log(sundays)
    var firstSundays = [];
    for (var j = 0; j <= sundays.length - 1; j++) {
        if (firstDayIndex.includes(sundays[j])) {
            firstSundays.push(sundays[j])
        }
    }

    console.log(firstSundays.length)
    console.log(firstSundays)
}


// First test case: 1901-1905 has 9 first day sundays (2+1+3+1+2)
function sunday(start, end) {
    // Need to nest all of this in a loop that will represent the year
    var totalSundays = [];
    var count = 1;
    for (var yr = start; yr <= end; yr++ ) {
        if (yr % 4 == 0) {
            var sundays = [];
            for (var i = 1; i <= 366; i++) {
                if (i % 7 == 0)
                // Every year the modulo increases by 1 
                // After leap years it increases by 2 
                // After it gets to 6 it goes back down to 0
                // current value is for 1905
                    sundays.push(i - count)
            }
            var firstSundays = [];
            for (var j = 0; j <= sundays.length - 1; j++) {
                if (leapYearIndex.includes(sundays[j])) {
                    firstSundays.push(sundays[j])
                }
            }
            totalSundays.push(firstSundays)
            if (count == 5) {
                count = 0
            } else if (count == 6) {
                count = 1
            } else {
                count +=2
            }
        }
        else {
            var sundays = [];
            for (var i = 1; i <= 365; i++) {
                if (i % 7 == 0)
                // Every year the modulo increases by 1 
                // After leap years it increases by 2 
                // After it gets to 6 it goes back down to 0
                // current value is for 1905
                    sundays.push(i - count)
            }
            var firstSundays = [];
            for (var j = 0; j <= sundays.length - 1; j++) {
                if (firstDayIndex.includes(sundays[j])) {
                    firstSundays.push(sundays[j])
                }
            }
            totalSundays.push(firstSundays)
            if (count == 6) {
                count = 0
            } else {
                count += 1
            }
        }
    }
    
    console.log(totalSundays)

    var sum = 0;
    for (var i = 0; i <= totalSundays.length - 1; i++) {
        sum += totalSundays[i].length
    }
    console.log(sum)
}

sunday(1901, 2000)