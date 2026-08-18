let usersMainContent = document.querySelector(".main_users");

let searchInput = document.querySelector('#search')

const users = [
  {
    // img: "images/user1.jpg",
    img: "https://thumbs.dreamstime.com/b/fashion-portrait-attractive-man-stylish-male-model-smart-casual-outdoors-handsome-contemporary-fashionable-near-luxury-469399900.jpg",
    name: "Rahul",
    email: "rahul@gmail.com",
  },
  {
    // img: "images/user2.jpg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyE4jTYFuLFl3YBD9ZX2_4vbzEySpSsKC4P84IuRrow&s=10",
    name: "Sneha",
    email: "aman@gmail.com",
  },
  {
    // img: "images/user3.jpg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuNypfri45EBPYDA8RnI0ZPQXO9cajok5oylbVvZJkuQ&s=10",
    name: "Priya",
    email: "priya@gmail.com",
  },
  {
    // img: "images/user4.jpg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWTbTwatKR8Fq8udWBfa5GHWx6qlIqs1e5R91WN1HQg&s=10",
    name: "Neha",
    email: "neha@gmail.com",
  },
  {
    // img: "images/user5.jpg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhgX5lk4r3OpIIUvDp4yW1Jtt1bTks66Ng24x8nQcUA&s=10",
    name: "Rohit",
    email: "rohit@gmail.com",
  },
];

function displayUsers(users) {
  usersMainContent.innerHTML = "";

  if(users.length === 0){
    const message = document.createElement('p')

    message.textContent = "No users Available for this search result."
    message.classList.add('no-users')

    usersMainContent.append(message)
    return;
  }

  users.forEach((user) => {
    const img = document.createElement("img");

    img.src = user.img;

    const div = document.createElement("div");
    div.classList.add("user_detail");
    const usersContent = document.createElement("div");
    usersContent.classList.add("users");

    const name = document.createElement("h3");
    name.textContent = user.name;

    const email = document.createElement("p");
    email.textContent = user.email;

    div.append(name, email);

    usersContent.append(img, div);

    usersMainContent.append(usersContent);
  });
}

displayUsers(users);

function searchUser(e){
  const searchValue = e.target.value.toLowerCase()

  const filterUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchValue)|| user.email.toLowerCase().includes(searchValue)
    )
  })

  displayUsers(filterUsers)
}


searchInput.addEventListener('input',searchUser)




