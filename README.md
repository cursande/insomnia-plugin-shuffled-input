# insomnia-plugin-shuffled-input

A plugin for inserting randomised subsets of arrays as inputs for the [Insomnia REST Client](https://insomnia.rest/).

It can be useful to be able to carry out property-based testing during API development, and catch more subtle issues that application test suites may not uncover alone.

![Screen Shot 2020-12-04 at 1 25 54 pm](https://user-images.githubusercontent.com/30610148/101113805-4512ee80-3634-11eb-843d-05ef4234546c.png)

## Usage

**Number of values** 

this will determine how values from your total set will be inserted as input. This number can be higher than the total number of values in your fixture file.

**Path to JSON fixture**

Select the path to the given fixture for this particular input. Multiple files can be used for multiple tags in a single request.

**As string?**

Determines whether the resulting input data will be read as JSON or as a simple string. For instance if your fixture file contains a series of numbers:

```json
[
  123,
  456,
  789
]
```

If as string? is toggled on then the output will be `123, 456, 789`.

