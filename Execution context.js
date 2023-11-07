const names = ['anisha', 'aru', 'achu', 'athi']

function capital(x) {
    return x.charAt(0).toUpperCase()+x.slice(1)
}

const output = names.map(capital)
console.log(output);