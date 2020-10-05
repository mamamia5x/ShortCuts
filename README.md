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

[`rgbtohex`](#rgbtohex) - Converts RGB to Hex.

[`hextorgb`](#hextorgb) - Converts Hex to RGB.

[`colorRGB`](#colorRGB) - Sets the color for the terminal (RGB).

[`colorhex`](#colorhex) - Sets the color for the terminal (Hex).

[`reset`](#reset) - Resets the color back to normal.  
  

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

## 

#### rbgtohex

###### Added V.0.0.3

Converts RGB value to hex.

```js
short.rgbtohex(r,g,b);
```

##

#### hextorbg

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
short.colorRGB(hex);
```

## 

#### reset

###### Added V.0.0.3
Resets the text to the default color.
```js
short.reset;
```
