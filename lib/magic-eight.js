'use strict';

// user may enter name below, between quotation marks
var userName = 'Uncle Steve';

userName ? console.log('\nHello, ' + userName) : console.log('Hello!');

// user may enter question below, between quotation marks
var userQuestion = 'Will I soon become a priest and vow eternal celibacy?';

// generate random number between 0 and 7
var randomNumber = Math.floor(Math.random() * 7);

var eightBall = '';

// generate cases based on randomNumber output
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'The prophecy is true';
    break;
  case 3:
    eightBall = 'It is known';
    break;
  case 4:
    eightBall = 'Don\'t count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Reply hazy try again';
    break;
}

console.log('\n' + userName + ' asked the following question: ' + userQuestion);

console.log('\nThe magic eight ball answered: ' + eightBall + '.');