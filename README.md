# Shortcuts
Shortcuts is a simple to use Javascript package that allows you to do simple commands in a much easier way. 

## Install
You can install with
```bash
npm install "@testgrandma/shortcuts"
```
or
```js
const short = require('@testgrandma/shortcuts');
```
## Commands

[`rannum`](#rannum) - Generates a random number

[`remove`](#remove) - Removes part of an array

[`indexremove`](#indexremove) - Removes part of an array by it's position.

## 
#### rannum

###### Added V.0.0.1

Generates a random number.
```js
short.rannum([min], [max]);
```
Min is the lowest number and max is the highest. This will generate a number inbetween the values, excluding decimal points.

## 
#### remove
###### Added V.0.0.1
Removes part of an array, given its value.
```js
short.remove([array], [value]);
```
Array is the name of the array, value is the part you want to remove.

## 
#### indexremove
###### Added V.0.0.2
Removes part of an array, given the index of it.
```js
short.indexremove([array], [index]);
```
Array is the name of the array, index is the index of the array.
