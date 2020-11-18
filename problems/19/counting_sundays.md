## Problem 19: Counting Sundays
From projecteuler.net:
>You are given the following information, but you may prefer to do some research for yourself: 
1 Jan 1900 was a Monday. There are thirty days in September, April, June, and November. All the rest have thirty-one, save for February alone, which has twenty-eight, rain or shine. And on leap years twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400. How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

For Counting Sundays I started out by imagining a 365 day year as its own array. Then I created two indexes, one that contained what days the first of the month falls on in a regular year named `firstDayIndex` and what days the first of the month falls on in a leap year named `leapYearIndex`. Then I reasoned through how I would determine if the day in this index is a Sunday or not. In the clue it states that the 1st of January in 1900 is a Monday. This means that there is a Sunday on every day that is a multiple of 7, so if any of the values in the `firstDayIndex` are divisible by 7, given it is not a leap year, then that means that there is a Sunday on the first of the month in that year. 

So now that I can determine how to figure out many first day of the months Sundays are in one year, time to figure out how to determine how many are in a century. Since there is a Sunday on every 7th day in 1900, and it is not a leap year, the next year there will be a Sunday every 6 days, since the day of the week that a day of the month occurs on shifts every year. This will continue going down by 1 until 1905, where it will shift down 2 days since it is the year after a leap year. After the day of the week has shifted 7 days over 6 years the calendar goes back to having a sunday every 7 days. So the challenge in translating all of this logic to code is getting the special cases where there is a leap year with an extra day in February, and the days of the week shift over 2 days in the following year to happen at the write times over the course of a century.  The final code for the function looks like this: 
```
const firstDayIndex = [
    1,  32,  60,
   91, 121, 152,
  182, 213, 244,
  274, 305, 335
]

const leapYearIndex = [
    1,  32,  61,
   92, 122, 153,
  183, 214, 245,
  275, 306, 336
]

function sunday(start, end) {
    var totalSundays = [];
    var count = 1;
    for (var yr = start; yr <= end; yr++ ) {

        if (yr % 4 == 0) {

            var sundays = [];
            for (var i = 1; i <= 366; i++) {
                if (i % 7 == 0)
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

    var sum = 0;
    for (var i = 0; i <= totalSundays.length - 1; i++) {
        sum += totalSundays[i].length
    }

    return sum
}
```

It is a pretty lengthy function and could definitely be refactored. Currently it is in violation of the DRY principle, because I have the same block of code written out for the regular year and leap year, with their only difference being the number of days in the year and the number that the `count` variable gets incremented by after the year is over. However the code is functional, as it successfully calculated how many Sundays occur on the first of the month from the beginning of 1901 to the end of 2000. Which is 171, in case you were wondering. Fun facts.