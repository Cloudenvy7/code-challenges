'use strict';
/* global describe, expect, test */

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a function named firstLetters that takes in an array of strings and returns an array
// containing only the first letter of each string.
//
// For example, ['this is great :)', 'wow', 'whyyyyyy :(', ':)))))'] returns ['t', 'w', 'w', ':'].
// ------------------------------------------------------------------------------------------------

const firstLetters = (strs) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function named findHappiness that takes in an array of strings and returns an array
// containing only the strings from the input array that contain ":)".
// e.g. ['this is great :)', 'wow', 'whyyyyyy :(', ':)))))'] => ['this is great :)', ':)))))']
// ------------------------------------------------------------------------------------------------

const findHappiness = (strs) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named standardizePhoneNumbers that takes in an array of phone number strings in
// (XXX) XXX-XXXX format, and returns an array with the phone number strings in XXXXXXXXXX format.
// ------------------------------------------------------------------------------------------------

const standardizePhoneNumbers = (phoneNumbers) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
//
// Write a function named onlyOddChars that takes in a string and returns only the odd-index
// characters from that string.
// ------------------------------------------------------------------------------------------------

const onlyOddChars = (str) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 5
//
// Write a function named allHappy that takes in an array of strings and returns a boolean, indicating
// whether all those strings contain ":)".
// ------------------------------------------------------------------------------------------------

const allHappy = (strs) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 6
//
// Write a function named findAnything that takes in an array of strings, along with a target string.
// Return an array containing only those strings from the original array that contain the target string.
// ------------------------------------------------------------------------------------------------

const findAnything = (strs, target) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 7
//
// Write a function named allAnything that takes in an array of strings, along with a target string.
// Return a boolean based on whether or not every string in the array contains the target string.
// ------------------------------------------------------------------------------------------------

const allAnything = (strs, target) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 8
//
// We've been testing a new course enrollment system, and we think we have the bugs worked out, but
// in the meantime, Brook enrolled himself in a bunch of different classes to test if it was working.
//
// Write a function named unenrollBrook that takes in a 2d array where each array represents
// one course's roster, and is an array of strings of the names of the people in that course.
// Return a 2d array with the same roster, but where anyone whose name includes Brook
// is removed from every course.
// ------------------------------------------------------------------------------------------------

const unenrollBrook = (roster) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 9
//
// Write a function named sortByDay that takes in an array of strings, each of which represents an
// event's day and time.
//
// Return a 2d array that organizes those strings based on the day they happen.
// For example, all Monday's events are in the first array, all Tuesday's are in the second, etc.
//
// If an event takes place on multiple days (i.e. "Dancing on Mondays and Tuesdays"), it should
// appear in both arrays.
// ------------------------------------------------------------------------------------------------

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const sortByDay = (eventStrings) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 10
//
// Write a function named characterByIndex that takes in an array of strings and returns an array containing
// the first character of the first string, the second character of the second string, etc.
// ------------------------------------------------------------------------------------------------

const characterByIndex = (strs) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest challenges-13.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('It should return the first letter of each element of the array', () => {
    const words = ['apple', 'banana', 'cantaloupe'];

    expect(firstLetters(words)).toStrictEqual(['a','b','c']);
  });
});

describe('Testing challenge 2', () => {
  test('It should return only the strings that contain smiley faces', () => {
    const words = ['things', 'apple (:)', ':)banana', 'missing that thing', 'cant:)aloupe'];

    expect(findHappiness(words)).toStrictEqual(['apple (:)', ':)banana', 'cant:)aloupe']);
  });
});

describe('Testing challenge 3', () => {
  test('It should return a standardized set of phone numbers', () => {
    const nums = ['(123) 456-7890', '(222) 222-2222'];

    expect(standardizePhoneNumbers(nums)).toStrictEqual(['1234567890', '2222222222']);
    expect(standardizePhoneNumbers([nums[0]])).toStrictEqual(['1234567890']);
  });
});

describe('Testing challenge 4', () => {
  test('It should only return the odd indexed characters from the string', () => {
    expect(onlyOddChars('0123456789')).toStrictEqual('13579');
  });
});

describe('Testing challenge 5', () => {
  test('It should correctly assess whether all the strings are happy', () => {
    const words = ['things', 'apple (:)', ':)banana', 'missing that thing', 'cant:)aloupe'];

    expect(allHappy(words)).toStrictEqual(false);
    expect(allHappy(findHappiness(words))).toStrictEqual(true);
  });
});

describe('Testing challenge 6', () => {
  test('It should find all the strings that contain a given string', () => {
    const words = ['things', 'apple (:)', ':)banana', 'missing that thing', 'cant:)aloupe'];

    expect(findAnything(words, ':)')).toStrictEqual(findHappiness(words));
    expect(findAnything(words, 'i')).toStrictEqual(['things', 'missing that thing']);
  });
});

describe('Testing challenge 7', () => {
  test('It should determine whether all the strings contain a given string', () => {
    const words = ['things', 'apple (:)', ':)banana', 'missing that thing', 'cant:)aloupe'];

    expect(allAnything(words, 'a')).toStrictEqual(false);
    expect(allAnything(words, '')).toStrictEqual(true);
  });
});

describe('Testing challenge 8', () => {
  test('It should remove Brook from all courses', () => {
    const roster = [
      ['Michelle', 'Allie', 'Brook TESTING'],
      ['Brook Riggio', 'hey look it\'s Brook', 'Jennifer'],
      ['Nicholas', 'Sam', 'Scott', 'Vinicio']
    ];

    expect(unenrollBrook(roster)).toStrictEqual([
      ['Michelle', 'Allie'],
      ['Jennifer'],
      ['Nicholas', 'Sam', 'Scott', 'Vinicio']
    ]);
  });
});

describe('Testing challenge 9', () => {
  test('It should sort events by the day on which they happen', () => {
    const events = ['Dancing on Mondays and Tuesdays', 'Meet the inventors! Monday, August 7', 'in the club on a Tuesday', 'Thursday Night Code'];

    const sortedEvents = sortByDay(events);

    expect(sortedEvents[0]).toEqual(expect.arrayContaining(['Dancing on Mondays and Tuesdays', 'Meet the inventors! Monday, August 7']));
    expect(sortedEvents[1]).toEqual(expect.arrayContaining(['Dancing on Mondays and Tuesdays', 'in the club on a Tuesday']));
    expect(sortedEvents[2]).toStrictEqual([]);
    expect(sortedEvents[3]).toStrictEqual(['Thursday Night Code']);
    expect(sortedEvents[4]).toStrictEqual([]);
    expect(sortedEvents[5]).toStrictEqual([]);
    expect(sortedEvents[6]).toStrictEqual([]);
  });
});

describe('Testing challenge 10', () => {
  test('It should return the ith character of the ith string', () => {
    const words = ['apple', 'banana', 'cantaloupe'];

    expect(characterByIndex(words)).toStrictEqual(['a', 'a', 'n']);
  });
});
