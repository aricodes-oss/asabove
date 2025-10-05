FROM node:alpine as build

ARG GOOGLE_CALENDAR_API_KEY

WORKDIR /asabove

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build
RUN cp -r public .next/standalone/ && cp -r .next/static .next/standalone/.next/

# ------------------------------------------------------------------------------

FROM node:alpine

WORKDIR /asabove

COPY --from=build /asabove/.next/standalone ./

CMD ["node", "server.js"]
