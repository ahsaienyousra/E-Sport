const https = require('https');

export default (req, res) => {

    /* URL without /api prefix */
    const url = req.url.substring(4, req.url.length);

    /* Default token if not provided */
    var apiToken = req.headers['authorization'];
    console.log({url, apiToken});
    if(!apiToken) {
        apiToken = 'Bearer REPLACE_WITH_API_TOKEN';
    }

    /* request params */
    const options = {
        host: 'api.pandascore.co',
        path: url,
        method: 'GET',
        port: 443,
        headers: {'Authorization': apiToken, 'Accept': 'application/json'}
        };

    /* CORS headers */
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');

    /* OPTION response for CORS */
    if ( req.method === 'OPTIONS' ) {
        res.status(200).json();
        return;
    }

    https.request(options, (resp) => {
        let data = '';

        /* forward headers to response */
        for(var key in resp.headers) {
            res.setHeader(key, resp.headers[key]);
        }

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            res.status(resp.statusCode).json(JSON.parse(data));
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
        res.status(500).json({error: err.message});
    }).end();
};
