let APIURL = '';


switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        // alert(window.location.hostname)
        break;
    case 'premier-client.herokuapp.com':
        APIURL = "https://premier-server.herokuapp.com"

}


export default APIURL;