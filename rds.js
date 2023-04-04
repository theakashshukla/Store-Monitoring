const AWS = require('aws-sdk');

const rds = new AWS.RDS({
  region: 'us-east-1', // Replace with your RDS region
  accessKeyId: 'your_access_key_id',
  secretAccessKey: 'your_secret_access_key',
});