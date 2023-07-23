const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

const app = express();

// Parse request body as JSON
app.use(bodyParser.json());

// Define API endpoint for inactive periods
app.get('/api/v1/stores/:store_id/inactive_periods', (req, res) => {
  // Extract store ID from request parameters
  const { store_id } = req.params;

  // Extract start and end date from query parameters
  const { start_date, end_date } = req.query;

  // Simulate inactive periods data for the specified store ID
  const inactivePeriods = [
    {
      start: '2023-04-01T13:00:00Z',
      end: '2023-04-01T15:00:00Z',
    },
    {
      start: '2023-04-02T20:00:00Z',
      end: '2023-04-02T22:00:00Z',
    },
  ];

  // Filter inactive periods by start and end date
  const filteredInactivePeriods = inactivePeriods.filter((period) => {
    const periodStart = moment(period.start);
    const periodEnd = moment(period.end);
    const startDate = moment(start_date);
    const endDate = moment(end_date);
    return periodEnd.isAfter(startDate) && periodStart.isBefore(endDate);
  });

  // Return inactive periods in the specified time range
  res.json({
    store_id,
    inactive_periods: filteredInactivePeriods,
  });
});

app.get('/' , (req, res) => res.json({msg: 'Welcome to the API'}));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

