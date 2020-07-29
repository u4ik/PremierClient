let APIURL = '';
let serverPort = 3000
let frontEndUrl = 'premier-client.herokuapp.com'

// alert(window.location.hostname)

// switch (window.location.hostname) {
//     case 'localhost' || '127.0.0.1':

//         APIURL = 'http://localhost:' + serverPort;
//         // alert(window.location.hostname)
//         break;
//     case 'premier-client.herokuapp.com':
//         APIURL = "https://premier-server.herokuapp.com"
//         break;
//     case '':

//         APIURL = 'http://' + window.location.hostname + ":" + serverPort
//         break;

// }


if (window.location.hostname.includes('localhost') || window.location.hostname.includes('127.0.0.1')) {
    APIURL = 'http://localhost:' + serverPort;
} else if (window.location.hostname.includes(frontEndUrl)) {
    APIURL = "https://premier-server.herokuapp.com"
} else if (window.location.hostname.includes('192')) {
    APIURL = 'http://' + window.location.hostname + ":" + serverPort
}


export default APIURL;