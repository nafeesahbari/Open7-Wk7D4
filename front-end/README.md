# Key Questions:

## React Day 3
- Why are React form inputs called controlled inputs?
	- With controlled inputs, we are able to control what happens to our inputs/components depending on what has been put into the form
	- normally in an HTML form, the input fields themselves have their own internal state, but we want to make sure we know exactly what is being entered into our form and have a central source of truth of what our values are, and when they’re being changed
- Why might controlled inputs be useful?
  - have you seen forms in react where if you type something wrong, a custom animation or something pops up?
  - our React components can react immediately to updated inputs in however way we want
  - this is especially helpful for validation of inputs, auto suggests, anything that could happen outside of the form 
- Why might we want to use state as a central source of truth, instead of local variables?
	- more than one component can work from the same source of data - if each component has its own local variables, this can cause data misalignment
	- updating state in one place can apply changes universally - any components utilizing the most up-to-date state will have newest changes
- When submitting a form with controlled inputs, what steps should we include in our submit handler?
  - prevent default behavior!!!
  - any operations that you need to do with the inputted data (e.g. send an API request, add the data to an array of already existing data)
  - clear the form state
