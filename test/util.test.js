var util = require("../lib/util");
var map = {
    "all": 0x7F,
    "sound": {
        "general": 0x10
    }
}


describe("util module", function() {
    
    describe("invertMap() method", function() {
        
        it("should invert objects and flatten indices to dot notation", function(done){
            var inverted = util.invertMap(map);
            inverted[0x10].should.eql("sound.general");
            inverted[0x7F].should.eql("all");
            done();
        })
    });
    
    describe("dotNotatedIndex() method", function(){
        
        it("should return nested property from dot-notated index", function(done){            
            util.dotNotatedIndex(map, "all").should.eql(0x7F);
            util.dotNotatedIndex(map, "sound.general").should.eql(0x10);
            done();
        })
        
        it('should be case-insensitive', function(done){
            util.dotNotatedIndex(map, "Sound.General").should.eql(0x10);
            done();
        })
    });
    
    describe("messageIsMsc() method", function() {
        
        it("should return true for MSC method", function(done){
            util.messageIsMsc(testMessage).should.be.true();
            done();
        });
        
        it("should return false for other messages", function(done) {
            var message = [0x173, 0x02, 0x13];
            util.messageIsMsc(message).should.be.false();
            done();
        })
    })
})
