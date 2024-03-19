# E-commerce-Back-end

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Walkthrough video [Link](https://app.screencastify.com/v2/manage/videos/CoQ36JKmG0PhIZS5GeIL)

## Description

This project is designed to provide a comprehensive back-end solution for e-commerce sites. Motivated by the need to efficiently manage product inventories, categories, and tags, this solution enables seamless interaction with a database to perform CRUD operations. Building this project allowed us to solve a real-world problem faced by e-commerce platforms: managing vast amounts of product data in an organized and accessible manner. Throughout the development, I learned about the intricacies of Sequelize ORM, Express.js for routing, and the implementation of RESTful APIs to interact with a MySQL database, enhancing our full-stack development skills.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribution](#contribution)
- [Questions](#questions)



## Installation

To install the E-commerce-Back-end, follow these steps:
1. Clone the repository to your local machine.
```sh
git clone git@github.com:andersonasprilla/E-commerce-Back-end.git
cd E-commerce-Back-end
```
2. Run `npm install` to install the necessary dependencies, including `Express.js` and `Sequelize`.
3. Set up your MySQL database using the `schema.sql` file provided in the root directory.
4. Execute `npm run seed `to seed the database with initial data.
5. Start the server using `npm start`.

Ensure you have `Node.js` and npm installed on your system to handle dependencies and run the project.

![Screenshot](/assets/e-commerce%20screenshot.png)

## Usage

To utilize this back end, you will need to interact with the API through a tool like Insomnia or Postman. Here are the endpoints provided:

* Categories: GET, POST, PUT, DELETE `/api/categories`
* Products: GET, POST, PUT, DELETE `/api/products`
* Tags: GET, POST, PUT, DELETE `/api/tags`

## Credits

This project was developed by [Luis Asprilla](https://www.linkedin.com/in/andersonasprilla/) . Special thanks to Node.js, MySQL, and Inquirer.js documentation.

## License
This project is licensed under the MIT License. For more information, please visit [here](https://opensource.org/licenses/MIT).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 
## Features

* Seamless CRUD operations for products, categories, and tags.
* Efficient database management using Sequelize ORM.
* Scalable architecture for e-commerce platforms.

## Contribution

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## Questions

If you have any questions about the repo, open an issue or contact me through my [LinkedIn](https://www.linkedin.com/in/andersonasprilla/) You can find more of my work at [GitHub](https://github.com/andersonasprilla).




