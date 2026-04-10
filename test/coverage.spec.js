import { describe, it, expect } from 'vitest'

import at from '../src/at.js'
import chunk from '../src/chunk.js'
import drop from '../src/drop.js'
import every from '../src/every.js'
import get from '../src/get.js'
import keys from '../src/keys.js'
import map from '../src/map.js'
import toFinite from '../src/toFinite.js'
import toInteger from '../src/toInteger.js'
import toNumber from '../src/toNumber.js'

describe('drop', () => {
  it('drops one element by default', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3])
  })

  it('drops given number of elements', () => {
    expect(drop([1, 2, 3], 2)).toEqual([3])
  })

  it('returns empty array when dropping too many', () => {
    expect(drop([1, 2, 3], 5)).toEqual([])
  })

  it('treats negative drop count as zero', () => {
    expect(drop([1, 2, 3], -1)).toEqual([1, 2, 3])
  })
})

describe('chunk', () => {
  it.skip('splits array into chunks of given size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']])
  })

  it.skip('puts remainder in final chunk', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']])
  })

  it('returns empty array for null input', () => {
    expect(chunk(null, 2)).toEqual([])
  })

  it('returns empty array for size smaller than one', () => {
    expect(chunk(['a', 'b'], 0)).toEqual([])
  })
})

describe('map', () => {
  it('maps values with iteratee', () => {
    expect(map([1, 2, 3], n => n * 2)).toEqual([2, 4, 6])
  })

  it('passes value, index and array to iteratee', () => {
    expect(map(['a', 'b'], (value, index, array) => `${value}:${index}:${array.length}`))
      .toEqual(['a:0:2', 'b:1:2'])
  })

  it('returns empty array for null input', () => {
    expect(map(null, x => x)).toEqual([])
  })
})

describe('every', () => {
  it('returns true when all values match predicate', () => {
    expect(every([2, 4, 6], n => n % 2 === 0)).toBe(true)
  })

  it('returns false when any value fails predicate', () => {
    expect(every([2, 3, 6], n => n % 2 === 0)).toBe(false)
  })

  it('returns true for empty array', () => {
    expect(every([], Boolean)).toBe(true)
  })
})

describe('get', () => {
  it('gets nested value from string path', () => {
    const object = { a: [{ b: { c: 3 } }] }
    expect(get(object, 'a[0].b.c')).toBe(3)
  })

  it('gets nested value from array path', () => {
    const object = { a: [{ b: { c: 3 } }] }
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3)
  })

  it('returns default value for missing path', () => {
    const object = { a: [{ b: { c: 3 } }] }
    expect(get(object, 'a.b.c', 'default')).toBe('default')
  })
})

describe('keys', () => {
  it('returns own enumerable keys from object', () => {
    expect(keys({ a: 1, b: 2 }).sort()).toEqual(['a', 'b'])
  })

  it('returns indexes for strings', () => {
    expect(keys('hi')).toEqual(['0', '1'])
  })
})

describe('toNumber', () => {
  it('converts numeric string to number', () => {
    expect(toNumber('3.2')).toBe(3.2)
  })

  it('converts binary string to number', () => {
    expect(toNumber('0b1010')).toBe(10)
  })

  it('converts octal string to number', () => {
    expect(toNumber('0o10')).toBe(8)
  })
})

describe('toFinite', () => {
  it('returns finite numbers as-is', () => {
    expect(toFinite(3.2)).toBe(3.2)
  })

  it('converts Infinity to max finite number', () => {
    expect(toFinite(Infinity)).toBe(Number.MAX_VALUE)
  })

  it('converts nullish falsey value to zero', () => {
    expect(toFinite(null)).toBe(0)
  })
})

describe('toInteger', () => {
  it('converts decimal to integer', () => {
    expect(toInteger(3.2)).toBe(3)
  })

  it('converts numeric string to integer', () => {
    expect(toInteger('3.2')).toBe(3)
  })
})

describe('at', () => {
  it('returns values from given paths', () => {
    const object = { a: [{ b: { c: 3 } }, 4] }
    expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([3, 4])
  })
})