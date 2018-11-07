## MVP

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
   - Make the '/' page mode-free
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
- Refine Header
- Refine Footer
- Introduce meta tags

- ~Push to GitHub~
- Create page on GitHub

## PHASE II

- Icons
  - Put arrow between
    - 'set date' (baseDate) and 'now' (nowDate)
    - baseDate and targetDate
  - Choice icons to the left of choice buttons (only seen when no choices have been selected)
  - Close icon to the right of the selected choice button
- Let user write year through an input field
  - It will need to validate against a four-digit year
  - Year range might need to be limited (test and find out)
- User should be able to define 'baseDateName'.
- Make it possible to create a calendar event based on the resulting date, whenever it's in the future.
 - If possible, set two reminders:
   - 24h before
   -  1h before
- Implement Next.js

## OPTIONAL

- Consider introducing navigation through a nav in header