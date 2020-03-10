## Assignment 4

In this assignment, we finally get to work on frontend!!! You will be 
developing a simple todo list application which allows you to create a list of
tasks. 

## Part 1: Task component 

Create a component, Task, that represents a task in your todo list. It will be
passed a prop called `desc` that represents the description of the task. 
The description should be in a list item and have a checkbox to indicate
the task is done.

You can test this component by importing the Task component 
in App.js and creating a component:

`<Task desc="Finish web dev homework" />`

## Part 2: Adding tasks

Create a component, TaskList that contains ALL of your tasks. This will do the
following: 

- Maintain a state containing a list of `items`, which are 
just strings describing your tasks.
- Have an input field which allows you to add a new task to the list.
- Have a button which allows you to submit the new task and 
add to the list of items.

## Part 3: Adding list to App.js

Initialize the TaskList in App.js. This is as simple as 
importing the TaskList and creating a component: 

`<TaskList />` 


<image src="todo.gif">
## Part 4: Optional challenge

Make it so that checking the checkbox next to an item
will remove the item from the todo list. 