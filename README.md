![Moments](https://raw.githubusercontent.com/dreamyguy/moments/master/docs/moments-logo-github-full-width.png "Time calculation has never been so fun!")

# Moments

> ⏳🔮✨ Time calculation has never been so fun!

[![Build Status](https://travis-ci.org/dreamyguy/moments.svg?branch=master)](https://travis-ci.org/dreamyguy/moments) [![MIT Licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dreamyguy/moments/blob/master/LICENSE)

With **Moments** one can do two things _(sometimes three)_:

1. Find how many years, months, weeks, days, hours, minutes or seconds are there between two moments in time.

2. Find the exact moment in time when defining a specific time unit (years, months, weeks, days, hours, minutes or seconds) relative to a 'base' moment.

3. If the resulting moment is in the future, one will have the opportunity to set a calendar event.

## Modes

There are three modes one can use:

#### 1. Moment relative to now

Set a base date and get the time difference between that date and now. If the base date is set in the future the calculation will still be done. One will see a visual representation of chronology, with a respective "time since" or "time until" heading over the results.

It can be accessed at:

https://dreamyguy.github.io/moments/#/1/relative-to-now/

#### 2. Time between two dates

Set a base date (Date A) and a target date (Date B) and get the time difference between them.

It can be accessed at:

https://dreamyguy.github.io/moments/#/2/between-two-dates/

#### 3. Discover Moments

Set a base date and get the time difference between that date and now. At the bottom of the page, one will see the results, which can be used as inspiration.

Right below the set date one will get some "time-unit" fields that can be filled with numbers. The resulting moment will render below each field. If the result is in the future, one will be able to set calendar events _(this feature is in the works)_.

It can be accessed at:

https://dreamyguy.github.io/moments/#/3/discover-moment/

## Shareable URLs

> Thanks to the nature of dates, the output of **Moments** can be both presented and requested in a very structured way. One can set the date and time dynamically (ie. at another website) and link to **Moments**, triggering a render of what was entered through URL parameters. The resulting URLs reproduceable, and therefore shareable.

Link to the **Moments** website on Github, passing the expected time parameters. _The link can be copied to your clipboard by clicking on the button **Copy Moment to clipboard** (the button will only appear when it's click-able)_.

#### 1.1. Moment relative to now

```
/1/:urlMode/date-a/:urlBaseYear/:urlBaseMonth/:urlBaseDay/:urlBaseHour/:urlBaseMinute/:urlBaseSecond/
```

Ex.: https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/1975/February/19/21/0/0/

#### 1.2. Time between two dates

```
/2/:urlMode/date-a/:urlBaseYear/:urlBaseMonth/:urlBaseDay/:urlBaseHour/:urlBaseMinute/:urlBaseSecond/date-b/:urlTargetYear/:urlTargetMonth/:urlTargetDay/:urlTargetHour/:urlTargetMinute/:urlTargetSecond
```

Ex.: https://dreamyguy.github.io/moments/#/2/between-two-dates/date-a/2017/May/22/0/22/0/date-b/1975/February/19/21/0/0/

#### 1.3. Discover Moments

```
/3/:urlMode/date-a/:urlBaseYear/:urlBaseMonth/:urlBaseDay/:urlBaseHour/:urlBaseMinute/:urlBaseSecond/
```

Ex.: https://dreamyguy.github.io/moments/#/3/discover-moment/date-a/1975/February/19/21/0/0/

#### Here are some examples, to get you started:

All these dates are relative to **now**, _without the benefit of time zones_:

**Cheeful moments**

- [Jesus is born](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/0/December/25/21/33/37/) - 25 December 0000
- [Eyeglasses invented in Italy](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/1286/June/13/21/36/39/) - 1286
- [Invention of the Printing Press](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/1440/June/13/21/36/52/) - 1440
- [The first photograph of Earth from space is taken](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/1946/October/24/21/37/17/) - 24 October 1946
- [First Beatles concert ever](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/1961/February/9/21/41/01/) - 9 February 1961
- [Martin Luther King Jr. gives his "I have a dream" speech](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/1963/August/28/21/41/39/) - 28 August 1963
- [Apollo 11 lands on Moon](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/1969/July/20/20/17/40/) - 20 July 1969 20:17:40
- [Neil Armstrong steps on the Moon's surface](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/1969/July/21/2/56/15/) - 21 July 1969 02:56:15
- [Tim Berners-Lee invents the internet](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/1989/March/12/21/42/02/) - 12 March 1989
- [First episode of Friends is aired](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/1994/September/22/20/30/40/) - 22 September 1994 20:30
- [Malala Yousafzai delivers her speech at the United Nations Youth Assembly in New York (her 16th birthday)](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/2013/July/12/21/43/02/) - 12 July 2013

**World wars:**

_WW1_

- [First event leading to WW1 (assassination of the Austrian archduke, Franz Ferdinand and his wife)](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/1914/June/28/21/43/26/) - 28 June 1914
- [Last event of WW1 (Treaty of Versailles)](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/1919/June/28/21/43/43/) - 28 June 1919
- [WW1 Duration](https://dreamyguy.github.io/moments/#/2/between-two-dates/date-a/1914/June/28/21/51/25/date-b/1919/June/28/21/51/25/) (between two dates)

_WW2_

- [First event of WW2 (invasion of Poland)](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/1939/September/1/21/44/17/) - 1 September 1939
- [Last event of WW2 (Japan formally surrenders)](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/1945/August/14/21/44/37/) - 14 August 1945
- [WW2 Duration](https://dreamyguy.github.io/moments/#/2/between-two-dates/date-a/1939/September/1/21/48/35/date-b/1945/August/14/21/48/35/) (between two dates)

[Nr. days from 1st event of WW1 to last event WW2](https://dreamyguy.github.io/moments/#/2/between-two-dates/date-a/1914/June/28/21/50/50/date-b/1945/August/14/21/50/50/) (between two dates)

**Major tragedies:**

- [The Black Death pandemic starts](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/1346/June/13/21/52/48/) - 1346
- [Hiroshima explosion](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/1945/August/6/8/16/20/) - 6 August 1945 08:16
- [Chernobyl explosion](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/1986/April/26/1/23/45/) - 26 April 1986 01:23:45
- [First plane crashes on WTC, NY](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/2001/September/11/8/46/40/) - 11 September 2001 08:46:40
- [Trump's presidency starts](https://dreamyguy.github.io/moments/#/1/relative-to-now/date-a/2017/January/20/12/59/37/) - 20 January 2017 12:00:00

## Note on Timezones

Timezones would add a lot of complexity to this application, for little benefit (as 100% accuracy would require a tremendous job). There are so many not-so-obvious caveats and edge-cases that in the end of the day it is simply better to let the end the user take responsibility to set it right (if at all necessary) to compensate for the time difference.

For instance, **if you're born in _Brazil_ but currently live in _Australia_**.

While creating a calendar event to be notified of your 1,111,111,111st second since your birth at 6:50 PM, you would want to set an event on the next day at 7:50 AM - as in Australia you'd be 13 hours ahead of Brazil.

_Remember to check for Daylight Time Saving in both areas._

## Development

### Getting started

Clone this repo locally. You'll need to have [NodeJS][1] installed. Install all dependencies by running:

    npm i

If not already present, you need [Watchman][8] to run the test with `--watch` flag. You can install it in a number of ways, but I recommend using [Homebrew][11]:

    brew install watchman

### Run it locally

To start the app locally, run:

    npm run dev

This command fires up the application on port `9876`, making it visible on http://localhost:9876. Because this app is based on [create-react-app][3], the port number should be configured on the [.env](https://github.com/wtfoo/moments/blob/master/.env#L1) file.

### Building the frontend for Production

When you're ready to build for production, run:

     npm run build

This command compiles all production-optimised resources to a folder called **build**. It's meant to be run remotely, at the environment host, at build time.

### Running frontend tests

To test the application remotely (Jenkins, Travis, etc) , run:

    npm run test

For the best integration experience while developing, run (it will start the `--watch` flag):

    npm run test:local

It's recommended to keep tests running locally as one develops. Running tests on your IDE's terminal window, kept visible while you're writing the application would be for instance a great place to start. [VS Code][12] supports that natively.

Tests can be written in different ways, but [Jest][4] _(for unit tests)_ and [Enzyme][5] _(for integration tests)_ are good starting points. At this point _Enzyme_ still needs to be implemented.

### Getting test coverage

Test coverage won't ever hit 100%, but can be used as a way to trace exceptions/exclusions. If a file shouldn't be tested, [it should be ignored by tests](https://facebook.github.io/jest/docs/en/configuration.html#testpathignorepatterns-array-string). That way test coverage is kept at an acceptable level.

To run test coverage, run:

    npm run test:coverage

### License

[MIT](LICENSE)

### About

**Moments** was conceived and developed by [Wallace Sidhrée][1]. is written in [React][4], with [Redux][5] used for state management. It was initialized through [create-react-app 2][6] and built upon that with some sensible strategies. [Jest][7] and [Enzyme][9] are used for tests. [Momentjs][10] is used for time calculations. [VS Code][12] was used as the IDE of choice.

  [1]: http://sidhree.com/
  [2]: https://nodejs.org/
  [3]: https://github.com/creationix/nvm
  [4]: https://reactjs.org/
  [5]: https://redux.js.org/
  [6]: https://facebook.github.io/create-react-app/
  [7]: https://facebook.github.io/jest/
  [8]: https://facebook.github.io/watchman/
  [9]: https://airbnb.io/enzyme/
  [10]: https://momentjs.com/
  [11]: https://brew.sh/
  [12]: https://code.visualstudio.com/
