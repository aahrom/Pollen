# Project Title

Pollen is a tool that helps people identify products containing specific allergens. By searching for a particular allergen (like iodopropynyl butylcarbamate, nickel, or other chemicals), users can see which product categories commonly include it, making it easier to avoid products that might trigger allergic reactions.

## Description

The goal of Pollen is to empower users with quick and reliable information about allergens. Whether you’re sensitive to certain chemicals in cosmetics, household cleaners, or even medical products, this app aims to centralize all relevant data in one place. As an ongoing project, Pollen will gradually expand its database of allergens and products, providing a more comprehensive resource to those who need it most.


## Tech Stack

- **Frontend**: React + TypeScript (Vite for bundling)  
- **Backend**: Node.js + Express + TypeScript  
- **Database**: MongoDB (using Mongoose ODM)  
- **Testing**: Jest + Supertest (for backend)  
- **Other Tools**: Postman (API testing/documentation), Docker (optional for running MongoDB locally)

## Getting Started

### Dependencies

* Node.js (version 14 or higher recommended)
* NPM or Yarn (for managing frontend and backend dependencies)
* Git (to clone and manage version control)
- **MongoDB**  
  - Either install locally or run via Docker:
    ```bash
    docker run -d -p 27017:27017 mongo
    ```
  - Or use a MongoDB Atlas free-tier instance
- **Git** (to clone and manage version control)

Operating System: Works on Windows, macOS, and Linux. No specific OS version required, but your environment should be capable of running Node.js.

### Installing

# Cloning the repository
```
git clone https://github.com/<YourUsername>/pollen.git
```

# Installing dependencies (frontend)
```
cd pollen
npm install
npm run dev
```

# Installing dependencies (backend)
```
cd pollen-backend
npm install
npm run dev
```

