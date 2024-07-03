let termo1 = 1;
let termo2 = 1;
console.log(termo1);
console.log(termo2);
let iter = 20;
let termo;
for (i = 3; i <= iter; i++) {
  termo = termo1 + termo2;
  termo1 = termo2;
  termo2 = termo;
  console.log(termo);
}
