// let values = document.querySelector(".values");

// let clear = document.querySelector(".clear");
// let add = document.querySelector(".add");
// let sub = document.querySelector(".sub");
// let divide = document.querySelector(".divide");
// let multi = document.querySelector(".multi");

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");
// let three = document.querySelector(".three");
// let four = document.querySelector(".four");
// let five = document.querySelector(".five");
// let six = document.querySelector(".six");
// let seven = document.querySelector(".seven");
// let eight = document.querySelector(".eight");
// let nine = document.querySelector(".nine");
// let zero = document.querySelector(".zero");
// let dot = document.querySelector(".dot");

// let equalto = document.querySelector(".equalto");

// let value = "";
// let val1 = 0;
// let val2 = 0;
// let opr = "";

// clear.addEventListener("click", () => {
//   values.innerHTML = "";
//   value = "";
//   val1 = 0;
//   val2 = 0;
//   opr = "";
// });

// add.addEventListener("click", () => {
//   if (values.innerHTML === "") return;
//   val1 = Number(value);
//   value = "";
//   values.textContent += "+";
//   opr = "+";
// });
// sub.addEventListener("click", () => {
//   if (values.innerHTML === "") {
//     values.textContent = "-";
//     value = "-";
//     return;
//   }
//   val1 = Number(value);
//   value = "";
//   values.textContent += "-";
//   opr = "-";
// });
// multi.addEventListener("click", () => {
//   if (values.innerHTML === "") return;
//   val1 = Number(value);
//   value = "";
//   values.textContent += "*";
//   opr = "*";
// });
// divide.addEventListener("click", () => {
//   if (values.innerHTML === "") return;
//   val1 = Number(value);
//   value = "";
//   values.textContent += "/";
//   opr = "/";
// });

// one.addEventListener("click", () => {
//   values.textContent += "1";
//   value += "1";
// });

// two.addEventListener("click", () => {
//   values.textContent += "2";
//   value += "2";
// });

// three.addEventListener("click", () => {
//   values.textContent += "3";
//   value += "3";
// });

// four.addEventListener("click", () => {
//   values.textContent += "4";
//   value += "4";
// });

// five.addEventListener("click", () => {
//   values.textContent += "5";
//   value += "5";
// });

// six.addEventListener("click", () => {
//   values.textContent += "6";
//   value += "6";
// });

// seven.addEventListener("click", () => {
//   values.textContent += "7";
//   value += "7";
// });

// eight.addEventListener("click", () => {
//   values.textContent += "8";
//   value += "8";
// });

// nine.addEventListener("click", () => {
//   values.textContent += "9";
//   value += "9";
// });

// zero.addEventListener("click", () => {
//   if (values.innerHTML === "") return;
//   values.textContent += "0";
//   value += "0";
// });

// dot.addEventListener("click", () => {
//     if(value.includes('.')) return;
//   values.textContent += ".";
//   value += ".";
// });

// equalto.addEventListener("click", () => {
//   if (value === "" || value === "-") return;
//   val2 = Number(value);

//   if (opr === "+") {
//     values.innerHTML = val1 + val2;
//     value = values.textContent;
//     return;
//   } else if (opr === "-") {
//     values.innerHTML = val1 - val2;
//     value = values.textContent;
//     return;
//   } else if (opr === "*") {
//     values.innerHTML = val1 * val2;
//     value = values.textContent;
//     return;
//   } else if (opr === "/") {
//     if (val2 === 0) {
//       values.textContent = "ERROR";
//       return;
//     }
//     values.innerHTML = val1 / val2;
//     value = values.textContent;
//     return;
//   }
//   value = values.textContent;
// });

// let values = document.querySelector(".values");

