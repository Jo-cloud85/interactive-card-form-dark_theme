# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Expected behaviour

- Update the details on the card as the user fills in the fields
- Validate the form fields when the form is submitted
- If there are no errors, display the completed state
- Reset the form when the user clicks "Continue" on the completed state

### Screenshot

- Main ![/images/main.png](./assets/images/main.png)
- Error checks ![/images/error-check.png](./assets/images/error-check.png)
- Upon successful submission ![/images/success.png](./assets/images/success.png)

### Links

- Solution URL: [https://github.com/Jo-cloud85/dark-theme-interactive-form.git](https://github.com/Jo-cloud85/dark-theme-interactive-form.git)
- Live Site URL: [https://jo-cloud85.github.io/dark-theme-interactive-form/](https://jo-cloud85.github.io/dark-theme-interactive-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- [jQuery](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

--- Javascript/jQuery ---

This is my first attempt using jQuery to write the code. I had to constantly understand the syntax differences between vanilla Javascript and jQuery. By right, this challenge would have been completed faster as I have been using vanilla javascript all along. jQuery is a popular library among developers as the syntax is designed to be shorter than Javascript. Having some basics for Javascript already, I thought it will be good for me to push myself a little. An example of syntax difference will be:

```
// Javascript
const minMValue = Number(expMonth.min),
      maxMValue = Number(expMonth.max);

// jQuery
const minMValue = Number(expMonth.attr('min')),
      maxMValue = Number(expMonth.attr('max'));
```

In terms of error-handling, there are various ways to look at this challenge.

- Technically, if we want to control the user input right from the start, we can set the credit card number, month, year and cvc input to be type: number so that users can only type in digits.
- I did that for the 'month', 'year' and 'cvc' and even limit the number of digits users can key in using slicing.
- I used min and max for the 'month' and 'year' to check for validity. For 'year' especially, users should only key in 23 or more as any number below 2023, the card is by right, expired.
- On the other hand, as the challenge wants us to learn how to handle errors of wrong format, I did that only for the name and credit card number inputs. By setting both card name and card number to type:text, users can type in any alphanumeric characters.
- By using regex, I am able to validate and throw back the respective errors if the user keys in digits for name and alphabets for the credit card number.
- For the credit card number, there is an additional step to format the numbers into 4 by 4 in which I used this line of code:

```
numValue = numValue.replace(/(.{4})/g, '$1 ').trim();
```

- The above validation steps can be easily applied for 'month', 'year' and 'cvc' i.e. to change the code to allow the same validation logic for 'month', 'year' and 'cvc' can be done easily.

--- CSS ---
I learnt that it is better to use rem/em than px so in this challenge, I started using rem for the major dimensions. Only px were used for very small dimensions like letter spacing. The conversion between rem and px is done using a formula declared under html {} in my css code.

Design wise, it is easy to see that I have done a complete overhaul of the design. The card is completely done using HTML and CSS instead of importing the default images by Frontend Mentor. This is for myself to use this challenge to do some designing myself.

The trickiest part in css has always been the transition from desktop to mobile screen which in this case, it is still flaw. I hope to come back to adjust and correct after understanding more about media queries.

### Continued development

This solution is definitely not perfect in terms of the mobile version. There are still tweaks to be done which will be fixed in the future.

## Author

- Frontend Mentor - [@Jo-cloud85](https://www.frontendmentor.io/profile/Jo-cloud85)
