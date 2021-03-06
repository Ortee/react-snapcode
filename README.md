# react-snapcode ([npm](https://www.npmjs.com/package/react-snapcode))

[![npm version](https://badge.fury.io/js/react-snapcode.svg)](https://badge.fury.io/js/react-snapcode)
![](https://img.shields.io/npm/dt/react-snapcode.svg)

> React Snapcode Component

![](./images/react-snapcode.gif)

## Install

```
$ npm install react-snapcode
```
## Usage (in code)

```javascript
import Snapcode from 'react-snapcode';
```


```javascript
<Snapcode username="TestUsername"/>
```

## Examples

```javascript
import Snapcode from 'react-snapcode';

<Snapcode
    username="TestSnapchatUsername"
    width="500px"
    height="500px"
    dotsColor="#FF0000"
    backgroundColor="#0000FF"
    ghostColor="#008000"
/>
```
## Features
* Username props is required.
* Width, height, backgroundColor, ghostColor, dotsColor are optional.
* Height and width default is 320x320.
