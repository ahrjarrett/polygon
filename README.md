# Real Estate Polygon App

Demo: [Polygon Demo](https://young-sands-13574.herokuapp.com/)

### Instructions:
Click at least twice on the map to create a line, three times or more to create a polygon. On the right are operations you can perform, including a log of the coordinates of the line/polygon and a function that will check a JSON array full of coordinates and return which, if any, are contained inside the polygon and fall within the designated price range (click 'See JSON Data' to see all coordinates).

Note that the Polygon is *draggable*; as of now, 'Log Path' and 'Check Against Map' will need to be run again in order to re-compute coordinates. Also note that there is an arbitrary limit on the number of pin-drops the polygon will accept (6).

### Specs:
* Create a map program where I can draw polygons in and around Denver
* process real estate data against the map program so I can put each home into its proper polygon (drawn on the map)
* add some custom columns into the DB based on IF/Then statements or calculations
* Ability to export the data
* Future - have a front end interface hit the DB for reporting.

### Todo:
- ~~Load home data from database instead of data.json~~
- ~~Turn each coordinate and address into dynamic link to its raw data~~
- ~~Add price filter~~
- ~~Bug: Log Addresses & Log Coordinates append, without removing children~~
- asynchronous req from geocode returns an array that's out of order, causes exceptions
- POST request: /save-home *make it work at all*
- POST request: /save-poly *make it work again*
- figure out how to trim, or otherwise force JSON input to work (or just rethink the whole thing)
- repopulate #show-poly with saved polygons for reference later
- Bug: Clear log doesn't empty results array, which means it keeps accumulating state
- Refactor filtering logic for easier reuse later
- fix ajax sync problem (open console for e.message)
- Hone Polygram and Home schema, add error handling
- Save Polygrams in db for reference later
- figure out how eventListeners work when layered on Polygons (no rightclick event?)
- add one more form to right interface (toggle showPolygon(s))?
