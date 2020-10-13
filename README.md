# js-forms

Link to live version: http://thinkable-cellar.surge.sh/

I decided to use the project I did for the functions guide where you could add and edit contacts. Previously it only checked for empty fields but now should look for letter only names, valid emails and more. Note: only the form for adding a new contact has the additional validation, the edit contact remains the same.

The main changes are in the event listener at the top of the main.js file and in the processNewContact function.
I started by making all the input fields a different type and adding the 'required' attribute to them.
The guide description asked us to hijack the submit event and I think I accomplished that by adding an event listener to the add new contact form's submit event and calling the preventDefault() method on the event. From there on I call the processNewContact function where the input is checked out further with regular expressions.

