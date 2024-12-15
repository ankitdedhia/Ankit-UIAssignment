# Reward Points App

A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.

## Points Calculation

- A customer receives 2 points for every dollar spent over $100 in each transaction.
- A customer receives 1 point for every dollar spent between $50 and $100 in each transaction.

For example, a $120 purchase would earn:
- 2 points for each dollar over $100: 2 x $20 = 40 points
- 1 point for each dollar between $50 and $100: 1 x $50 = 50 points
- Total: 90 points

## Objective

Given a record of every transaction during a three-month period, calculate the reward points earned for each customer per month and in total.

## Features

- Calculate reward points based on the rules above.
- Display reward points earned per customer per month and in total.
- Simulate an asynchronous API call to fetch transaction data.
- Use a made-up data set to demonstrate the solution.

## Tech Stack

- React JS 

## Getting Started

1. Clone the repository from GitHub.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.

## Project Structure

- `src/`: Contains the source code of the application.
    - `components/`: React components.
    - `services/`: Services for API calls.

## Example Data Set

```json
[
    {
        "customerId": 1,
        "name": "John Doe",
        "transactions": [
            { "date": "2023-01-15", "amount": 120 },
            { "date": "2023-02-20", "amount": 75 },
            { "date": "2023-03-10", "amount": 200 }
        ]
    },
    {
        "customerId": 2,
        "name": "Jane Smith",
        "transactions": [
            { "date": "2023-01-05", "amount": 50 },
            { "date": "2023-02-15", "amount": 150 },
            { "date": "2023-03-25", "amount": 90 }
        ]
    }
]
```

## How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
