This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies and run the development server:

```bash

npm install 

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Cypress Tests

To run Cypress e2e tests:


```
npx cypress open //To run headed e2e tests (browser-like)
npx cypress run //To run headless e2e tests

```

The e2e tests and video is located at: 

```cypress/videos``` 

You can access the source code here [the Anton Paar Case Study repository](https://github.com/Ingila185/AntonPaarCaseStudy) - your feedback and contributions are welcome!

## Deployed on Vercel

The easiest way to access the Anton Paar Case Study app is to use the [Vercel Platform](https://anton-paar-case-study.vercel.app/).

## Assumptions / Constraints

- The dataset is very large that is returned from API, to optimize page performance, I have used Server Actions in Next.js to perform Server Side rendering and render the fetched data to the client.
- Due to so many data points being plotted, the graph shows data points very close to each other. This is causing the line graph to appear very wierd and difficult for the user to see the trend.  [See this deployment](https://anton-paar-case-study-3icfhsvg6-ingila185s-projects.vercel.app/). To improve this, I have plotted only the top 20 most recent points on the graph while I work on data sampling techniques to sample the data and plot it more accurately.

## To Do / Issues

- I need to make necessary data transformations (sampling, aggregation, windowing, etc.) to reduce the data points so that the graph is more understandble and trends are more readable. The graph accurately gets updated with successful /write API calling.


## Technologies / Frameworks

- Next.js 14 (App router)
- React
- TailwindCSS for styling
- Recharts (for reactive charts)
- Next.js Server Actions for SSR
- Cypress for e2e tests 

 


