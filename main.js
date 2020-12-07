const fs = require('fs').promises;

const formatJsonOutput = (arr, n) => {
  if (n == 1) {
    return arr[0];
  } else {
    return arr.slice(0, n);
  }
}

const fixtureData = async (readFrom, inlineFixture, fixtureFilePath) => {
  if (readFrom == 'inline') {
    return JSON.parse(inlineFixture);
  } else {
    const fixture = await fs.readFile(fixtureFilePath, 'utf8');

    return JSON.parse(fixture);
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
        displayName: 'Read fixture',
        type: 'enum',
        defaultValue: 'inline',
        options: [
          {
            displayName: 'Inline',
            value: 'inline'
          },
          {
            displayName: 'From file',
            value: 'fromFile'
          },
        ]
      },
      {
        displayName: 'Inline JSON fixture',
        type: 'string',
        hide: args => args[1].value != 'inline'
      },
      {
        displayName: 'Path to JSON fixture (must be top-level array)',
        type: 'file',
        hide: args => args[1].value != 'fromFile'
      },
      {
        displayName: 'Number of values',
        defaultValue: 1,
        type: 'number'
      }
    ],
    async run(context, type, readFrom, inlineFixture, fixtureFilePath, n) {
      const arr = await fixtureData(readFrom, inlineFixture, fixtureFilePath);

      // fisher-yates shuffle
      var m = arr.length, t, i;

      while (m) {
        i = Math.floor(Math.random() * m--);

        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
      }

      switch (type) {
        case 'basic':
          return arr.slice(0, n);
        case 'json':
          return JSON.stringify(formatJsonOutput(arr, n));
        default:
          throw new Error(`Unknown type: "${format}"`);
      }
    }
  }
];

module.exports.templateTags = templates;
