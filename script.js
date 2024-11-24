let password = [];
password.push("okfetj45", "33uij4", "jsjs2js3js");
console.log(password);

password.forEach (pasw => {
    console.log(pasw.toLocaleLowerCase());
})

password.forEach(pasw => {
    if (pasw.length >= 8 ) {
        console.log(`${pasw} - Strong password`);
    } else {
        console.log(`${pasw} - Weak password`);
    }
})

for (let i = 0; i < password.length; i++) {
    let count = 0;
    for (let simb of password[i]) {
        count++
    }
    console.log(`${password[i]} - ${count} simbols`);
}

password.shift();
console.log(password);

password.unshift("javascript555");
console.log(password);