'use strict';

const slackClient = require('../server/slackClient');
const service = require('../server/service');
const http = require('http');
const server = http.createServer(service);

const slackToken = SLACK_TOKEN_API; // REPLACE WITH YOUR TOKEN FROM SLACK API WEBSITE
const slackLogLevel = 'verbose';

const rtm = slackClient.init(slackToken, slackLogLevel);
rtm.start();

console.log(rtm);
server.listen(3000).on('listening', ()=> {
    console.log('works!!');
});