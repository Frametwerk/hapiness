# hapiness
Building a REST app using Hapi

Hapi Functionality

Happy is required but instead of instantiating a happy app, you create a new Server and specify the port. In Express and Koa we get a callback function but in Hapi we get a new server object.

The HTTP method can handle the typical requests GET, PUT, POST, DELETE, and * which catches any route. The handler is passed a reference to the request object and must call reply with the containing payload. The payload can be a string, a buffer, a serializable object, or a stream.

Hapi also wanted to improve error handling which it does without any code being written on the developers end. If you try to hit a route not described in the REST API it will return a JSON object with a status code and error description.

PROS

Hapi chooses configuration over code. Because it is backed by WalmartLabs it has been tested and companies are confident to run their applications off of it.

CONS
Aimed towards bigger and more complex applications. Large amount of boiler plate code for a simple application. There are less examples of available middleware putting more pressure not he developer.
