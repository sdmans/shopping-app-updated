# shopping-app
*A simple grocery shopping application for roommates*

Currently in the planning phase for this new project

**Goals**
To create an app that lets roommates create a shared list of items they need for coordination and convenience!

**Features**
- Create a list of items for a shopping list that users can modify
- Create an account system for users to add their "Household"
- Items retrieved from an API, and users can add the prices manually

Extra:
Users can create a custom recipe that automatically adds all items to the list.
Create way for users to add and just prices for these items and store those values.
Create an item history list for users to refer to rather than re-adding items

*Item Model* - What should each item object look like?

Item Name: String\
Description: String\
Link?: String\
Notes?: String\
LastOrdered?: String

*User Model* - The type of information a User's account will have.
List of roommates
List of recently purchased items
Favorites list
Recipes

*Concepts and Designs*\
**View List**\
Main Page\
Should include a description of the app and an item list view. 
May also include recently posted and high priority items.
View should vary based on whether a user is signed in or not.
Will include 3 options for creating a list, creating recipes and account management.
Signed out view could include instructions.

Registration Page\
A registration form where users can create an account to use the application.
This should include account creation via gmail and Facebook.

Account Setup Page\
This should include a way for users to add roommates with a form.
Should allow you to add favorite store locations with addresses.
Maybe give intial information about the roommate.


Login View\
A log in page for users to sign in when they already have credentials.
Should allow you to login via gmail and Facebook accounts.

Item Submission Form\
Includes fields for any data the user is required to submit for their item.

Profile View\
This should allow to view current roommates, recently purchased items and recipes.

Here's what I'm planning to use!

* Angular | Framework
* Firebase | Database
* Firebase Auth with RXJS | Authentication
* Form Data | Data
* Firebase |  Hosting
* Angular Material | Design Framework
* Figma, Gravit Designer, or hand drawn | Initial UI designs

Plan: Initial Setup for Project Start
* [x] Finish ReadMe file with initial details about the project
* [x] Create MVP for project. What do you need to get the functionality for the project working and what can wait?
* [x] Unable to locate API, will be using manual data.
* [x] Create basic angular project connected to Firebase
* [ ] Add Angular Material to project
* [ ] Create initial designs for the project

Minimum Viable Product
At a minimum, the app should do the following:
* Create an account and login
* Allow users to create a list of items they need from the store with a form
* Create a list of roommates to select from in the account
* Store items in database to be accessed later to avoid repetition

