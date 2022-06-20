const content = document.querySelector("#sendTask");

content.addEventListener("click", function(e) {
  e.preventDefault();

  const task = document.querySelector("#tasks");

  const value = task.value;

  console.log(value);
})

