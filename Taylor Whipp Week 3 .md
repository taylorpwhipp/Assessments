### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs) - THIS IS A LIE
- React is a modern, efficient answer to complex UI applications
- React is a full stack framework for modern web applications
- React is a flexible library that plays the role of V in an MVC framework

 
 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.
 Smart components store the majority of function and method information.
 Dumb components recieve state information from methods used in the smart component and are passed as props.
 
 
 //Googled Answer
 
 
#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

 
 
 //Your Answer
 Creates a package in node modules which lists all dependenceies. your package.json will be updated
 
 //Googled Answer
 
 yarn add saves a package not only to node_modules but also adds it to the list of dependencies in package.json. Think of it like yarn does not install a package into node_modules directory, it adds a package to your project
 
 
#### 4. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes < Component{
      constructor(props){
        super(props)
        this.state = {
          recipes: ""
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}                
        }
        let recipes = this.state.recipes.map(function(recipe){
        return(
        <li key={recipe.name}>{recipe.name}</li>
        )
        })
      }

      render() {
    
        return (
    

    
          <ul>
            {recipes}
          </ul>
        );
      }
    }

    export default Recipes;

#### 5. Name three html form input types. (NOTE: text is the default type - so it doesn't count in this case)
 number, submit, range
 //Your Answer
 
 
 //Googled Answer
 
 
 #### 6. What happens when we call setState()?
 
 //Your Answer
We call a functiion that can alter our state variable (assuming it's been declared) that we can use to update state 
 
 
 //Googled Answer
 
 
 #### 7. What is the difference between component state and props? Your answer should include a short explanation of both.
 
 component state is something which would change in our application: i.e a number of times something is clicked, whether something is true or false, or whether a term matches.
 It is something that will be dynamically updated and rendered.
 
 props or properties, are attributes that should remain the same in app development, but could be changed from the parent component through state
 
 
 
 //Your Answer
 
 
 //Googled Answer
 
   
#### 8. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

Tic Tace Toe was interesting because neither my partner or myself were execptionally good at React intitially.  I struggled with the passing of state and props a lot when we initially started, but then had an aha moment where I understood. I'm also not the best teacher, and trying to explain that level of abstraction was very difficult for me and something that I feel like I failed at.


#### 9. Write the Rules of React we talked about in class and try to give one or two reasons for each rule about why it is important or good to follow the rule.

Never update State directly, always use setState()  

State is for values that change, Props is for values to pass to a child component, constants should be set outside the component
don't implicitly chanage state: create a copy of variable which stores state changes

Never alter the DOM directly, always operate on a value in state

I'm honestly kind of confused about the DOM but my understand is that the DOM is what is actually running/ displaying our code so messing with it directly could affect how our code is displayed/ rendered

Only call setState once per method or render cycle
Set State should not be updated multiple times becaue the method would only recognize the first instance




#### 10. Do at least 5 exercises on Free Code Camp, starting with this one: https://www.freecodecamp.org/challenges/declare-javascript-objects-as-variables

