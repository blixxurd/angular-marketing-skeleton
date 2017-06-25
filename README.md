# AngularJS Marketing Site Skeleton

A simple single page webapp using routes to emulate the look and feel of a frontend "marketing" type site. Full features below. 

  - Use HTML5 Routes in AngularJS to provide URL routing wiothout using the hashtag format.
  - Bundled with a simple express server for easy and quick local development. 
  - Lightweight, simple, and super customizeable. 
  - Great for small marketing sites and landing pages. 

### Tech

This project uses a number of open source projects to work properly:

*Tech used for main frontend project*...
* [AngularJS] - HTML enhanced for web apps!
* [Zurb Foundation 6] - great UI boilerplate for modern web apps

*Tech Used for bundled test server...*
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework

### Installation

You need express installed for the local server.

```sh
$ npm install express
```

Once installed you can start the express server and start customizing the site. 
```sh
$ node server
```

Dev environment will now be available at http://localhost:8081/

Please note, I do not reccomend using the express servlet in a production setting. If on a production server, simply create a rewrite for all requests to go to your index.html.

### Development

I am actively developing this for my own use and will be updating this repo on occasion. If you want to contribute, please let me know! Please toss any questions to me on twitter [@whysoaaron]

### Todos
 - More vanilla modules (Mailchimp, Facebook, Twitter Feed, etc)
 - Create an npm install manifest file
 - More Comments




   [@whysoaaron]: <http://twitter.com/whysoaaron>
   [node.js]: <http://nodejs.org>
   [Zurb Foundation 6]: <http://foundation.zurb.com/>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Compass]: <http://compass-style.org>