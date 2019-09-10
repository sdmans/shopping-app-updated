# Shopping Application
*A simple grocery shopping application for roommates*

Currently implementing basic concepts for project and testing different approaches to project features.

**Goals**
To create an app that lets roommates create a shared list of items they need for coordination and convenience!

**Features**
- Create a list of items for a shopping list that users can modify
- Create an account system for users to edit their "Household"
- Users can add the prices manually

**Extra Features** \
Users can create a custom recipe that automatically adds all items to the list \
Create way for users to add and adjust prices for these items and store those values \
Create a recipe history list for users to refer to, rather than having them re-add items \

**Item Model - What should each item object look like?**

Item Name: String\
Description: String\
Link?: String\
Notes?: String\
LastOrdered?: String\
orderedBy: String

*User Model* - The type of information a User's account will have.
List of roommates
List of recently purchased items
Favorites list
Recipes

## Concepts and Designs
### Pages
**Main Page**\
Should include a description of the app and an item list view. 
May also include recently posted and high priority items.
View should vary based on whether a user is signed in or not.
Will include navigation options for creating a list, creating recipes and account management.
Signed out view could include instructions.

**Registration Page**\
A registration form where users can create an account to use the application.
This should include account creation via gmail and Facebook.

**Account Management Page**\
This should include a way for users to add roommates with a form.
Should allow you to add favorite store locations with addresses.
Maybe give intial information about the roommate.

**Login View**\
A log in page for users to sign in when they already have credentials.
Should allow you to login via gmail and Facebook accounts as well.

**Item Submission Form**\
Includes fields for any data that the user is required to submit for their item.

**Profile View**\
This should allow to view current roommates, recently purchased items and recipes.

**Create Recipe View**\
Contains a list of items that a user's favorited that they can select to then be added to a newly created list. Once selected, the items should all revert to being unselected with some kind of notification that the recipe has been created.

### Components
**Navigation Component**

**List Component**

**Detail Component**



## Project plan and Technology Outline
Here's what I'm planning to use!

* Angular | Framework
* Firebase | Database
* Firebase Auth with RXJS | Authentication
* Form Data | Data
* Firebase |  Hosting
* Angular Material | Design Framework
* Figma, Gravit Designer, or hand drawn | Initial UI designs

**Phase 1: Initial Setup for Project Start**
* [x] Finish ReadMe file with initial details about the project
* [x] Create MVP section of readme for project. What do you need to get the functionality for the project working and what can wait?
* [x] Unable to locate API, will be using manual data.
* [x] Create basic angular project connected to Firebase
* [x] Add Angular Material to project

**Phase 2: Create pages for initial project and test features**
* [x] Create the components listed above, including the main, list, account, profile, log in, and register components
* [x] Create list view using Angular Material
* [x] Create method to add and remove items to list with test data
* [x] Create initial account management view including roommates list and store locations
* [x] Create a way for users to view full details for an item. May be a separate item detail view
* [x] Create initial profile view and include a test item for created recipes that automatically adds items to a list
* [x] Create a separate page for creating recipes
* [ ] Create way for users to add roommates and prices to each item

**Phase 3: Clean up current forms and features, then implement database**
* [ ] Adjust forms so that they don't submit without the appropriate data and provide error feedback to users
* [ ] Prepare login form layout with additional login features for google and facebook
* [ ] Connect features to firebase to test concepts with observables


**Minimum Viable Product** \
At a minimum, the app should do the following:
* Create an account and login
* Allow users to create a list of items they need from the store with a form
* Create a list of roommates to select from in the account
* Store items in database to be accessed later to avoid repetition

