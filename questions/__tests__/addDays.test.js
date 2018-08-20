import addDays from '../addDays'

describe('addDays', () => {
  test('2018-1-1, 0 => 2018-1-1', () => {
    expect(addDays(2018, 1, 1, 0)).toEqual({year: 2018, month: 1, day: 1})
  })
  test('2018-1-1, 365 => 2019-1-1', () => {
    expect(addDays(2018, 1, 1, 365)).toEqual({year: 2019, month: 1, day: 1})
  })
  test('2018-1-1, 364 => 2018-12-31', () => {
    expect(addDays(2018, 1, 1, 364)).toEqual({year: 2018, month: 12, day: 31})
  })
  test('2018-1-1, 1000 => 2020-9-27', () => {
    expect(addDays(2018, 1, 1, 1000)).toEqual({year: 2020, month: 9, day: 27})
  })
})
