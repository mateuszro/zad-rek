FROM alpine:latest as fetcher

WORKDIR /app

RUN apk --no-cache add curl jq 

RUN curl -s "https://swapi.dev/api/people/" | jq '.results' > people.json
RUN curl -s "https://swapi.dev/api/planets/" | jq '.results' > planets.json
RUN curl -s "https://swapi.dev/api/starships/" | jq '.results' > starships.json



FROM mongo
COPY --from=fetcher /app/people.json /data/people.json
COPY --from=fetcher /app/planets.json /data/planets.json
COPY --from=fetcher /app/starships.json /data/starships.json


CMD mongoimport --host mongodb --db swapi --collection people --authenticationDatabase admin --username root --password example --type json --file /data/people.json --jsonArray; mongoimport --host mongodb --db swapi --collection planets --authenticationDatabase admin --username root --password example --type json --file /data/planets.json --jsonArray; mongoimport --host mongodb --db swapi --collection starships --authenticationDatabase admin --username root --password example --type json --file /data/starships.json --jsonArray