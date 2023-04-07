const AWS = require('aws-sdk');

const rds = new AWS.RDS({
  region: 'us-east-1', // Replace with your RDS region
  accessKeyId: 'AKIARKUMQRU7LRG33NE4',
  secretAccessKey: 'hMItUj8gghvwSAF6FVgySJRvZXU1R+AoTXBI2kwa',
});