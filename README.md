# Overview
This is a simple URL shortener where I wanted to practice database sharding. I built this RESTful API using NodeJS, ExpressJs, Postgres, and docker. I had to use docker to spin up multiple Postgres servers on the same machine.


# Database
It is a simple database with one table containing the first 5 characters of the hash of the URL as the primary key and the URL. Due to having multiple database servers I used the hash ring package to decide in which shard the URL will be stored.
