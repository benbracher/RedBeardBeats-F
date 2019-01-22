let switchUrl = '';

switch (window.location.hostname) {
    // this is the deployed angular application
    case 'redbadgebeats.herokuapp.com':
        // this is the full url of your deployed API
        switchUrl = 'https://rbbeatsapi.azurewebsites.net'
        break;
    default:
        // this is the local host name of your API
        switchUrl = 'https://rbbeatsapi.azurewebsites.net';
}
export let environment = {
  serverUrl: switchUrl,
  production: true
}