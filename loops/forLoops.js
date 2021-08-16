
//basic for loop...
for (let i = 0; i < 5; i++) {
      console.log('in loop:', i);
};

console.log('loop is finished');

//Cycle through an array using for loop..(iteration)
const names = ['Teo', 'Mun', 'Bekir', "Alena"];

for (let i = 0; i < names.length; i++) {
      //console.log(names[i]);
      let html = `<div>${names[i]}</div>`
      console.log(html)
}