const {Mixin} = require('mixwith')

module.exports = Mixin((superclass) => class MixinInstance extends superclass {

  // Create or return the 'default' instance
  static get singleton () {
    if ( ! this._instances ) this._instances = {}
    if ( ! this._instances.default ) this._instances.default = new this()
    return this._instances.default
  }

  // Create a new instance with no checks
  static newInstance ( name, ...args) {
    if ( ! this._instances ) this._instances = {}
    return this._instances[name] = new this(...args)
  }

  // Create an instance if it doesn't exist
  static createInstance ( name, ...args ) {
    if ( this._instances && this._instances[name] ) throw new Error(`Instance already exists [${name}]`)
    return this.newInstance( name, ...args )
  }

  // Return an instance. Can be undefined
  static getInstance ( name ) {
    if ( ! this._instances ) this._instances = {}
    return this._instances[name]
  }

  // Get existing or create instance
  static fetchInstance ( name, ...args ) {
    let instance = this.getInstance(name)
    if ( ! instance ) instance = this.createInstance( ...args )
    return instance
  }

  // Clear any instances
  static clearInstances () {
    this._instances = undefined
  }

})
