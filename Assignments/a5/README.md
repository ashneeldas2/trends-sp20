# A5

For A5, you'll be building a React App that utilizes conditional rendering
and the concept of lifting state up.

Sam is trying to build a house. His budget is limited to 5000 square feet
of area, but he has the option between building a regular square, regular pentagon, 
or regular hexagon shaped house. 

The company building his house determines the area of the house based on the 
length of one side, because they don't want their customers to do the calculations
in case they mess up. Sam is smart, so he is going to use an app to do some 
work for him.

NOTE: You may use Math.floor to deal with floating point errors when
displaying the area.

## Part 1 

In App.js, create a state that contains the side length of the house. This will 
later be modified by the components representing a square, pentagon, and hexagon.
Also have App.js display the side length. 

## Part 2

Create a Square component, a Pentagon component, and a Hexagon component. Have
an input field in each of these components to allow the user to input the desired
area of their house. 

## Part 3 

Write a function in App.js that will change the value of the side length, and 
thus accordingly change the child components. 
When the value of the input field (area) for any of the components changes, recompute
the side length based on that new area. Then, pass it up to App.js and have it
update the other components based on the new side length. 

For example, if I change the square component to have an area of 400, the side length
will be computed to be 20, and then the pentagon area will be 688.19 and the hexagon
area will be 1039.23 (but these can be rounded down for displaying purposes). 

## Part 4

Display a message to the user in each component which states if Sam can buy 
the house given his constraints (area < 5000). Use conditional rendering to 
display a message like "Sam can buy the house" or "Sam can not buy the house". 

## Submission

Submit to CMS a zip file of everything in your project (`create-react-app`) directory but **remove node_modules** . _Failure to remove_ `node_modules` _will result in a **10 point** deduction_.

<br />

<img src="BEARRRR.png" width="75px">
