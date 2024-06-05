# Home Sweet Home - Frontend Assessment Documentation

## Introduction

Welcome to the Home Sweet Home project! This project is a frontend assessment built with Next.js. The purpose of this documentation is to provide a comprehensive guide to the project's structure, dependencies, and best practices used to ensure high-quality code.


## Instructions to Run the Project

To run this project in development mode, you can use any package manager like `pnpm`, `yarn`, or `npm`. Here are the steps to get started:

1. **Install dependencies:**
   ```bash
   pnpm install
   # or
   yarn install
   # or
   npm install
   ```

2. **Start the development server:**
   ```bash
   pnpm dev
   # or
   yarn dev
   # or
   npm run dev
   ```

## Project Structure

The project is organized as follows:

```
📁 src
├── 📁 app
│   ├── data.ts
│   ├── favicon.ico
│   ├── 📁 hooks
│   │   ├── query.constants.ts
│   │   ├── useQueryGetOneHouse.ts
│   │   ├── useQueryInfinityHouses.ts
│   ├── layout.tsx
│   ├── logo.tsx
│   ├── 📁 mock
│   │   ├── fakeApi.constants.ts
│   │   ├── fakeApi.ts
│   │   ├── fakeApi.types.ts
│   ├── page.controller.tsx
│   ├── page.tsx
│   ├── providers.tsx
│   ├── 📁 theme
│   │   ├── chakra.ts
│   │   ├── chakraComponents.ts
├── 📁 components
│   ├── 📁 Cards
│   │   ├── Cards.tsx
│   │   ├── Cards.types.ts
│   │   ├── 📁 components
│   │   │   ├── 📁 HouseDetails
│   │   │   │   ├── HouseDetails.tsx
│   │   │   │   ├── HouseDetails.types.ts
│   │   │   ├── 📁 HouseHeader
│   │   │   │   ├── HouseHeader.tsx
│   │   │   │   ├── HouseHeader.types.ts
│   │   │   ├── HousePrice.tsx
│   ├── 📁 FavoritesDrawer
│   │   ├── FavoritesDrawer.tsx
│   ├── 📁 FilterForm
│   │   ├── FilterForm.constants.ts
│   │   ├── FilterForm.tsx
│   │   ├── FilterForm.types.ts
│   │   ├── 📁 components
│   │   │   ├── 📁 FilterActions
│   │   │   │   ├── FilterActions.tsx
│   │   │   │   ├── FilterActions.types.ts
│   │   │   ├── 📁 FilterSelect
│   │   │   │   ├── FilterSelect.tsx
│   │   │   ├── 📁 PriceRangeSlider
│   │   │   │   ├── PriceRangeSlider.tsx
│   ├── 📁 HomeSectionTitle
│   │   ├── HomeSectionTitle.tsx
│   │   ├── HomeSectionTitle.types.tsx
│   ├── 📁 HouseGrid
│   │   ├── HouseGrid.tsx
│   │   ├── HouseGrid.types.ts
│   │   ├── 📁 components
│   │   │   ├── HouseGridFooter.tsx
│   │   │   ├── HouseGridFooter.types.ts
│   ├── 📁 LoadingPage
│   │   ├── LoadingPage.tsx
│   ├── 📁 NotFound
│   │   ├── NotFound.tsx
│   ├── 📁 PageHeader
│   │   ├── PageHeader.tsx
├── 📁 interfaces
│   ├── house.ts
│   ├── 📁 yup
│   │   ├── index.d.ts
├── 📁 pages
│   ├── 📁 details
│   │   ├── [houseID].tsx
│   │   ├── 📁 components
│   │   │   ├── 📁 HouseDetailsSection
│   │   │   │   ├── HouseDetailsSection.tsx
│   │   │   │   ├── HouseDetailsSection.types.ts
│   │   │   │   ├── 📁 components
│   │   │   │   │   ├── 📁 HouseDetailsBody
│   │   │   │   │   │   ├── HouseDetailsBody.tsx
│   │   │   │   │   │   ├── HouseDetailsBody.types.ts
│   │   │   │   │   ├── 📁 HouseDetailsContactAgentForm
│   │   │   │   │   │   ├── HouseDetailsContactAgentForm.constants.ts
│   │   │   │   │   │   ├── HouseDetailsContactAgentForm.tsx
│   │   │   │   │   │   ├── HouseDetailsContactAgentForm.types.ts
│   │   │   │   │   │   ├── 📁 components
│   │   │   │   │   │   │   ├── 📁 TextField
│   │   │   │   │   │   │   │   ├── TextField.tsx
│   │   │   │   │   │   │   │   ├── TextField.types.tsx
│   │   │   │   │   ├── 📁 HouseDetailsDescription
│   │   │   │   │   │   ├── HouseDetailsDescription.tsx
│   │   │   │   │   ├── 📁 HouseDetailsHeader
│   │   │   │   │   │   ├── HouseDetailsHeader.tsx
│   │   │   │   │   │   ├── HouseDetailsHeader.types.ts
├── 📁 store
│   ├── favorites.ts
│   ├── favorites.types.ts
├── 📁 utils
│   ├── coin.ts
│   ├── convertion.ts
│   ├── dates.ts
│   ├── strings.ts
│   ├── yup.ts
```

## Libraries and Tools Used

- **Next.js**: The React framework for production.
- **Chakra UI**: A simple, modular, and accessible component library.
- **React Query**: Data-fetching library for React.
- **React Hook Form**: Performant, flexible, and extensible forms with easy-to-use validation.
- **Framer Motion**: A production-ready motion library for React.
- **Zustand**: Bear necessities for state management in React.
- **Yup**: Schema builder for value parsing and validation.
- **TypeScript**: TypeScript is used to improve code quality and developer experience.

## Coding Conventions

- **File Naming**: Use camelCase for file names and PascalCase for React components.
- **Folder Structure**: Organized by feature/module to improve maintainability and scalability.
- **TypeScript**: Strict type-checking to catch errors early.
- **ESLint**: Enforced coding standards and best practices.
- **Prettier**: Code formatting to ensure consistency.
- **React Query**: For data fetching and state management.
- **Hooks**: Custom hooks for reusable logic.

## Quality Assurance

- **Linting**: Run `pnpm lint` to check for code style issues.
- **TypeScript**: Ensure types are correctly defined and used throughout the project.
- **Testing**: Write unit tests for components and hooks (if applicable).

## Conclusion

This documentation provides an overview of the Home Sweet Home project, including how to set up and run the project, the project structure, and the libraries and tools used. Following the coding conventions and quality assurance practices outlined here will help maintain a high-quality codebase.