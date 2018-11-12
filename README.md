# Moments

> :calendar: :crystal_ball: :sparkles: Time calculation has never been so fun!

[![MIT Licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dreamyguy/moments/blob/master/LICENSE)

With **Moments** one can do two things _(sometimes three)_:

1. Find how many years, months, weeks, days, hours, minutes or seconds are there between two moments in time.

2. Find the exact moment in time when defining a specific time unit (years, months, weeks, days, hours, minutes or seconds) relative to a 'base' moment.

3. If the resulting moment is in the future, one will have the opportunity to set a calendar event.

## Modes

There are three modes one can use:

#### 1. Moment relative to now

Set a base date and get the time difference between that date and now. If the base date is set in the future the calculation will still be done. One will see a visual representation of chronology, with a respective "time since" or "time until" heading over the results.

It can be accessed at:

```
/relative-to-now
```

#### 2. Time between two dates

Set a base date (Date A) and a target date (Date B) and get the time difference between them.

It can be accessed at:

```
/between-two-dates
```

#### 3. Discover Moments

Set a base date and get the time difference between that date and now. At the bottom of the page, one will see the results, which can be used as inspiration.

Right below the set date one will get some "time-unit" fields that can be filled with numbers. The resulting moment will render below each field. If the result is in the future, one will be able to set calendar events _(this feature is in the works)_.

It can be accessed at:

```
/discover-moment
```

> Because results in **Moments** are presented in a structured way, one can use the application dynamically from somewhere else. One has two options:

## Shareable URLs

**1.** Link to the **Moments** website on Github, passing the expected time parameters.

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

_Shareable URLs will eventually be provided from the application itself, but right now it can only be built manually._

## API

**2.** Hit the **Moments** `API` directly to generate a `JSON` response with all the calculations made for the moment defined in the request. This can then be consumed by your own application.

_Details on this are currently being refined_

## Development

### Getting started

Clone this repo locally. You'll need to have [NodeJS][1] installed. Install all dependencies by running:

    npm i

If not already present, you need [Watchman][8] to run the test with `--watch` flag. You can install it in a number of ways, but I recommend using [Homebrew][12]:

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

It's recommended to keep tests running locally as one develops. Running tests on your IDE's terminal window, kept visible while you're writing the application would be for instance a great place to start. [VS Code][13] supports that natively.

Tests can be written in different ways, but [Jest][4] _(for unit tests)_ and [Enzyme][5] _(for integration tests)_ are good starting points. At this point _Enzyme_ still needs to be implemented.

### Gettings test coverage

Test coverage won't ever hit 100%, but can be used as a way to trace exceptions/exclusions. If a file shouldn't be tested, [it should be ignored by tests](https://facebook.github.io/jest/docs/en/configuration.html#testpathignorepatterns-array-string). That way test coverage is kept at an acceptable level.

To run test coverage, run:

    yarn test:coverage

### License

[MIT](LICENSE)

### About

**Moments** was conceived and developed by [Wallace Sidhrée][1]. is written in [React][4], with [Redux][5] used for state management. It was initialized through [create-react-app 2][6] and built upon that with some sensible strategies. [Jest][7] and [Enzyme][9] are used for tests. [Momentjs][10] is used for time calculations. [VS Code][13] was used as the IDE of choice.

It's a project made out sheer fun &mdash; to honour, acnowledge and nourish the _geekiness_ in all of us. It is, therefore, a part of [WTFoo][11], a tiny but mighty group of skilled developers that celebrate exactly that.

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
  [11]: https://github.com/whatthefoo
  [12]: https://brew.sh/
  [13]: https://code.visualstudio.com/
