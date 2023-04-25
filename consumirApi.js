fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'lista de compras',
    body: 'lista de compras',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  
  newFunction()

    .then(response => response.json())
    .then(json => console.log(json))
    
    fetch('https://jsonplaceholder.typicode.com/users/id', {
    method: 'DELETE'
});


function newFunction() {
  return fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'put',
    body: JSON.stringify({
      userid: 1,
      body: "lista de compras",
      title: "lista de compras"
    }),
    headers: {
      "content-type": "application/json"
    }
  });
}

