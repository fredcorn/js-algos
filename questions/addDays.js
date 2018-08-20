function isLeap (y) {
  return y % 400 === 0 || (y % 100 !== 0 && y % 4 === 0)
}

function getOffsetDaysInThatYear (year, month, day) {
  let offset = day
  const daysOfMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (isLeap(year)) {
    daysOfMonth[2] = 29
  }

  for (let i = 1; i < month - 1; i++) {
    offset += daysOfMonth[i]
  }
  return offset
}

/**
 * Return an object
 * @param {number} year year
 * @param {number} days the number of days, smaller than 365 or 366
 */
function getDateByOffset (year, days) {
  const daysOfMonth = [0, 31, isLeap(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let day, month
  let tmpDays = days
  for (let i = 1; i <= 12; i++) {
    month = i
    if (tmpDays - daysOfMonth[i] <= 0) {
      day = tmpDays
      break
    }
    tmpDays -= daysOfMonth[i]
  }
  return {
    month,
    day
  }
}

function addDays (year, month, day, daysToAdd) {
  const offset = getOffsetDaysInThatYear(year, month, day)
  const totalOffset = offset + daysToAdd

  // same year
  if ((totalOffset) < (isLeap(year) ? 366 : 365)) {
    const date = getDateByOffset(year, totalOffset)
    return {
      year,
      month: date.month,
      day: date.day
    }
  } else {
    // get year
    let newYear = year
    let daysOfTheYear = isLeap(newYear) ? 366 : 365
    let tmpTotalOffset = totalOffset
    while (tmpTotalOffset > daysOfTheYear) {
      newYear += 1
      tmpTotalOffset -= daysOfTheYear
      daysOfTheYear = isLeap(newYear) ? 366 : 365
    }
    const newDate = getDateByOffset(newYear, tmpTotalOffset)
    return {
      year: newYear,
      month: newDate.month,
      day: newDate.day
    }
  }
}

export default addDays
