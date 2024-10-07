# Expense Tracker Application

A simple, user-friendly expense tracker application built with **React**, **Redux**, and **TypeScript**, allowing users to manage and track expenses. This application provides features for adding, editing, and deleting expenses, as well as data visualization through a dashboard with category-based expense distribution.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Assumptions and Optional Features](#assumptions-and-optional-features)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add, Edit, and Delete Expenses**: Manage individual expenses with ease.
- **Date Picker**: Easily select dates when adding or editing expenses.
- **Auto-complete for Categories**: Auto-suggest common expense categories.
- **Expense Dashboard**: View a pie chart breakdown of expenses by category.
- **Responsive UI**: Uses Bootstrap for a mobile-friendly layout.
- **Unit Testing**: Ensures component functionality with Jest and React Testing Library.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Redux**: State management library for handling the application state.
- **TypeScript**: Typed JavaScript for improved code quality and readability.
- **React Bootstrap**: UI framework for building responsive, mobile-first components.
- **React Date Picker**: Component for selecting dates.
- **React Bootstrap Typeahead**: Component for auto-complete functionality.
- **Jest**: JavaScript testing framework.
- **React Testing Library**: Library for testing React components.

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

- **Node.js** and **npm**: Download and install from [Node.js](https://nodejs.org/).

### Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server**:

   ```bash
   npm start
   ```

   This command will start the application on [http://localhost:3000](http://localhost:3000).

2. **Build the application for production**:
   ```bash
   npm run build
   ```
   This command will compile the application for production into the `build` directory.

## Assumptions and Optional Features

- **Date Parsing**: The date is saved as a `Date` object or a parsable date string. Ensure dates are formatted in a consistent manner.
- **Expense Deletion**: Once an expense is deleted, it cannot be restored. Ensure confirmation before deleting important data.
- **Category Auto-complete**: The application uses predefined categories for the auto-complete feature. You can add more categories as needed by editing the `categories` array in `AddExpense` and `EditExpense` components.
- **Data Persistence**: The application currently saves expenses in the Redux state. For persistent data, integrate with a backend service or local storage.
