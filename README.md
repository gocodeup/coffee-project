# Coffee Project

Congratulations! You have landed your first development job! You have inherited
a project from Fancy Coffee Company&copy;, and they want you to make
improvements to it.

## Setup

1. Fork this repository (Click on the "Fork" button on the top right of this
   page)
1. Clone the forked repository
1. Open up the html file and check out the existing application
1. Read through the code and understand the existing code structure

## TODO

- Update the html

    Tables are a little old school, you need to refactor the code so that each
    coffee is displayed in a `div` that contains a heading displaying the coffee
    name, and the type of roast in a paragraph. Don't display the ids, these are
    only for our application's internal use

- When the page loads, the coffees should be sorted by their ids in ascending
  order

- Add functionality to search through the coffees by name, and display only the
  coffees that match the provided search term (You will need to add an input
  field to the existing form for this)

- Add functionality to update the displayed coffee as the user types into the
  search box, or as soon as they select an option from the select.

**Bonus**

- Add an option to select all roasts for roast type

- Make your name search case insensitive

- Allow the user to add new coffees to the page

    Create another form on the page that has an input for the coffee name, and
    a select to choose the coffee roast. When the form is submitted, the new
    cofee should appear on the page. (*Note that any new coffees you add will
    be lost when you refresh the page, for an extra challenge, research
    `localStorage` and see if you can find a way to persist the data*)

- Style it!

    The page looks pretty plain as it is, and the refactoring we did above to
    use `div`s for coffees should give us more flexibility in styling. (*Hint:
    the styling shown in the example below can be achieved purely with bootstrap
    classes, that is, without custom CSS*)

## Example

Here is an example demonstrating the above functionality. Your application might
look different, but should have the same features.

![Coffee Project Demo](demo.gif)

README DIRECTIONS (slacked from zached)
- Create a branch with your name
- Do you work in this branch
- Before switching branches, pulling, or pushing, make sure you have committed all changes
- Checkout the information on working with git in teams in the [curriculum](http://java.codeup.com/git/working-in-teams/)

## I need to....

#### Share my work with my teammate

( 1 ) Make sure your work is added and committed

( 2 ) Push your branch

`git push origin your-name`

( 3 ) Open a Pull Request
* On GitHub.com, open a Pull Request for your branch
* When creating the pull requeset, make sure you choose your organization's repo for the "base fork"

( 4 ) YELL AT HER to look over IDIOT and merge your pull request

### Get the most recent version of the project (i.e. pull down a change your teamate made)

Make sure you have added and committed any changes you are currently working on.

1. Switch to your master branch

    ```
    git checkout master
    ```

1. Update your master branch

    ```bash
    git pull origin master
    ```

1. Switch back to your personal branch

    ```bash
    git checkout your-name
    ```

1. Merge your master branch

    ```bash
    git merge master
    ```


## COFFEE MACHINE OVERFLOW
**(but workflow, don't be dumb**
1. bootstrap for script, submit button, jumbotron Coffee!
1. grid work work work work
1. multi-select list, form input, 
1. each coffee in <div>
1. addEventListeners 
1. add functions for object array of - var = coffees
1. 


