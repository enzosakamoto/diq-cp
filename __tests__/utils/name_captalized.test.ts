import { nameCaptalized } from '../../src/utils/nameCaptalized'

import { describe, expect, test } from 'vitest'

describe('name captalized', () => {
  test('should return name captalized', () => {
    const name = 'ISSO É UM TESTE'
    expect(nameCaptalized(name)).toBe('Isso é Um Teste')
  })
})
