Task
Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

Given the first element a0, find the length of the sequence.

Example
For a0 = 16, the output should be 9

Here's how elements of the sequence are constructed:

a0 = 16

a1 = 1² + 6² = 37

a2 = 3² + 7² = 58

a3 = 5² + 8² = 89

a4 = 8² + 9² = 145

a5 = 1² + 4² + 5² = 42

a6 = 4² + 2² = 20

a7 = 2² + 0² = 4

a8 = 4² = 16, which has already occurred before (a0)

Thus, there are 9 elements in the sequence.

