// tests for isEmpty function (isEmpty.js)
import isEmpty from '../src/isEmpty.js';

describe('isEmpty()', () =>{

    // we first start by testing the basics
    test('Try isEmpty on null, undefined, numbers and booleans', () => {
        expect(isEmpty(null)).toBeTrue()
        expect(isEmpty(false)).toBeTrue()
        expect(isEmpty(true)).toBeTrue()
        expect(isEmpty(undefined)).toBeTrue()
        expect(isEmpty(0)).toBeTrue()
        expect(isEmpty(1234567890)).toBeTrue()
    })

    // we test array-like values if they are empty and if they are not
    test('Test array-like values', () => {
        expect(isEmpty([])).toBeTrue()
        expect(isEmpty('')).toBeTrue()
        expect(isEmpty([1,2,3])).toBeFalse()
        expect(isEmpty('abc')).toBeFalse()
    })

    // next we test buffers being empty and not
    test('Test buffer', () => {
        const buffer1 = Buffer.alloc(0)
        const buffer2 = Buffer.from([1, 2, 3])
        
        expect(isEmpty(buffer1)).toBeTrue()
        expect(isEmpty(buffer2)).toBeFalse()
    })

    // test typed arrays if they are empty and if they are not
    test('Test typed array', () => {
        const typed_array1 = new Uint8Array(0)
        const typed_array2 = new Uint8Array([1, 2, 3])
        
        expect(isEmpty(typed_array1)).toBeTrue()
        expect(isEmpty(typed_array2)).toBeFalse()
    })

    // for arguments objects we create one use functions creating a function object being empty and not empty
    test('Test arguments object', () => {
        function emptyArgs() { return arguments }
        function filledArgs(a,b) { return arguments }

        const args1 = emptyArgs()
        const args2 = filledArgs(1,2)

        expect(isEmpty(args1)).toBeTrue()
        expect(isEmpty(args2)).toBeFalse()
    })

    // test empty and non empty map objects
    test('Test map object', () => {
        const map1 = new Map()
        const map2 = new Map([['a', 1]])

        expect(isEmpty(map1)).toBeTrue()
        expect(isEmpty(map2)).toBeFalse()
    })

    // test empty and non empty sets
    test('Test set object', () => {
        const set1 = new Set()
        const set2 = new Set([1, 2])

        expect(isEmpty(set1)).toBeTrue()
        expect(isEmpty(set2)).toBeFalse()
    })

    // test standard objects
    test('Test objects', () => {
        const obj1 = {}
        const obj2 = { a: 1 }

        expect(isEmpty(obj1)).toBeTrue()
        expect(isEmpty(obj2)).toBeFalse()
    })

    // we test prototype objects if they are empty or not
    test('Test prototype objects', () => {
        function Foo() {}
        const protoEmpty = Foo.prototype;
        const protoWithKey = Object.create(protoEmpty);
        protoWithKey.a = 1;

        expect(isEmpty(protoEmpty)).toBeTrue();
        expect(isEmpty(protoWithKey)).toBeFalse();

        // edge case inherited propertie is ignored
        const proto = { inherited: 1 }
        const obj = Object.create(proto)
        obj.own = 0

        expect(isEmpty(obj)).toBeFalse()
        delete obj.own
        expect(isEmpty(obj)).toBeTrue()
  })
})
