# Node.js

The web is typically bifurcated into two parts, the “front-end” and the “back-end”. Node.js is software that allows you to author your back-end code in JavaScript. 

Let’s explore the [ecosystem](http://alpha.ideavis.co/529cc5f/?utm_content=bufferd15ac&utm_source=buffer&utm_medium=twitter&utm_campaign=Buffer).

# Protocols

What is a protocol?

# HTTP 101 (Again)

HTTP can be summarized as text strings passed back and forth between computers over a network connection.

[Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

[Headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
	
- Content-Type
- Host
- Access-Control-Allow-Origin (CORS)

[Verbs](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

# Telnet

[What is telnet?](https://kb.iu.edu/d/aayd)

telnet google.com 80 
GET /

Play around with this!

A browser is a really fancy implementation for communicating over protocols and displaying responses.

# Node.js

## Installation

[Install](https://nodejs.org/)

## Lets examine a basic web server…

Run the server:

`node server.js`

Telnet and examine the response:

telnet localhost 1337
GET /

## Lets add some headers…

Run the server:

`node server-with-headers.js`

Telnet and examine the response:

telnet localhost 1337
GET /

Neat, check it out in a browser…

open http://localhost:1337

## Different content types…

Run the server:

`node server-with-json.js`

Telnet and examine the response:

telnet localhost 1337
GET /

Neat, check it out in a browser…

open http://localhost:1337


## For the 1337 h4ck3r5

Run the server:

`node server-with-image.js`

Telnet and examine the response:

telnet localhost 1337
GET /

Neat, check it out in a browser…

open http://localhost:1337


## Making a request to our own server…

Run the server:

`node server-with-json.js`

`open index.html`

Didn’t work? Thats because of the browser security policy [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

Run the server with the CORS header enabled:

`node server-with-access.js`


# Extra require

- What is a module system?
- Module Scoping
- Creating a module
- Consuming a module

# Extra explore the request object

- console.log the request in your http server

# Extra httpie

- A fancy pants tool for making requests. (A human friendly cURL)

# Explore CRUD and associated HTTP verbs

- GET - Gets entities /users/
- POST - Creates entities /users/ <data>
- PUT - Updates entities /users/1 <data>
- DELETE - Deletes entities /users/1

# Explore JSON Server

- https://github.com/typicode/json-server
- https://github.com/iammerrick/DevMountain-AJAX
