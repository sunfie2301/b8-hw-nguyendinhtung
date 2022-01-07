let validate = false
while (validate === false) {
    const number = prompt("Enter a positive integer: ")
    if (number % 1 != 0) {
        alert("This is not an integer")
    }
    else if (number < 0) {
        alert("This number is not positive")
    }
    else {
        if (number == 1 || number < 1) {
            alert("This number is not Prime. Prime number need to be greater than 1")
            break
        }
        else {
            let d = 0;
            for (let i = 1; i <= number ; i++) {
                if (number % i == 0) {
                    d++
                }
            }
            if (d == 2) {
                alert ("This is a Prime number")
                break
            }
            else {
                alert("This number is not a Prime number")
                break
            }
        }
    }
}