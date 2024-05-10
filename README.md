# ReGov Coding Challenge

### by Joshua Lim Chiew Khoon

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Description

This simple application demonstrates user authentication functionalities like **register, login and logout**. It also includes user profile and an **about me** section, that can be edited by the user.

### Languages and frameworks for the frontend include:

1. NextJS (Development Framework)
2. Typescript (Main)
3. Tailwind CSS (Styling)
4. ShadCN (UI Library)

### Languages and frameworks for the backend include:

1. Prisma (ORM)
2. Neon (Postgres Database)
3. Server Actions (Communication between front and backend)

### Steps for the application

1. First time users can register an account in the register page.
2. Once registered, they can login with their credentials in the login page.
3. After successfully logging in, they will be brought to the users page where they can see their name, email and about me section.
4. Users can click on the edit button to change their about me section and either save and submit or save as draft. Saved drafts will show up in the text area when clicking the edit button again.
