# Take nodejs image 
FROM        node:10.15.3

# Set working directory
WORKDIR     /server

# Copy the artefacts
COPY        . ./

RUN         npm ci

# Port where your app will run
EXPOSE      3001

# Entry point that will start the Microservice in Docker Container
ENTRYPOINT  ["npm", "start"]