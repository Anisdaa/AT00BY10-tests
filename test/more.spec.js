import { describe, it, expect } from 'vitest'

import capitalize from '../src/capitalize.js'
import endsWith from '../src/endsWith.js'
import eq from '../src/eq.js'
import isBoolean from '../src/isBoolean.js'
import isDate from '../src/isDate.js'
import isObject from '../src/isObject.js'
import upperFirst from '../src/upperFirst.js'
import add from '../src/add.js'
import divide from '../src/divide.js'
import castArray from '../src/castArray.js'
import compact from '../src/compact.js'

describe('capitalize', () => {
  it('capitalizes the first character', () => {
    expect(capitalize('fred')).toBe('Fred')
  })

  it('keeps rest of the string lowercase according to implementation', () => {
    expect(capitalize('FRED')).toBe('Fred')
  })
})

describe('endsWith', () => {
  it('returns true when string ends with target', () => {
    expect(endsWith('abc', 'c')).toBe(true)
  })

  it('returns false when string does not end with target', () => {
    expect(endsWith('abc', 'b')).toBe(false)
  })

  it('supports position argument', () => {
    expect(endsWith('abc', 'b', 2)).toBe(true)
  })
})

describe('eq', () => {
  it('returns true for equal primitive values', () => {
    expect(eq(1, 1)).toBe(true)
    expect(eq('a', 'a')).toBe(true)
  })

  it('returns false for different primitive values', () => {
    expect(eq(1, 2)).toBe(false)
    expect(eq('a', 'b')).toBe(false)
  })

  it('treats NaN as equal to NaN', () => {
    expect(eq(NaN, NaN)).toBe(true)
  })
})

describe('isBoolean', () => {
  it('returns true for boolean values', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  })

  it('returns false for non-boolean values', () => {
    expect(isBoolean(0)).toBe(false)
    expect(isBoolean('true')).toBe(false)
  })
})

describe('isDate', () => {
  it('returns true for Date objects', () => {
    expect(isDate(new Date())).toBe(true)
  })

  it('returns false for non-Date values', () => {
    expect(isDate('2024-01-01')).toBe(false)
    expect(isDate({})).toBe(false)
  })
})

describe('isObject', () => {
  it('returns true for objects and arrays', () => {
    expect(isObject({})).toBe(true)
    expect(isObject([1, 2, 3])).toBe(true)
    expect(isObject(() => {})).toBe(true)
  })

  it('returns false for null and primitive values', () => {
    expect(isObject(null)).toBe(false)
    expect(isObject(1)).toBe(false)
    expect(isObject('abc')).toBe(false)
  })
})

describe('upperFirst', () => {
  it('uppercases only the first character', () => {
    expect(upperFirst('fred')).toBe('Fred')
  })
})

describe('add', () => {
  it('adds two numbers together', () => {
    expect(add(6, 4)).toBe(10)
  })
})

describe('divide', () => {
  it.skip('divides first number by second', () => {
    expect(divide(8, 2)).toBe(4)
  })
})

describe('castArray', () => {
  it('wraps non-array values in an array', () => {
    expect(castArray(1)).toEqual([1])
    expect(castArray('abc')).toEqual(['abc'])
  })

  it('returns arrays unchanged', () => {
    expect(castArray([1, 2])).toEqual([1, 2])
  })

  it.skip('returns empty array when called without arguments', () => {
    expect(castArray()).toEqual([])
  })
})

describe('compact', () => {
  it.skip('removes falsey values from array', () => {
    expect(compact([0, 1, false, 2, '', 3, null, undefined, NaN])).toEqual([1, 2, 3])
  })

  it('returns empty array when all values are falsey', () => {
    expect(compact([false, null, 0, ''])).toEqual([])
  })
})