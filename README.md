# SimpliMuv Challenge

This project is a web application built with Next.js 13 for the frontend and NestJS for the backend API. It uses a local MongoDB for data storage and pnpm for package management.

## Getting Started

These instructions will guide you on setting up the project.

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) & [pnpm](https://pnpm.io/installation)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Setting up the local database

1. Start MongoDb instance on your machine.

#### How to set up a local mongodb database using Docker

Before starting, ensure you have [Docker](https://www.docker.com/products/docker-desktop) installed and running on your machine. If not, you can download it from the official website. (Note: The project itself doesn't use docker)

Follow these steps to set up a MongoDB instance:

1. Pull the MongoDB image from Docker Hub.

```zsh
docker pull mongo
```

1. Run the MongoDB image as a container. This command will start a MongoDB instance with the name 'my-mongo', the port 27017 exposed and the authentication mechanism disabled. Replace 'my-mongo' with the desired name for your database.

```zsh
docker run --name my-mongo -p 27017:27017 -d mongo
```

Now, you should have a MongoDB instance running on your local machine at [http://localhost:27017](http://localhost:27017).
You can interact with your MongoDB instance using a MongoDB client like MongoDB Compass. Set the hostname to localhost and the port to 27017 to establish a connection.

Import the `products.json` data to a new MongoDB database called `simplimuv`. This can be achieved through the API when it's up and running.

### Installing dependencies

The project uses pnpm for package management.

To install dependencies for both the frontend and backend, navigate to each directory (`/frontend` and `/backend`) separately and run:

```zsh
pnpm install
```

s

### Running the projects

After the DB is populated with products, you should be able to run the dev command on each individual folder (frontend and backend):

```zsh
pnpm dev
```
