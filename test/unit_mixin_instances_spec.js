const debug = require('debug')('dply:test:unit:mixin_instances')
const MixinInstances = require('../lib/mixin_instances')
const mix = require('mixwith').mix


describe('Unit::MixinInstances', function () {

  describe('Instances Mixin', function(){

    class InstancesTestMix {}
    class InstancesTest extends mix(InstancesTestMix).with(MixinInstances) {}
    let instances_test = null

    beforeEach(function(){
      InstancesTest.clearInstances()
      instances_test = new InstancesTest()
    })

    it('should create an instance', function(){
      expect( instances_test ).to.be.a.instanceOf( InstancesTest )
    })

    it('should create a default singleton instance', function(){
      expect( InstancesTest.singleton ).to.be.a.instanceOf( InstancesTest )
    })

    it('should create a new instance', function(){
      expect( InstancesTest.createInstance('other') ).to.be.a.instanceOf( InstancesTest )
    })

    it('should get an instance', function(){
      InstancesTest.newInstance('other')
      expect( InstancesTest.getInstance('other') ).to.be.a.instanceOf( InstancesTest )
    })

    it('should get an instance', function(){
      InstancesTest.createInstance('other')
      expect( InstancesTest.getInstance('other') ).to.be.a.instanceOf( InstancesTest )
    })
    
    it('should fail to create an existing instance', function(){
      InstancesTest.newInstance('other')
      fn = () => InstancesTest.createInstance('other')
      expect( fn ).to.throw( /Instance already exists/ )
    })

    it('should replace an existing instance with new', function(){
      InstancesTest.createInstance('other')
      InstancesTest.newInstance('other')
      expect( InstancesTest.getInstance('other') ).to.be.a.instanceOf( InstancesTest )
    })

    it('should replace the default an instance', function(){
      expect( InstancesTest.createInstance('default') ).to.be.a.instanceOf( InstancesTest )
    })

  })


})
