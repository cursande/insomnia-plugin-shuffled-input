const fs = require('fs').promises;

// TODO: Maybe would be nicer to ensure that wrapping is always required i.e. remove top level array markers
const jsonSubset = (arr, n) => {
  if (n == 1) {
    return arr[0];
  } else {
    return arr.slice(0, n);
  }
}

const templates = [
  {
    name: 'ShuffledInput',
    displayName: 'Shuffled Input',
    description: 'Provide a randomised subset of inputs',
    args: [
      {
        displayName: 'Type',
        defaultValue: 'basic',
        type: 'enum',
        options: [
          {
            displayName: 'Basic value',
            value: 'basic'
          },
          {
            displayName: 'JSON value (e.g. for inserting arrays of objects into request bodies)',
            value: 'json'
          },
        ]
      },
      {
        displayName: 'Path to JSON fixture (must be top-level array)',
        type: 'file'
      },
      {
        displayName: 'Number of values',
        defaultValue: 1,
        type: 'number'
      }
    ],
    async run(context, format, fixturePath, n) {
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

      switch (format) {
        case 'basic':
          return arr.slice(0, n);
        case 'json':
          return JSON.stringify(jsonSubset(arr, n));
        default:
          throw new Error(`Unknown format: "${format}"`);
      }
    }
  }
];

module.exports.templateTags = templates;
