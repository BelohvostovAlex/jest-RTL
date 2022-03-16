import counterSlice, { decrement, increment } from "./counterSlice"

describe('counterSlice', () => {
    test('increment', () => {
        expect(counterSlice({value: 0}, increment())).toEqual({value: 1})
    })
    test('decrement', () => {
        expect(counterSlice({value: 1}, decrement())).toEqual({value: 0})
    })
    test('undefined', () => {
        expect(counterSlice(undefined, decrement())).toEqual({value: -1})
        expect(counterSlice(undefined, increment())).toEqual({value: 1})
    })
})