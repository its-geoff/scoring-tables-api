# Scoring Tables API

A REST API built with Node.js, Express, and MongoDB that serves World Athletics scoring table data. Given a point value (by ID), you can look up the corresponding performance marks required across a range of track and field events — for both men and women.

**Live on RapidAPI:** [scoring-tables-api](https://rapidapi.com/geoffreyyyagustin/api/scoring-tables-api) — no setup required, just subscribe and start making requests.

---

## About the Project

If you've ever competed in track and field, you've probably seen those giant scoring tables that tell you "hey, if you run X time in the 400m, that's worth Y points." This API makes that data programmatically accessible. It pulls marks from a MongoDB database and exposes them through a simple REST interface, which makes it easy to integrate into apps, calculators, or whatever else you're building.

Currently supports the following events:

**Track:** 100m, 200m, 400m, 800m, 1600m, 3200m, 100mH (women), 110mH (men), 400mH, 4x100m, 4x400m

**Field:** High Jump (HJ), Pole Vault (PV), Long Jump (LJ), Triple Jump (TJ), Shot Put (SP), Discus Throw (DT)

---

## Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [CORS](https://www.npmjs.com/package/cors)

---

## Getting Started

Here's how to get a local copy up and running. Shouldn't take too long.

### Prerequisites

You'll need Node.js and npm installed. You'll also need a MongoDB instance — either local or hosted (e.g., MongoDB Atlas).

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/github_username/scoring-tables-api.git
```

2. Navigate into the project directory

```sh
cd scoring-tables-api
```

3. Install dependencies

```sh
npm install
```

4. Set up your environment variable for MongoDB. Either export it directly or create a `.env` file:

```sh
export MONGODB_URI="your_mongodb_connection_string_here"
```

5. Start the server

```sh
npm start
```

By default, the server runs on **port 3000**. You should see `Connected to MongoDB` and `Server running on port 3000` in your console if everything worked.

---

## Usage

All endpoints are prefixed with `/marks`. You can test these out with a browser, curl, or Postman.

### Base Route

```
GET /
```

Returns a welcome message confirming the API is live.

---

### Marks Routes

```
GET /marks
```

Directs you to use `/marks/men` or `/marks/women`.

---

```
GET /marks/men
```

Returns all men's scoring table entries (IDs 1–1400, corresponding to 1–1400 points).

---

```
GET /marks/men/:id
```

Returns the men's marks for a specific point value.

**Example:**

```
GET /marks/men/800
```

Returns the performance marks worth 800 points in each men's event.

---

```
GET /marks/women
```

Returns all women's scoring table entries.

---

```
GET /marks/women/:id
```

Returns the women's marks for a specific point value. Note: the women's IDs are offset internally (stored as `id + 1400` in the database), but you just pass in the raw point value — the API handles the offset for you.

**Example:**

```
GET /marks/women/950
```

---

### Example Response

```json
{
    "_id": 800,
    "100m": 10.75,
    "200m": 21.76,
    "400m": 47.8,
    "800m": 106.95,
    "1600m": 237.3,
    "3200m": 512.6,
    "110mH": 14.36,
    "400mH": 52.1,
    "4x100m": 42.03,
    "4x400": 188.4,
    "HJ": 2.07,
    "PV": 4.88,
    "LJ": 7.33,
    "TJ": 15.23,
    "SP": 16.72,
    "DT": 52.14
}
```

_(Values are illustrative — actual data depends on what's loaded into your database.)_

---

## Deployment

The API is publicly available on **RapidAPI**:

👉 [https://rapidapi.com/geoffreyyyagustin/api/scoring-tables-api](https://rapidapi.com/geoffreyyyagustin/api/scoring-tables-api)

Create a free RapidAPI account, subscribe to the API, and you'll get a key to hit all the endpoints documented above — no local setup needed.

The server itself runs on **Heroku**. To check if the live instance is healthy:

1. Open the app from the Heroku dashboard
2. Navigate to the base URL; if you see the welcome message, you're good to go
3. If something's broken, check whether it's a code issue or a Heroku/dyno issue first

---

## Project Structure

```
scoring-tables-api/
├── models/
│   └── marks.js        # Mongoose schema for scoring table entries
├── routes/
│   └── marks.js        # Express route handlers for /marks
├── server.js           # Entry point — sets up Express, MongoDB, routes
├── example.js          # Quick script to test MongoDB connection directly
├── package.json
└── README.md
```

---

## Changelog

All notable changes are documented here. Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

### [1.1.3] – 2023-12-10

- Capitalized hurdle marks for consistency

### [1.1.2] – 2023-12-04

- Added CORS middleware requirement

### [1.1.1] – 2023-12-02

- Capitalized event abbreviations for consistency

### [1.1.0] – 2023-06-27

- Added support for jump and throwing events

### [1.0.0] – 2023-06-18

- Fully updated README
- Full-time deployment through Heroku

### [0.1.2] – 2023-01-11

- Added `GET /marks` redirect behavior
- Added `100mH` field for women's short hurdles
- Imported all women's track event data
- Fixed women's routes

### [0.1.1] – 2023-01-09

- Added `_id` field to schema
- Imported men's mid and long distance data
- Fixed GET by ID

### [0.1.0] – 2023-01-08

- Initial server with GET, POST, PATCH, DELETE
- Mongoose schema with 10 track events
- MongoDB database setup
- Imported men's sprints, hurdles, and relays

---

## Contributing

Pull requests are welcome. If you want to add new events, fix a bug, or clean something up:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

---

## Git Workflow Notes

Quick reference for working with this repo:

- `git add .` → stage changes
- `git commit` → commit locally (press `a` to start typing your message in vim, `Esc` then `:wq` to save)
- `git push` → push to remote

**To fix a bug or add a feature:**

1. `git checkout -b hotfix-bug-name` or `git checkout -b feature-feature-name`
2. Make your changes and commit
3. `git push -u origin branch-name`
4. Open a PR on GitHub and merge with "Create a merge commit"
5. `git switch main` → `git pull origin main`
6. `git branch -d branch-name` to clean up locally

---

## License

Distributed under the ISC License. See `LICENSE.txt` for more info.

---

## Contact

Questions or feedback? Reach out via GitHub or open an issue on the repo.

Geoffrey Agustin, [its-geoff](https://github.com/its-geoff)

Project Link: [https://github.com/its-geoff/scoring-tables-api](https://github.com/its-geoff/scoring-tables-api)
