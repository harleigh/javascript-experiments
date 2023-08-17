


function* infinite() {
    let index = 0;
    let msg = "Hello World"

    while (index<msg.length) {
        yield msg[index]
        index++;
    }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
