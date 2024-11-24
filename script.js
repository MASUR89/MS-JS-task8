let password = [];
password.push("OkFetJ45", "33uIj4", "Jsjs2jS3js");
console.log(password);

for (let i = 0; i < password.length; i++) {
    console.log(password[i].toLowerCase());
}

for (let i = 0; i < password.length; i++) {
    if (password[i].length >= 8 ) {
        console.log(`${password[i]} - Strong password`);
    } else {
        console.log(`${password[i]} - Weak password`);
    }
}

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