# Description
By default javascript for loops are synchronous. There can be a scenario where you will like to perform asynchronous task on a piece of data and that will require a hack to achieve with for loops.
This package adds a `asyncForEach` prototype on the Array object and makes it easier to just use async task with a for loop.

# Installation
## using npm
`npm i asyncforeach-prototype`
## using Yarn
`yarn add asyncforeach-prototype`

# Usage
Define your async function that execute for each item in the array and  
```javascript
import "asyncforeach-prototype"; // esbuilt
require('asyncforeach-prototype'); // commonjs

const assets = ["USDT", "BNB", "USDT", "ETH", "BTC", "ADA"];

async function loop(asset) {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
  console.log(asset);
}

assets.asyncForEach(loop);

```
