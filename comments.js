// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');
const comments = require('./comments');

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  const method = req.method;
  