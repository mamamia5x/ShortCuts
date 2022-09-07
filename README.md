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

[`rannum`](#rannum) - Generates a random number.

[`remove`](#remove) - Removes part of an array.

[`indexremove`](#indexremove) - Removes part of an array by it's position.
  
[`arraysum`](#arraysum) - Returns sum of all elements in an array.

[`arrayave`](#arrayave) - Returns the average of all elements in an array.

[`reverseStr`](#reverseStr) - Reverses a string.

[`topercent`](#topercent) - Converts a decimal to a percent.

[`rgbtohex`](#rgbtohex) - Converts RGB to Hex.

[`hextorgb`](#hextorgb) - Converts Hex to RGB.

[`colorRGB`](#colorRGB) - Sets the color for the terminal (RGB).

[`colorhex`](#colorhex) - Sets the color for the terminal (Hex).

[`backRGB`](#backRGB) - Sets the background color for the terminal (RGB).

[`backhex`](#backhex) - Sets the background color for the terminal (Hex).

[`reset`](#reset) - Resets the color back to normal.

## 

#### rannum
###### Added V.0.0.1

Generates a random number
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

## 

#### arraysum
###### Added V.0.0.4

Adds all the elements in an array.
```js
short.arraysum([array]);
```

## 

#### arrayave
###### Added V.0.0.4

Finds the average of all elements in an array.
```js
short.arrayave([array]);
```

##  
 
#### reverseStr
###### Added V.0.0.6
Reverses a string.
```js
short.reverseStr([str]);
```

#### topercent
###### Added V.0.0.4

Converts a decmial to a percentage.
```js
short.topercent([number],[optional: boolean]);
```

The boolean is optional, and is used to see if the percent should be a number or a string with "%" after it. If set true, it will say "%", else it'll just be a number.

## 

#### rgbtohex
###### Added V.0.0.3

Converts RGB value to hex.
```js
short.rgbtohex(r,g,b);
```

## 

#### hextorgb
###### Added V.0.0.3

Converts Hex to RGB.
```js
short.hextorgb([hex]);
```

## 

#### colorRGB
###### Added V.0.0.3

Changes the text color for the terminal.
```js
short.colorRGB(r,g,b);
```

## 

#### colorhex
###### Added V.0.0.3

Changes the text color for the terminal.
```js
short.colorhex(hex);
```
##

#### backRGB
###### Added V.0.0.6

Changes the background color for the terminal.
```js
short.backRGB(r,g,b);
````

##

#### backhex
###### Added V.0.0.6
Changes the background color for the terminal.
```js
short.backhex(hex);
````

##

#### reset
###### Added V.0.0.3

Resets the text to the default color.
```js
short.reset;
```
