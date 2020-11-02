const sentence = "hello there from lighthouse labs";

const typewriter = (sentence) => {
  let time = 0;
for(let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);//print char
  }, time += 50)
}
setTimeout(() => {
  process.stdout.write("\n");
}, 2000)
}
typewriter(sentence);