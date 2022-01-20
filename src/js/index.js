//* When a new category is added, get the name of the category from the user
function addNode(e) {
  let liNode = e.parentNode.parentNode; // double parent of e

  // If liNode has only one child, add 'ul' to liNode
  if (liNode.children.length == 1) {
    const ul = document.createElement("ul");
    ul.innerHTML = `
      <li class="category">
        <div>
          <input type="text" placeholder="Category name" autofocus />
          <img onclick="removeNode(this)" src="./icon/cancel.svg" alt="" />
          <img onclick="saveNode(this)" src="./icon/save.svg" alt="" />
        </div>
      </li>
    `;
    liNode.appendChild(ul)
  }
  
  // If liNode has many children, add 'li' to liNode
  else {
    const ulNode = liNode.lastElementChild;
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <input type="text" placeholder="Category name" autofocus />
        <img onclick="removeNode(this)" src="./icon/cancel.svg" alt="" />
        <img onclick="saveNode(this)" src="./icon/save.svg" alt="" />
      </div>
        `;
    li.classList.add("category");
    ulNode.appendChild(li);
  }
};

//* If save icon is clicked, getting input value and replace input to text
function saveNode(e) {
  const divNode = e.parentNode 

  // Getting input value
  const inputVal = divNode.firstElementChild.value

  // Replace div content 
  divNode.innerHTML = `
    <span>${inputVal}</span>
    <img onclick="addNode(this)" class="add_btn" src="./icon/add.svg" alt="" />
    <img onclick="editNode(this)" class="edit_btn" src="./icon/edit.svg" alt="" />
    <img onclick="removeNode(this)" class="remove_btn" src="./icon/remove.svg" alt="" />
  `
};


//* If edit icon is clicked, getting category text and equal to input value. Then replace span(categoryName) to input 
function editNode(e) {
  // Get div and span(categoryName)
  const div = e.parentNode
  const categoryName = div.firstElementChild
  
  // Get edit icon and set it is attributes. Because edit icon was clicked, this time edit icon must be changed to save icon
  const editIcon = div.children[2]
  // editIcon.attributes.src.value = `./icon/save.svg`
  editIcon.setAttribute('src', './icon/save.svg')
  editIcon.setAttribute('onclick', 'saveNode(this)')
  editIcon.className = `save_btn`
  
  const newInput = document.createElement('input')
  newInput.value = categoryName.innerText
  newInput.setAttribute('autofocus', '')
  div.replaceChild(newInput, categoryName)
};

//* If remove icon and cancel icon are clicked, run this funcion
function removeNode(e) {
  let ulNode = e.parentNode.parentNode.parentNode;
  let liNode = e.parentNode.parentNode;

  // Delete ul if ul has only one child, delete li if ul has many children  
  ulNode.children.length == 1 ? ulNode.remove() : liNode.remove()
};