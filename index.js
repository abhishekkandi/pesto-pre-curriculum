//Testing framework

const describe = (description, fn) => {
    console.log(description)
    fn()
}

const it = (msg, fn) =>  describe(' '+ msg, fn)

const matchers = (expected) => ({
    toBe: (assertion) => {
        if(expected === assertion){
            console.log('pass')
            return true
        } else {
            console.log('fail')
            return false
        }
    }
})

const expect = (expected) => matchers(expected)

module.exports = {
    describe,
    expect,
    it,
    matchers
}