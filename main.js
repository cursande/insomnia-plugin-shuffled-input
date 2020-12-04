const fs = require('fs').promises;

const templates = [
  {
    name: 'ShuffledInput',
    displayName: 'Shuffled Input',
    description: 'Provide a randomised subset of inputs',
    args: [
      {
        displayName: 'Number of values',
        defaultValue: 1,
        type: 'number'
      },
      {
        displayName: 'Path to JSON fixture (must be top-level array)',
        type: 'file'
      },
      {
        displayName: 'As string? (e.g. if inserting inputs as url-encoded params)',
        type: 'boolean'
      },
    ],
    async run(context, n, fixturePath, asStringEnabled) {
      const fixture = await fs.readFile(fixturePath, 'utf8');
      const arr = JSON.parse(fixture);

      // fisher-yates shuffle
      var m = arr.length, t, i;

      while (m) {
        i = Math.floor(Math.random() * m--);

        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
      }

      if (asStringEnabled) {
        return JSON.stringify(arr.slice(0, n).toString());
      } else {
        return JSON.stringify(arr.slice(0, n));
      }
    }
  }
];

module.exports.templateTags = templates;
