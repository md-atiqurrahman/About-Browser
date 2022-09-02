fetch('https://jsonplaceholder.typicode.com/todosp')
.then(response => response.json())
.then(json => console.log(json))
.finally(console.log('i am the coder'));