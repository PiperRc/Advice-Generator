# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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


## Overview

### The challenge

Users should be able to view the page on mobile and desktop.



### Screenshot

![Screenshot](https://github.com/PiperRc/Advice-Generator/blob/main/screenshot/screenshot.png)



### Links

- [Solution URL](https://github.com/PiperRc/Advice-Generator)
- [Live Site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [axios](https://github.com/axios/axios)
- [Advice Slip Api](https://api.adviceslip.com/)


### What I learned

Axios- Using and implementing axios


```js
const getAdvice = async() => {
    try {
        const res = await axios.get('https://api.adviceslip.com/advice');
        p.innerHTML = res.data.slip.advice;
        span.innerHTML = res.data.slip.id;
    } catch (e) {
        p.innerHTML = 'Something went wrong';
    }
}
}
```


### Continued development

Built more webistes using APIs.
Position property

### Useful resources

- [Box Shadow Generator](https://html-css-js.com/css/generator/box-shadow/) - This helped me get the box shadow for the dice.


## Author


- Frontend Mentor - [@PiperRc](https://www.frontendmentor.io/profile/PiperRc)


## Acknowledgments

Frontend Mentor for being an invalubale resource.
