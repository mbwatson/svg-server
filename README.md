# SVG Server

Proof-of-concept for SVG server.
The API is built with Express.

## API

Start SVG server.

```bash
./api $ npm start
```

Is everything okay?

```bash
./api $ curl http://localhost:3030/test
OK!
```

Get a bar chart.

```bash
curl http://localhost:3030/bar?values=34,376,512,9,120
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400px" height="400px" viewBox="0 0 400 400"> <style> .bar { transition: filter 250ms; } .bar:hover { filter: brightness(0.75); } </style> <g transform="translate(20 -20)">  <rect x="0" y="356.48" width="71" height="43.52" class="bar" fill="coral" stroke="white" strokeWidth="1" />  <rect x="72" y="-81.28000000000003" width="71" height="481.28000000000003" class="bar" fill="darkcyan" stroke="white" strokeWidth="1" />  <rect x="144" y="-255.36" width="71" height="655.36" class="bar" fill="salmon" stroke="white" strokeWidth="1" />  <rect x="216" y="388.48" width="71" height="11.52" class="bar" fill="darkred" stroke="white" strokeWidth="1" />  <rect x="288" y="246.4" width="71" height="153.6" class="bar" fill="lightslategrey" stroke="white" strokeWidth="1" />  </g> </svg>
```

## Sample Client

Run the sample web page fetching SVG from the API described above using some local HTTP server, such as

```bash
./client $ live-server
```

or

```bash
./client & python -m http.server
```

Visit the served page in your browser to see an SVG rendered from the API described above.

The page contains HTML like the following to grab the SVG and render it:

```html
<object type="image/svg+xml" data="http://localhost:3030/bar/?values=45,32,100,A,34,B,340">
  <img src="http://localhost:3030/bar/?values=45,32,100,A,34,B,340" alt="Not an SVG">
</object>
```