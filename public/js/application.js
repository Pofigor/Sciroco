const regForm = document.querySelector('#registerForm');
const logForm = document.querySelector('#loginForm');

// const orderButton = document.querySelector('.order');
// console.log(orderButton);

// orderButton?.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const name = orderButton.querySelector('.nameInput').value;
//   const phone = orderButton.querySelector('.telephoneInput').value;
//   const email = orderButton.querySelector('.emailInput').value;
//   const photo = orderButton.querySelector('.chooseFile').value;
//   const description = orderButton.querySelector('.orderHeigth').value;

//   const { id } = orderButton.querySelector('.btn-primary');

//   console.log(id);

//   console.log(name, phone, email, photo, description);
//   const modal = document.querySelector('#exampleModal');
//   try {
//     const response = await fetch('/order', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         // user_id: 1,
//         name,
//         phone,
//         email,
//         photo,
//         description,
//       }),
//     });
//     // if (response.status === 200) { return window.location.replace('/'); }
//     // setTimeout(()=>   , 8000)
//     window.location.replace('/');
//   } catch (error) {
//     console.log(error);
//   }
// });

regForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const response = await fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }),
  });
  const responseJson = await response.json();

  if (!responseJson.isRegSuccessful) {
    const errorDiv = document.createElement('h5');
    const parent = event.target.parentElement;
    if (parent.lastChild.nodeName === 'H5') {
      parent.removeChild(parent.lastChild);
    }
    errorDiv.innerText = `Не заполнены поля, либо пользователь с таким Email уже существует. Попробуйте еще раз.`;
    parent.append(errorDiv);
    return;
  }

  window.location.href = '/';
});

logForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: event.target.email.value,
      password: event.target.password.value,
    }),
  });
  const responseJson = await response.json();

  if (!responseJson.isLogSuccessful) {
    const errorDiv = document.createElement('h5');
    const parent = event.target.parentElement;
    if (parent.lastChild.nodeName === 'H5') {
      parent.removeChild(parent.lastChild);
    }
    errorDiv.innerText = 'Неправильный email или пароль, попробуйте еще раз.';
    parent.append(errorDiv);
    return;
  }

  window.location.href = '/';
});
