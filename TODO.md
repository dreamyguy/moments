## PHASE II

- Let user clear the state
- Clear icon on input fields
- Test all components
- User should be able to define 'baseDateName'.
- Implement Next.js

## DONE

- ~Replace 'modern-normalize' with 'normalize.css'~
- ~Rename all components to something that makes more sense~
- ~Move 'NowBackground' to 'App' (so that 'now' state is set at HoC) and refactor 'Now' to only render the state~
- ~Let the user select among the 3 modes:~
 1. ~**baseDate => now || now => baseDate**~
    ~(pick a date and see the time difference relative to now)~
 2. ~**baseDate => targetDate**~
    ~(pick a date [1] and see the time difference relatice to another picked date [2])~
 3. ~**baseDate => addUnitToDate**~
    ~(pick a date and see the time difference when adding time units to it)~
 - ~The user sees nothing else but the choices when loading the App for the first time.~
   - ~Make the '/' page mode-free~
 - ~If the user selects a mode, the other choices disappear. Unless the user removes the selection, he/she will stay in that mode.~
 - ~Once a mode selection is made, the user can do nothing else but choose a year. Given that he/she does that, the rest of the UI will pop.~
- ~Refine 'Mode 1'~
- ~Refine 'Mode 2'~
- ~Create 'Mode 3'~
- ~Introduce svg icons~
- ~Style the dropdown~
- ~Refine DatePicker~
  - ~'Day' should reflect the chosen month's day count, so that we get February right~
  - ~Dropdowns should only show if their 'parent' unit is selected~
- ~Push to GitHub~
- ~Create page on GitHub~
- ~Create shareable urls~
- ~Have 'Travis' report build status~
- ~Refine Header~
- ~Refine Footer~
- ~Ensure responsive behaves as expected~
- ~Let user copy shareable urls~
- ~Let user write year through an input field~
  - ~It will need to validate against a four-digit year~
  - ~Year range might need to be limited (test and find out)~
- ~Create logo~
  - ~Create README logo~
  - ~Create header logo~
  - ~Include header logo~
  - ~Create 'og-image'(s) logo~
  - ~Include 'og-image'(s) logo~
  - ~Favicons~
- ~Introduce meta tags~
  - ~'og:' metatags~
- ~Unit tests for utililies (called 'utils')~
- ~Test Redux - Reducers and Actions~

## WON'T DO

- ~Make it possible to create a calendar event based on the resulting date, whenever it's in the future.~
 - ~If possible, set two reminders:~ (won't do: reminders are set differently depending on calendars)
   - ~24h before~
   -  `1h before~
- ~Icons~ (won't do)
  - ~Put arrow between~
    - ~'set date' (baseDate) and 'now' (nowDate)~
    - ~baseDate and targetDate~
- ~Consider introducing navigation through a nav in header~ (won't do) [former optional]
