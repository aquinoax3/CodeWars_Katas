// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Worked Example
// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.
// Examples
// ("--++--", "++--++") ➞ "000000"

// ("-+-+-+", "-+-+-+") ➞ "-+-+-+"

// ("-++-", "-+-+") ➞ "-+00"
// Notes
// The two strings will be the same length.


// Cleaner Code
function neutralise(s1, s2) {
    // Here be dragons!
    return s1.split("").map((char, idx) => char === s2[idx] ? char : "0").join("")
}


//Brute Force
function neutralise(s1, s2) {
    // Here be dragons!

    return s1.split("").map((char, idx) => {
        if (char === "+" && s2[idx] === "+") {
            return "+"
        } else if (char === "-" && s2[idx] === "-") {
            return "-"
        } else if (char === "+" && s2[idx] === "-" || char === "-" && s2[idx] === "+") {
            return "0"
        }
    }).join("")
}