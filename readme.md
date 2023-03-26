# VSFramework 🛠️
> Note: This "framework" has just been developed to display conceptual understanding of how one can display static assets on a liquid galaxy cluster through chromium. It is not optimized or modularized, it has literally been made in like 5-6 hours. Only upto 3 screens/browsers have been tested that too on just a local deployment.

## Project structure 🗺️
The project has a very simple structure, it is divided into 2 parts, the client and the server. 

### Client ✨
The client as name implies is the shared frontend app that can be used by everything, the slave machines, the master machine, the controller, everything. It is a SvelteKit app for simplicity purposes while maintaing a clean code architecture. 
The lib folder sets up the necessary configs, stores and other util functions that may be used in the main app.
The router folder follows normal sveltekit folder structure, the controller can be accessed from the root route and the views can be opened up from views/["screenId"]. The screen ID must be less than that configured in the lib/config file and greater than 0. 

### Server 🤖
The server manages most of the logic. It is a normal ExpressJS + Socket.io server, sockets help maintain consistency among the clients (image change event) and web requests are used for major data communication (image change routes). The program structure is so that the whole logic has been abstracted away to just 3 objects, the object of window containing stuff like the resolution on one display, the image being displayed and an object containing array of the individual pieces of image to display on each screen. 

### Feature Checklist ✅
- [x] Displays Images
- [x] Controller 
- [x] Updates on controller interrupt 

### Dev Checklist 
- [x] Abstract control
- [x] Keep it simple, stupid
- [x] Don't Repeat yourself

### Known Issues 🛑
1. cors not handling request from other machines
2. a little padding on the top and left on initial load
3. long reload time after switch
4. sometimes image is not displayed on image switch
5. general efficiency, obtaining ideal performance

### Future nice to haves 🧐🤔
- [ ] Video player? 

### Improvements 🤓
The controller app can be vastly improved if backend logic is implemented to send list of images available, a image switcher can be made which switches the images on the display to the image clicked on the controller.