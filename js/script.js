// Scrivi un programma che stampi i numeri da 1
// a 100,
// ma per i multipli di 3 stampi “Fizz” al
// posto del numero e per i multipli di 5 stampi
// Buzz.
// Per i numeri che sono sia multipli di 3
// che di 5 stampi FizzBuzz.
// Stampiamo come sempre prima in console e poi su html


for (var i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + ' FizzBuzz');
    document.getElementById('numeri').innerHTML += '<li>' + i + 'FizzBuzz' + '</li>';
  }
  else if (i % 3 == 0) {
    console.log(i + ' Fizz');
    document.getElementById('numeri').innerHTML += '<li>' + i + 'Fizz' + '</li>';
  }
  else if (i % 5 == 0) {
    console.log(i + ' Buzz');
    document.getElementById('numeri').innerHTML += '<li>' + i + 'Buzz' + '</li>';
  } else {
    console.log(i);
    document.getElementById('numeri').innerHTML += '<li>' + i + '</li>';
  }
}
