# Scoring Tables API

This API uses the World Athletics scoring tables and pulls the marks required
for certain point values.

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog] (https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning] (https://semver.org/spec/v2.0.0.html).

## [0.1.2] - 2023-01-11

### Added

-  GET "/marks" command directs user to select men's or women's marks.
-  "100mh" field to schema for women's short hurdles.
-  Imported data for all women's track events.

### Changed

-  "110mH" and "400mH" to "110mh" and "400mh" in data to match case with Mongoose schema.

### Fixed

-  Fixed route to all women's marks.
-  Fixed route to women's marks with ID.

### Removed

-  Unnecessary POST and PATCH functions.

## [0.1.1] - 2023-01-09

### Added

-  "\_id" field to schema.
-  Imported data for men's mid and long distance.

### Changed

-  Data now includes "\_id" values to replace "id" values.
-  Instances of "id" in code were replaced with "\_id" to reflect changes.

### Fixed

-  Fixed GET post by ID to work correctly instead of displaying data with ID "1".

## [0.1.0] - 2023-01-08

### Added

-  The Scoring Tables API server with basic GET, POST, PATCH, and DELETE commands.
-  A Mongoose schema featuring 10 track events.
-  A fully functional database using MongoDB.
-  Imported data for men's sprints, hurdles, and relays.
