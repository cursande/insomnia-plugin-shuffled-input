# insomnia-plugin-shuffled-input

A plugin for inserting randomised subsets of arrays as inputs for the [Insomnia REST Client](https://insomnia.rest/).

It can be useful to be able to carry out property-based testing during API development, and catch more subtle issues that application test suites may not uncover alone.

![Screen Shot 2020-12-04 at 3 15 59 pm](https://user-images.githubusercontent.com/30610148/101121202-ab533d80-3643-11eb-98fc-40b9eb01862a.png)

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

**Path to JSON fixture**

Select the path to the given fixture for this particular input. Multiple files can be used for multiple tags in a single request.

**Number of values** 

this will determine how values from your total set will be inserted as input. This number can be higher than the total number of values in your fixture file.
