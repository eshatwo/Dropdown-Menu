# Instructions

## To Run the Project
First, clone the repository.

Then, navigate to the project directory and run:

### `npm install`

### `npm start`
<br>

# Notes

To use the Dropdown Menu component, follow the following format.

```
    <DropdownMenu
        menu_label="Fruits"
        menu_items={[
            { key: 1, item_name: "Apples", sel: false },
            { key: 2, item_name: "Strawberries", sel: false },
            { key: 3, item_name: "Watermelon", sel: false },
            { key: 4, item_name: "Kiwi", sel: false },
        ]}
        multiple={false}
    />
```

- The `menu_label` prop is the name of the dropdown menu. 
- The `menu_items` prop is an array of dictionaries containing information about each item in the menu.
- The `multiple` prop denotes whether the use can select multiple options from the menu. 

Dummy data is currently populating the dropdown menus in the index.js file. 
<br>
<br>

## Further Work
Some thing that need improvement and action steps include:
- Clear selection button should change images in dropdown menu while selecting multiple items
- Use Sass to make styling less redundant
- Add unit testing
- Text in display should scroll from left to right
- Accessibility (aria-labels, keyboard compatibility)
- Dropdown items to be seperate components


## Sources
https://heroicons.com/
