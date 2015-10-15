describe('simpan', function() {

    describe('set()', function() {

        beforeEach(function() {
            simpan.set('localTestStringProp', 'test');
            simpan.set('localTestObjectProp', {
                test: 'test'
            });
        });

        it('should add a property to window.localStorage', function() {
            expect(window.localStorage.localTestStringProp).toBeDefined();
            expect(window.localStorage.localTestObjectProp).toBeDefined();
        });

    });

    describe('get()', function() {

        it('should fetch the storage value String', function() {
            var localString = simpan.get('localTestStringProp');
            expect(localString).toBe('test');
        });

        it('should fetch the storage value Object by JSON.parse()', function() {
            var localObject = simpan.get('localTestObjectProp');
            expect(localObject.test).toBe('test');
        });

    });

    describe('delete()', function() {

        beforeEach(function() {
            simpan.delete('localTestStringProp');
            simpan.delete('localTestObjectProp');
        });

        it('should remove storage properties', function() {
            expect(simpan.get('localTestStringProp')).not.toBeDefined();
            expect(simpan.get('localTestObjectProp')).not.toBeDefined();
        });

    });

    describe('clear()', function() {

        beforeEach(function() {
            simpan.set('localTestStringProp', 'test');
            simpan.set('localTestObjectProp', {
                test: 'test'
            });

            simpan.clear('local');
        });

        it('should clear the storage objects', function() {
            expect(window.localStorage.length).toEqual(0);
        });

    });

});
