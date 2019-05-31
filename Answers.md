# Answers

1.  **What is React JS and what problems does it try and solve?**

   The reactjs.org site says that:

  > React is a JavaScript library for building user interfaces. 

  Which is nice and concise, essentially React is the 'view' layer of Model/View/Controller method of web development. 
  For me it helps to go a little further and describe a little bit of what React actually does when defining it, so I like to say:
  > There are so many things that websites can do that don't make sense to pass back and forth to the server each time, there is just a ton of capability in browsers that can shoulder this burden for us locally on each client's machine. React helps us streamline the JS processes of managing memory storage in our webapps so that develping pwerful processes for the browser is something that is readily accessible to many developers in a common language.

  ---

2.  **What does it mean to _think_ in react?**
  
   I like to take the "Thinking in React" section of their docs very literally when trying to break down a project.
    
      * Starting with a mock of the app, break the UI into a component Hierarchy.
      * Build a Static version in React
      * Identify UI State
      * Identify where State should live
      * Add invernse data flow

---

3.  **Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.**
  
   Typically, we will only use Class/Stateful components when we need to store state or add lifecycle methods, Functional/Presentational components are handy and easy to write when we just want to render views, with or without props.

---

4.  **Describe state.**
  
   State is where our data lives.

   ---

5.  **Describe props.**
  
   Props are how we move our data through our components.