// let clear = document.querySelector(".clear");
// let add = document.querySelector(".add");
// let sub = document.querySelector(".sub");
// let divide = document.querySelector(".divide");
// let multi = document.querySelector(".multi");

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");
// let three = document.querySelector(".three");
// let four = document.querySelector(".four");
// let five = document.querySelector(".five");
// let six = document.querySelector(".six");
// let seven = document.querySelector(".seven");
// let eight = document.querySelector(".eight");
// let nine = document.querySelector(".nine");
// let zero = document.querySelector(".zero");
// let dot = document.querySelector(".dot");

// let backSpace = document.querySelector(".backspace");

// let equalto = document.querySelector(".equalto");

// let value = "";
// let bodmasArr = [];

// clear.addEventListener("click", () => {
//   values.innerHTML = "";
//   value = "";
//   bodmasArr = [];
// });

// add.addEventListener("click", () => {
//   if (values.innerHTML === "") return;
//   if (value !== "") {
//     bodmasArr.push(value);
//   }
//   value = "";
//   values.textContent += "+";
//   bodmasArr.push("+");
// });
// sub.addEventListener("click", () => {
//   if (values.innerHTML === "") {
//     values.textContent = "-";
//     value = "-";
//     return;
//   }
//   if (value !== "") {
//     bodmasArr.push(value);
//   }
//   value = "";
//   values.textContent += "-";
//   bodmasArr.push("-");
// });
// multi.addEventListener("click", () => {
//   if (values.innerHTML === "") return;
//   if (value !== "") {
//     bodmasArr.push(value);
//   }
//   value = "";
//   values.textContent += "*";
//   bodmasArr.push("*");
// });
// divide.addEventListener("click", () => {
//   if (values.innerHTML === "") return;
//   if (value !== "") {
//     bodmasArr.push(value);
//   }
//   value = "";
//   values.textContent += "/";
//   bodmasArr.push("/");
// });

// one.addEventListener("click", () => {
//   values.textContent += "1";
//   value += "1";
// });

// two.addEventListener("click", () => {
//   values.textContent += "2";
//   value += "2";
// });

// three.addEventListener("click", () => {
//   values.textContent += "3";
//   value += "3";
// });

// four.addEventListener("click", () => {
//   values.textContent += "4";
//   value += "4";
// });

// five.addEventListener("click", () => {
//   values.textContent += "5";
//   value += "5";
// });

// six.addEventListener("click", () => {
//   values.textContent += "6";
//   value += "6";
// });

// seven.addEventListener("click", () => {
//   values.textContent += "7";
//   value += "7";
// });

// eight.addEventListener("click", () => {
//   values.textContent += "8";
//   value += "8";
// });

// nine.addEventListener("click", () => {
//   values.textContent += "9";
//   value += "9";
// });

// zero.addEventListener("click", () => {
//   if (values.innerHTML === "") return;
//   values.textContent += "0";
//   value += "0";
// });

// dot.addEventListener("click", () => {
//   if (value.includes(".")) return;
//   values.textContent += ".";
//   value += ".";
// });


// backSpace.addEventListener("click", () => {
//   if (values.textContent === "") return;

//   // Last character remove from display
//   values.textContent = values.textContent.slice(0, -1);

//   // Agar current number type ho raha hai
//   if (value !== "") {
//     value = value.slice(0, -1);
//     return;
//   }

//   // Agar last character operator tha
//   if (bodmasArr.length > 0) {
//     let last = bodmasArr[bodmasArr.length - 1];

//     if (["+", "-", "*", "/"].includes(last)) {
//       bodmasArr.pop();
//       return;
//     }

//     // Agar last item number hai
//     if (!["+", "-", "*", "/"].includes(last)) {
//       bodmasArr[bodmasArr.length - 1] = last.slice(0, -1);

//       if (bodmasArr[bodmasArr.length - 1] === "") {
//         bodmasArr.pop();
//       }
//     }
//   }
// });


// equalto.addEventListener("click", () => {
//   if (bodmasArr.length === 1) {
//     values.innerHTML = bodmasArr[0];
//     value = "";
//     return;
//   }
//   if (value === "" || value === "-") return;
//   bodmasArr.push(value);
//   let last = bodmasArr[bodmasArr.length - 1];
//   if (["+", "-", "*", "/"].includes(last)) return;

