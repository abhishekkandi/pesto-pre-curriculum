const {
    describe,
    it,
    expect,
    matchers 
    } = require('./index')

//Testing -> describe
let executes = 0
const callBackDemo = () => { executes+= 1 }

describe('describe', () => {
    it('executes a callback function', () => {
        const actual = describe('',callBackDemo)

        expect(executes).toBe(1)
    })
})

//Testing -> expect
describe('expect',() => {
    it('returns an object', () =>{
        const actual = expect(true)

        expect(typeof actual).toBe('object')
        expect(typeof actual.toBe).toBe('function')
    })
})

//Testing -> matchers.toBe
describe('matchers', ()=> {
    describe('toBe',() => {
        it('works', () => {
            const actual = matchers('1').toBe('1')

            expect(actual).toBe(true)
        })
    })
})

function add(a,b){
    return a + b;
}

describe('add', () => {
    it('testing add function', () => {
        const actual = add(3,5)

        expect(actual).toBe(8)
    })
})

function subtract(a,b){
    return a - b;
}

describe('subtract', () => {
    it('testing subtract function', () => {
        const actual = subtract(5,1)
        expect(actual).toBe(4)
    })
})

function divide(a,b){
    return a / b;
}

describe('divide', () => {
    it('testing divide function',() => {
        const actual = divide(10,5)
        expect(actual).toBe(2)
    })
})

function multiply(a,b){
    return a * b;
}

describe('multiply', () => {
    it('testing multiply function', () => {
        const actual = multiply(2,10)
        expect(actual).toBe
    })
})

