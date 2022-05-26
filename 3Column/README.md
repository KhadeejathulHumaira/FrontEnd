# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot
### Desktop view
![Desktop 1440px](./design/pc.png)

### Mobile View
![Mobile 375px](./design/mobilephone.png)


### Links

- Solution URL: [Github](https://github.com/KhadeejathulHumaira/column-practice)
- Live Site URL: [Website](https://humairacolumn.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I have learned about flex-box and its uses.


```html
<div class="container">
  <p class="item">Hello </p>
  <h1  class="item">Flex</h1>
</div>
```
```css
.container {
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
}
.item{
  flex-grow:1;
}
```

display:flex-
    This will help the items inside the container to change according to its parent.
flex-direction:row-
    This is by default will be in row ,If needed we can also use column ,reverse-row,column-reverse.
flex-grow:1-
    This will allow the items inside the container to take up the left out spaces equally.
justify-content:center-
    This will help to align the items horizontally in the center, We also have some other options like flex-start ,flex-end ,I will link the website below for reference .
align-items:center-
    This will align the items vertically in the center.
### Continued development
Though my website is responsive ,I need to concentrate much in the 'rem' part so that my website will be responsive .

### Useful resources

- [Example resource 1](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This helped me a lot to clear my doubts .
- [Example resource 2](https://www.youtube.com/watch?v=FTlczfR82mQ) 



## Author
- Website - [Humaira](https://humaira.netlify.app/)
- Frontend Mentor - [@KhadeejathulHumaira](https://www.frontendmentor.io/profile/KhadeejathulHumaira)
- Twitter - [@humaiz14](https://twitter.com/humaiz14)


## Acknowledgments
 I would like to thank all those good hearts who gave feedback for  my last submission.