//   for (let i = 0; i < bodmasArr.length; i++) {
//     if (bodmasArr.length === 1) {
//       values.innerHTML = bodmasArr[0];
//       value = "";
//       return;
//     }
//     if (bodmasArr[i] === "/") {
//       if (bodmasArr[i + 1] === "0") {
//         values.innerHTML = "!(ERROR)";
//         return;
//       }
//       let result = Number(bodmasArr[i - 1]) / Number(bodmasArr[i + 1]);
//       bodmasArr.splice(i - 1, 3, String(result));
//       i--;
//     } else if (bodmasArr[i] === "*") {
//       let result = Number(bodmasArr[i - 1]) * Number(bodmasArr[i + 1]);
//       bodmasArr.splice(i - 1, 3, String(result));
//       i--;
//     }
//   }

//   for (let i = 0; i < bodmasArr.length; i++) {
//     if (bodmasArr.length === 1) {
//       values.innerHTML = bodmasArr[0];
//       value = "";
//       return;
//     }
//     if (bodmasArr[i] === "-") {
//       let result = Number(bodmasArr[i - 1]) - Number(bodmasArr[i + 1]);
//       bodmasArr.splice(i - 1, 3, String(result));
//       i--;
//     } else if (bodmasArr[i] === "+") {
//       let result = Number(bodmasArr[i - 1]) + Number(bodmasArr[i + 1]);
//       bodmasArr.splice(i - 1, 3, String(result));
//       i--;
//     }
//   }
// });

// document.addEventListener("keydown", (e) => {
//   if (e.key >= "0" && e.key <= "9") {
//     values.textContent += e.key;
//     value += e.key;
//   } else if (e.key === ".") {
//     dot.click();
//   } else if (e.key === "+") {
//     add.click();
//   } else if (e.key === "-") {
//     sub.click();
//   } else if (e.key === "*") {
//     multi.click();
//   } else if (e.key === "/") {
//     divide.click();
//   } else if (e.key === "Enter" || e.code === "NumpadEnter" || e.key === "=") {
//     e.preventDefault();
//     equalto.click();
//   } else if (e.key === "Escape") {
//     clear.click();
//   } else if (e.key === "Backspace") {
//     backSpace.click();
//   }
// });

let values = document.querySelector('.values')
let backSpace = document.querySelector(".backspace");

function appendText(text){
  if(values.innerHTML === '0' || values.innerHTML ==='!(Error)' || values.innerHTML === 'Infinity'){
    values.innerHTML = `${text}`
    return;
  }
  values.textContent = `${values.textContent}${text}`
  
}

function cleanValues() {
  values.innerHTML = '0';
}

function equalto () {
  try {
    values.innerHTML = eval(values.textContent); 
  } catch (error) {
    values.innerHTML = '!(Error)'
  }
}


backSpace.addEventListener("click", () => {
  if (
    values.textContent === "" ||
    values.textContent === "0"
  ) {
    values.innerHTML = "0";
    return;
  }
  values.textContent = values.textContent.slice(0, -1);
  if (values.textContent === "") {
    values.innerHTML = "0";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") {
    appendText(e.key);
  }

  else if (e.key === ".") {
    appendText(".");
  }

  else if (e.key === "+") {
    appendText("+");
  }

  else if (e.key === "-") {
    appendText("-");
  }

  else if (e.key === "*") {
    appendText("*");
  }

  else if (e.key === "/") {
    appendText("/");
  }

  else if (
    e.key === "Enter" ||
    e.code === "NumpadEnter" ||
    e.key === "="
  ) {
    e.preventDefault();
    equalto();
  }

  else if (e.key === "Escape") {
    cleanValues();
  }

  else if (e.key === "Backspace") {
    backSpace.click();
  }
});