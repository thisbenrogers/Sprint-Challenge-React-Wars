# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    > React JS is a UI library that helps us manage how data is processed and viewed in the browser. It makes coding front end much more enjoyable and reliable by taking out a lot of the tedium in creating DOM interfaces with VanillaJS

1. What does it mean to think in react?

    > 1. seperate app into components
    > 1. build a static verison of app
    > 1. decide which components process state
    > 1. identify state and where it lives
    > 1. add inverse data flow or hooks

1. Describe state.

    > State is where (in our app) the data lives

1. Describe props.

    > Props is how our data gets to where we need it

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

    > Side effects are things that affect other things outside the scope of the function currently being executed. In our current studies, we use the `useEffect()` hook to manage and sync these effects.
