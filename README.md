# 🧮 JavaScript Calculator

This calculator is a part of my **JavaScript learning journey**.

I am currently learning JavaScript fundamentals and have completed the basics of JavaScript and the **DOM (Document Object Model)**. After learning the DOM, I started building small projects to understand how JavaScript works in real applications.

This calculator is one of those projects.

## 🚀 About My JavaScript Journey

My current learning path is:

```text
JavaScript Basics
      ↓
DOM Manipulation
      ↓
Small DOM Projects
      ↓
Events & User Interaction
      ↓
More JavaScript Projects
      ↓
Advanced JavaScript
```

I am learning JavaScript by **building small projects, finding bugs, debugging them, and trying different approaches** instead of only learning theory.

## 📌 About This Project

The goal of this project was not to build a production-level calculator.

The main goal was to practice:

- DOM manipulation
- Event handling
- Functions
- Conditional statements
- Variables and state
- Keyboard events
- String manipulation
- Error handling
- Problem solving
- Debugging

## 🔥 Three Approaches I Tried

While building this calculator, I tried solving the same problem in different ways.

### 1. Manual Calculation Approach

In the first approach, I used variables such as:

```js
let val1 = 0;
let val2 = 0;
let opr = "";
```

The calculator performed the operation manually based on the selected operator.

This helped me understand:

- Variables
- Operators
- Conditions
- Functions
- Basic calculator logic

---

### 2. BODMAS / Array Approach

In the second approach, I stored the expression inside an array:

```js
let bodmasArr = [];
```

For example:

```text
10 + 5 * 2
```

was represented as individual values and operators.

I then manually handled:

```text
/ and *
```

before:

```text
+ and -
```

This approach helped me understand:

- Arrays
- Expression handling
- Operator precedence
- BODMAS logic
- State management
- Edge cases
- Debugging complex logic

---

### 3. `eval()` Approach

In the latest approach, I simplified the calculator by storing the complete expression as a string and using JavaScript's `eval()` function.

Example:

```js
function equalto() {
  try {
    values.innerHTML = eval(values.textContent);
  } catch (error) {
    values.innerHTML = "!(Error)";
  }
}
```

This approach required much less code and made the calculator simpler to implement.

At the same time, it also helped me understand that **the shortest solution is not always the best solution**, and different approaches have different trade-offs.

## 🛠️ Tech Used

- HTML
- CSS
- JavaScript

## ✨ Features

- Basic arithmetic operations
- Addition
- Subtraction
- Multiplication
- Division
- Decimal numbers
- Clear button
- Backspace
- Keyboard support
- Error handling

## 📚 What I Learned

This project helped me understand that learning JavaScript is not just about learning syntax.

The real learning happens when I:

```text
Learn
  ↓
Build
  ↓
Break
  ↓
Debug
  ↓
Try another approach
  ↓
Understand
```

While building this calculator, I faced issues with state management, Backspace handling, operators, and expression evaluation.

Instead of stopping there, I tried different approaches and compared them.

## 🎯 Current Learning Status

I have completed the **JavaScript basics and DOM fundamentals** and I am currently building small projects to strengthen my understanding.

This calculator is one step in that journey.

More JavaScript projects coming soon. 🚀

## 📈 Next Steps

My upcoming focus is to continue improving my JavaScript skills by working on more DOM-based projects and gradually moving toward:

- Advanced JavaScript concepts
- Asynchronous JavaScript
- APIs
- Modern JavaScript
- Larger projects

## 🤝 Learning in Public

This repository is part of my ongoing developer journey.

I am documenting my projects as I learn, experiment, make mistakes, debug them, and improve.

**One project at a time. One concept at a time.**

---

### 👨‍💻 Author

**Luv Kumar**

Learning JavaScript by building projects and improving every day.
