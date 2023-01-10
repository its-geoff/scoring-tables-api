# Scoring Tables API

This API uses the World Athletics scoring tables and pulls the marks required
for certain point values.

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog] (https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning] (https://semver.org/spec/v2.0.0.html).

## [0.1.1] - 2023-01-09

### Added

-  "\_id" field to schema.

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
