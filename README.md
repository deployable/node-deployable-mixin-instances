# [deployable-mixin-instances](https://github.com/deployable/deployable-mixin-instances)

Node Instances Mixin for use with [MixWith]()

## Install
 
    npm install deployable-mixin-instances --save

    yarn add deployable-mixin-instances

## Usage

```javascript

const mix = require('mixwith').mix
const MixinInstances = require('deployable-mixin-instances')
class Some extends mix((class {})).with(MixinInstances) {}

let default = Some.singleton

```

## API

### `getInstance(name)`

### `newInstance(name)`

### `fetchInstance(name, args)`

### `createInstance(name, args)`

### `clearInstances()`

## License

deployable-mixin-instances is released under the MIT license.
Copyright 2016 Matt Hoyle <code at deployable.co>

https://github.com/deployable/deployable-mixin-instances

