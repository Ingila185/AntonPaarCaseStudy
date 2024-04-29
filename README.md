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


## Cypress Tests

To run Cypress e2e tests:


```
npx cypress open //To open e2e tests in browser
npx cypress run //To run the tests

```

The e2e tests and video is located at: 

```cypress/videos``` 

You can access the source code here [the Anton Paar Case Study repository](https://github.com/Ingila185/AntonPaarCaseStudy) - your feedback and contributions are welcome!

## Deployed on Vercel

The easiest way to access the Anton Paar Case Study app is to use the [Vercel Platform](https://anton-paar-case-study.vercel.app/).


## Assumptions

The dataset is very large that is returned from API, causing potential performance issues of graph plotting. In order to avoid that, the first 20 data points are taken from the data set.


## To Do

I need to make necessary data transformations to reduce the data points so that the graph is more accurate and covers the entire data set with optimal performance.
 


