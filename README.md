## $5 Tech Unlocked 2021!
[Buy and download this Video for only $5 on PacktPub.com](https://www.packtpub.com/product/isomorphic-javascript-with-mevn-stack-video/9781789533118)
-----
*The $5 campaign         runs from __December 15th 2020__ to __January 13th 2021.__*

# Isomorphic JavaScript with MEVN Stack

This is the code repository for [Isomorphic JavaScript with MEVN Stack[Video]](https://mandrillapp.com/track/click/8294657/www.packtpub.com?p=eyJzIjoibUxrTXlHcXJtQkFuSFhoQkF3V3RWODhtX0w4IiwidiI6MSwicCI6IntcInVcIjo4Mjk0NjU3LFwidlwiOjEsXCJ1cmxcIjpcImh0dHBzOlxcXC9cXFwvd3d3LnBhY2t0cHViLmNvbVxcXC93ZWItZGV2ZWxvcG1lbnRcXFwvaXNvbW9ycGhpYy1qYXZhc2NyaXB0LW1ldm4tc3RhY2stdmlkZW9cIixcImlkXCI6XCI2MDRkMzRjNmFmNTM0NDE3OTM1ZWMzNjAzOWE5YWZhOVwiLFwidXJsX2lkc1wiOltcImNiMTg2ZGQ4NzhmMDBjNjE4OGYwNWRmNTJjZGM0YjRkZWU4OTcyOTNcIl19In0), published by [Packt](https://www.packtpub.com/?utm_source=github). It contains all the supporting project files necessary to work through the video course from start to finish.
## About the Video Course
Do you want to build scalable, high-performance web apps? Harness the power of the JavaScript ecosystem to run, build, and test your full-stack applications. This course will guide you in building a full-stack app using Isomorphic JavaScript frameworks. You'll build web applications using the MEVN Stack in JavaScript.
This course takes you on an end-to-end journey, building on your basic skills and taking you to advanced skill set in no time with Vue.js while deploying enhanced web apps to a production environment.

<H2>What You Will Learn</H2>
<DIV class=book-info-will-learn-text>
<UL>
<LI><SPAN style="BACKGROUND-COLOR: transparent">Creating and using variables in smart contracts</SPAN> 
<LI>Use Node.js to set up a project environment ready for MEVN development
<LI>Create Single Page Applications using the Vue.JS command-line Interface Tool
<LI>Manage application state with Vuex Library
<LI>Deploy a production-ready application to the cloud	
<LI>Implement application routing with Vue.js Router
<LI>Build a secure, RESTful API with Express.JS, including user authentication
<LI>NoSQL Database management with MongoDB
<LI> </LI></UL></DIV>

## Instructions and Navigation
### Assumed Knowledge
To fully benefit from the coverage included in this course, you will need:<br/>
This course targets web and JavaScript developers who want to create advanced, scalable web applications using Vue.js. If you are a developer, want to create web applications, and have a keen interest in using JavaScript on the frontend and backend, this Isomorphic JavaScript course is for you.
### Technical Requirements
This course has the following software requirements:<br/>
SETUP AND INSTALLATION
This will vary on a product-by-product basis, but should be a standard PI element for ILT products. This example is relatively basic.

Minimum Hardware Requirements
For successful completion of this course, students will require the computer systems with at least the following:


OS: Windows/Linux/MAC OS



Processor: N/A



Memory:  GB RAM or above



Storage: 512 GB internal Solid State Drive (SSD) or 1 TB internal HDD


Recommended Hardware Requirements
For an optimal experience with hands-on labs and other practical activities, we recommend the following configuration:


OS: Windows/Linux/MAC OS



Processor: Intel Core i5-6 or Equivalent



Memory: 8 GB RAM or above



Storage: 512 GB internal Solid State Drive (SSD) or 1 TB internal HDD


Software Requirements

Operating system: Windows/Linux/MAC OS



Browser: Google Chrome Latest Version



Atom IDE, Latest Version/Visual Studio Code Latest Version



Node.js LTS 8.9.1 Installed



## Related Products
* [Tips, Tricks, and Techniques for Node.js Development [Video]](https://www.packtpub.com/web-development/tips-tricks-and-techniques-nodejs-development-video?utm_source=github&utm_medium=repository&utm_campaign=9781789343434)

* [Web Development with Node.js, MongoDB and Express [Video]](https://www.packtpub.com/application-development/web-development-nodejs-mongodb-and-express-video?utm_source=github&utm_medium=repository&utm_campaign=9781786463425)

* [Advanced Server-Side Programming with Node.js [Video]](https://www.packtpub.com/web-development/advanced-server-side-programming-nodejs-video?utm_source=github&utm_medium=repository&utm_campaign=9781787289963)



### Prerequisites

[NodeJS](https://nodejs.org)
[MongoDB](https://www.mongodb.com/)
[VueJS](https://vuejs.org/)
[VueJS CLI](https://cli.vuejs.org/)

### Installing

First, install all of the NodeJS dependencies (located in **package.json** file)
```
$ npm install
```

## Development

To begin development, you must start the NodeJS Server and VueJS Server. In addition, you need to compile the server files with the Babel Compiler.

### Run all development scripts in one


```
$ npm run dev
```

Alternatively, you can run each of the three scripts individually:

### Compile NodeJS Server files

```
$ babel dev-server --out-dir prod-server --watch
```
### Start NodeJS Server
```
$ node prod-server/index.js
```
### Start VueJS Development Server
```
$ vue-cli-service serve
```
## Common Issues

 - Unable to refresh in production
	 - If you are unable to refresh in production mode, ensure your index.js server file has:

```
app.get('*', (req, res)...
```
instead of:
```
app.get('/')
```

 - Cannot Set Environment
	 - Windows users will need to adjust the application scripts in **package.json** from:
```
export NODE_ENV=production
```
to
```
set NODE_ENV=production
```

## Built With

* [MongoDB](https://www.mongodb.com/) - Open Source NoSQL Database
* [ExpressJS](https://expressjs.com/) - NodeJS Web Framework
* [VueJS](https://vuejs.org/) - JavaScript UI Framework
* [NodeJS](https://nodejs.org/en/) - JavaScript runtime built on Google Chrome's V8 JavaScript engine


## Author

* **David Acosta** - [Portfolio](http://www.acostadavid.com/),  [YouTube](https://www.youtube.com/channel/UCKrHQelsiwrVUZ7v9nLCwgA)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
