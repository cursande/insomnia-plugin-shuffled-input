# insomnia-plugin-shuffled-input

A plugin for inserting randomised subsets of arrays as inputs for the [Insomnia REST Client](https://insomnia.rest/).

It can be useful to be able to work with many dynamic inputs/examples during API development, and avoid missing more subtle issues that are hidden by the specific data you are testing with.

![Screen Shot 2020-12-07 at 5 33 41 pm](https://user-images.githubusercontent.com/30610148/101317338-6b45c200-38b2-11eb-93ff-87da5a0f263b.png)

## Usage

**Type**

Determines how the resulting subset will be emitted. For instance if your fixture file contains a series of numbers:

```json
[
  123,
  456,
  789
]
```

The `basic` output will be `123, 456, 789`. If you for instance want this value to be a string, just insert the shuffled tag between `""` marks.

Similarly, if selecting JSON, if you want a single object to be the result you will need to wrap it in an array `[]`, otherwise it is automatically wrapped.

**Read fixture**

Select whether you want to enter in possible values inline or read from a JSON file.

**Path to JSON fixture**

Enter valid JSON array directly here. 

**Path to JSON fixture**

Select the path to the given fixture for this particular tag.

**Number of values** 

this will determine how values from your total set will be inserted as input. This number can be higher than the total number of values in your fixture file.
