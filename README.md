# Scoring Tables API

This API uses the World Athletics scoring tables and pulls the marks required
for certain point values.

# Git Instructions

## Pushing Code to Git

-  Use "git init" to check if there's an existing repository in the current folder.
-  Use "git add ." to add new changes to the repository.
-  Use "git commit" to commit your changes to the local repository.
-  Add a commit message by pressing "a" and then typing your message out.
   -  Use "CTRL + C" then ":qa" if you want to cancel the commit.
-  Use "git push" to push your local changes to the git repository.
   -  Use "Ctrl + C" then ":qa" if you want to cancel the commit.
   -  Use "Esc" then ":wq" to save your message.
-  Use "git push" to push your local changes to the git repository.

## Editing a Commit Message

-  Use "git commit --amend" to edit the most recent commit message.
   -  _It is not recommended to edit any commit message besides the most recent one,
      as this will change the history of your repository._

## Fixing an Issue

-  Create a new branch using "git checkout -b type-issue-name".
   -  "type" is either "hotfix" or "feature" depending on the issue type.
-  After fixing the issue, commit the changes as shown above.
-  Push the changes to GitHub using "git push -u origin type-issue-name".
-  Create a pull request on GitHub using the templates.
-  Merge the branches with the option "Create a merge commit".
-  Switch back to the main branch by using "git switch".
-  Use "git pull origin main" to update your local repository.
-  Delete the issue branch from your local repository using "git branch -d type-issue-name".

# Start-Up Instructions

-  Click "Open App" on Heroku dashboard and verify that the API is running correctly.
-  If running correctly, use as needed.
-  If not running correctly, diagnose and fix the problem.
   -- Check if the problem relates to the software or the Heroku application.

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog] (https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning] (https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2023-06-27

### Added

-  Functionality for jump and throwing events.

## [1.0.0] - 2023-06-18

### Added

-  README file fully updated with GitHub and Start-Up information.
-  Full-time deployment through Heroku.

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
