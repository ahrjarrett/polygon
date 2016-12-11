# Real Estate Polygon App

Demo: <https://murmuring-forest-15212.herokuapp.com/>

Click at least twice on the map to create a line, three times or more to create a polygon. On the right are operations you can perform, including a log of the coordinates of the line/polygon and a function that will check a JSON array full of coordinates and return which, if any, are contained inside the polygon and fall within the designated price range (click 'See JSON Data' to see all coordinates).

Note that the Polygon is draggable; as of now, 'Log Path' and 'Check Against Map' will need to be run again in order to re-compute coordinates. Also note that there is an arbitrary limit on the number of pin-drops the polygon will accept (6).

Specs:
* Create a map program where I can draw polygons in and around Denver
* process real estate data against the map program so I can put each home into its proper polygon (drawn on the map)
* add some custom columns into the DB based on IF/Then statements or calculations
* Ability to export the data
* Future - have a front end interface hit the DB for reporting.
