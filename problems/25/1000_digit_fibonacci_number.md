## Problem 25: 1000-digit Fibonacci Number
From projecteuler.net:
>The Fibonacci sequence is defined by the recurrence relation:
![equation](https://latex.codecogs.com/gif.latex?F_{n}&space;=&space;F_{n-1}&space;&plus;&space;F_{n-2}) where ![equation](https://latex.codecogs.com/gif.latex?F_{1}&space;=&space;1) and ![equation](https://latex.codecogs.com/gif.latex?F_{2}&space;=&space;1)
Hence the first 12 terms will be:
F(1) = 1
F(2) = 1
F(3) = 2
F(4) = 3
F(5) = 5
F(6) = 8
F(7) = 13
F(8) = 21
F(9) = 34
F(10) = 55
F(11) = 89
F(12) = 144
The 12th term, F(12), is the first term to contain three digits.
What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

As I continue to progress in the Project Euler series I am really starting to witness how efficiency can make or break your functions, especially when working on such a large scale, finding the one millionth value of so and so sequence and what not. I find myself in Google rabbit holes learning about concepts like memoization, time complexity, recursion. I may take a little from the series now that I'm halfway through my initial goal of fifty to school myself on some of these concepts to build more efficient solutions moving forward. Regardless I am pretty proud of myself for making it this far, this has definitely done more for teaching me how to solve and think through programming problems than any YT tutorial.  

Now for the 1000 digit Fibonacci value, I had already had a one Fibonacci problem right out of the gate so I was familiar with how the algorithm worked. I learned pretty fast that recursive algorithms can get pretty slow when you get up into the n=1000 range so instead I just used some light memoization to save the Fibonacci values to an array. My next mistake occurred when I decided to create another array that would hold the length of every fibonacci value and return the function when the length was equal to the `n` value I wanted. This made things super slow again, so instead of saving the length of the number to an array and saving every single length value I turned this into a variable that got reset back to zero at the beginning of each new iteration. This way I still had the length value every time but I wont be saving 5000 extra values. This was a pretty short function compared to other recent ones so here is the final solution:
```
function thousand_fibonacci(n) {
    var arr = [] 
    for (var i = 1; i <= 10000 ; i++) {
        var fibLength = 0
        if (i == 1 || i == 2) {
            arr.push(1)
            fibLength = parseInt(arr[i-1].toString().length)
        } else {
            arr.push(BigInt(arr[i - 2]) + BigInt(arr[i - 3]))
            fibLength = parseInt(arr[i-1].toString().length)
        }
        if (fibLength == n) {
            return i;
        }
    }
} 
```
And plugging in `1000` as the `n` value returns `4872`, which is the index of the first Fibonacci value to have 1000 digits. This is the number in case anyone out there was wondering.
```
107006626638275893676498058445739688508368389663215166501323520337531452060
469404062188914758248979265780469488817759195748433646667256995951299603046
126274809248218614406943305123477444275027378175308757939166619214925918675
955396642283714894311307469950343954700198543260972306729019287052644724372
611771582182554849112052501320147861296593138179223555965745203950613755146
783754322911960212993404826070617539770684706820289548690266618543512452190
036948064135744747091170761976694569107009802439343961747410373691250323136
553216477369702316775505159517351846057995491941096777837322966579658164651
390348815425631018422419025984608800011018625555024549393711365165703944762
958471454852342595042858242530608354443542821261100899286379504800689433030
977321783486454311320576565986845628861680871869383529735064398629764066000
072356291790520705116407761481249188583094594056668833910935094445657635766
615161931775379289166158132715961687748798382182049252034847387438473677193
4512787029218636250627816
```
That's one BigInt if I've ever seen one.