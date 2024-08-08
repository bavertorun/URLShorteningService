
# URL Shortening Service
<p>
<img src="https://assets.roadmap.sh/guest/url-shortening-service-c1nzi.png" alt="URL Shortening Service" />
</p>

## Description

This project provides a backend API for shortening and managing URLs. The service allows users to convert long URLs into shorter, more manageable links. Key features include URL shortening, redirection, and database storage for both short and long URLs.

## Features

- **URL Shortening:**
  - Convert long URLs into short, shareable links
  - Customizable shortening algorithm

- **Redirection:**
  - Redirect users from short URLs to their original long URLs

- **Database Management:**
  - Store and manage both short and long URLs in a database

- **API Endpoints:**
  - Create short URLs
  - Retrieve long URLs from short URLs
  <!-- - List all short URLs and their mappings
  - Update or delete short URLs -->

## Installation

```bash
$ git clone https://github.com/bavertorun/URLShorteningService.git
```
```bash
$ cd URLShorteningService
```
```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## License

[URL Shortening Service](https://github.com/bavertorun/URLShorteningService) is [MIT licensed](LICENSE).