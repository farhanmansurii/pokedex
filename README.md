# Pokemon Pokedex

This project is a web application that displays a list of available Pokemon with pagination, and also provides a detailed view for each individual Pokemon. The application is built using React, Next.js ,GraphQL ,Apollo , and Tailwind CSS.

## Features

### Homepage

- Lists all 151 Pokemon with pagination (20 Pokemon per page).
- Displays each Pokemon's image, number, name, and types.
- Renders the remaining pages in real-time.

### Pokemon Detail Page

- Displays name, image, height, weight, classification, type, weakness, and resistance of the Pokemon.
- Includes a button to open a popup showing the Pokemon's evolutions
- Statically renders the detail pages for the first 20 Pokemon at build time.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Run the development server using `npm run dev`.
4. Access the application in your web browser by visiting `http://localhost:3000/`.

## Deployment

To deploy the application, follow these steps:

1. Ensure that you have properly configured your environment variables for your production environment.
2. Build the application using `npm run build`.
3. Start the production server using `npm start`.

## Technology Stack

The following technologies are used in this project:

- React: A JavaScript library for building user interfaces.
- Next.js: A framework for building server-side rendered React applications.
- Tailwind CSS: A utility-first CSS framework for building responsive and customizable UIs.
- GraphQL: A query language for APIs that enables efficient data fetching and reduces over-fetching.
- Apollo: A GraphQL client that makes it easy to fetch and manage data in your React application.

## Contributors

This project was built by Farhan Mansuri. If you would like to contribute to the project, please submit a pull request or open an issue.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
