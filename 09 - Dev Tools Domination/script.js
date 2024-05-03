const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
 console.log('hello');

// Interpolated
console.log('hello I am a %s string', 'foo');

// Styled
console.log('%c i am a great text', 'font-size:50px; background:red;');

// warning!
console.warn('this is warning!');

// Error :|
console.error("this is error!");

// Info
console.info('this is info');

// Testing
console.assert(1 === 1, 'that is wrong!'); //try changing to 2 === 1 to make the testing alert appear

// clearing
//console.clear(); //clearing the entire console if argument leave blank

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
    console.log(`this is ${dog.name}`);
    console.log (`${dog.name} is ${dog.age} years old`);
    console.log (`${dog.name} is ${dog.age * 7} dogs years old`);
  console.groupEnd(`${dog.name}`);
})

// counting
console.count('count'); //show how many time this word is used
console.count('count');
console.count('subcount');
console.count('count'); 
console.count('subcount');

// timing
console.time('fetching data');    ///see how long something takes

fetch('https://github.com/AfricanCLAM')
  .then(data => data,json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log('data');
  });

  console.table(dogs);
