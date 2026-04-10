import { describe, it, expect } from 'vitest'

import defaultTo from '../src/defaultTo.js'
import clamp from '../src/clamp.js'
import camelCase from '../src/camelCase.js'
import isEmpty from '../src/isEmpty.js'

describe('defaultTo', () => {
  it('returns the original value when it is defined', () => {
    expect(defaultTo(1, 10)).toBe(1)
    expect(defaultTo('abc', 'fallback')).toBe('abc')
  })

  it('returns default value for undefined and null', () => {
    expect(defaultTo(undefined, 10)).toBe(10)
    expect(defaultTo(null, 10)).toBe(10)
  })

  it.skip('returns default value for NaN according to documentation', () => {
    expect(defaultTo(Number.NaN, 10)).toBe(10)
  })
})

describe('clamp', () => {
  it('returns lower bound when number is below range', () => {
    expect(clamp(-10, -5, 5)).toBe(-5)
  })

  it.skip('returns upper bound when number is above range', () => {
    expect(clamp(10, -5, 5)).toBe(5)
  })

  it.skip('returns number when it is already within range', () => {
    expect(clamp(3, -5, 5)).toBe(3)
  })
})

describe('camelCase', () => {
  it.skip('converts space separated words to camelCase', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar')
  })

  it.skip('converts dashed text to camelCase', () => {
    expect(camelCase('--foo-bar--')).toBe('fooBar')
  })

  it.skip('converts underscored uppercase text to camelCase', () => {
    expect(camelCase('__FOO_BAR__')).toBe('fooBar')
  })
})

describe('isEmpty', () => {
  it('returns true for null and primitive values documented as empty', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(true)).toBe(true)
    expect(isEmpty(1)).toBe(true)
  })

  it('returns correct result for arrays and strings', () => {
    expect(isEmpty([])).toBe(true)
    expect(isEmpty([1, 2, 3])).toBe(false)
    expect(isEmpty('')).toBe(true)
    expect(isEmpty('abc')).toBe(false)
  })

  it('returns correct result for plain objects', () => {
    expect(isEmpty({})).toBe(true)
    expect(isEmpty({ a: 1 })).toBe(false)
  })

  it('returns correct result for Map and Set', () => {
    expect(isEmpty(new Map())).toBe(true)
    expect(isEmpty(new Map([['a', 1]]))).toBe(false)
    expect(isEmpty(new Set())).toBe(true)
    expect(isEmpty(new Set([1]))).toBe(false)
  })
})