### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications
- React is a full stack framework for modern web applications
- React is a flexible library that plays the role of V in an MVC framework

 
 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.
 
 
 //Your Answer
 
 
 //Googled Answer
 
 
#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?
 
 
 //Your Answer
 
 
 //Googled Answer
 
 
#### 4. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes {
      constructor(props){
        super(props)
        this.state = {
          recipes: 
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}
      
        }
      }

      render() {
    
        return (
    
          let recipes = this.state.recipes.map(function(recipe){
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })
    
          <ul>
            {recipes}
          </ul>
        );
      }
    }

    export default Recipes;

#### 5. Name three html form input types. (NOTE: text is the default type - so it doesn't count in this case)
 
 //Your Answer
 
 
 //Googled Answer
 
 
 #### 6. What happens when we call setState()?
 
 //Your Answer
 
 
 //Googled Answer
 
 
 #### 7. What is the difference between component state and props? Your answer should include a short explanation of both.
 
 
 //Your Answer
 
 
 //Googled Answer
 
   
#### 8. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.


#### 9. Write the Rules of React we talked about in class and try to give one or two reasons for each rule about why it is important or good to follow the rule.

#### 10. Do at least 5 exercises on Free Code Camp, starting with this one: https://www.freecodecamp.org/challenges/declare-javascript-objects-as-variables

