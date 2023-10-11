FROM node:20-alpine as build

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm ci

# Bundle app source
COPY . .

# Build app
RUN npm run build


# Create a new image with the build output
FROM alpine:3.14 as final

# Create a directory to hold the build output
WORKDIR /app

# COPY Over the nessesary files from the build image
COPY --from=build /app/build ./build
COPY --from=build /app/css ./css
COPY --from=build /app/fonts ./fonts
COPY --from=build /app/img ./img
COPY --from=build /app/404.html ./404.html
COPY --from=build /app/index.html ./index.html
COPY --from=build /app/robots.txt ./robots.txt
COPY --from=build /app/sitemap.txt ./sitemap.txt

CMD cp -r /app/* /output

