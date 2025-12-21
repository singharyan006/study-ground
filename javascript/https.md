# VERY IMPORTANT NOTES

1. Here, we are going to discuss what is `HTTP`,
2. How does it work?


## What is `HTTP` and `TCP`?
It stands for Hyper Text Transfer Protocol which basically is a set of rules which manages the requests and responses between the server and the client over the internet. Now, `TCP`is another protocol which stands for Transfer Control Protocol. It is resposible for managing the contents over the channel established between the server and the client.

TCP is used to manage many types of internet connections in which one computer or device wants to send something to another. HTTP is the command language that the devices on both sides of the connection must follow in order to communicate.

> Resources here: [Refer this for more info](https://www.codecademy.com/article/what-is-http#heading-what-is-http)

---

## What's an HTTP Request?
Basically, request is a strcutured message sent by the client(like applications, API etc) to the server for getting resources like webpage, media and on it goes. The request includes stuff like
1. `request` line(to specify the type of request)
2. `headers` (for metadata about the request which may include things like `host`, `user-agent`, `Accept`, `Authorization`).
3. `body` (this includes the data sent to the server. for instance while submitting forms userid and password are sent in this)

```http
GET /index.html HTTP/1.1
```
----

## Types of HTTP Requests

- `GET`: Retrieves data from the server (e.g., loading a webpage).
- `POST`: Sends data to the server.
- `PUT`: Updates existing data on the server.
- `DELETE`: Removes specified data from the server.
- `HEAD`: Retrieves only headers of a resource, without the actual content.
- `PATCH`: Applies partial modifications to a resource.
- `OPTIONS`: Describes communication options available for a resource.

---

## How does this HTTP thing work?
When we type in a url in the browser, we are basically instructing it to establish a channel between our system the client and the server which responds to that URL.

When the client tries to look for the service, let's say he puts google.com then the `DNS` uses up the domain to locate the IP of the server and the connection channel between the two is established. Later on, as per the requests (like GET, PUT) the data is fetched from the server.

Once the connection is established, time to make an HTTP request; let's say GET request to which the server responds with the status codes
> Refer this: [How HTTP request work?](https://www.codecademy.com/article/what-is-http#heading-how-http-requests-work)

---

