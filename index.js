

//DOM Elements
$container = document.querySelector('.main-body');
$form=document.getElementById("myForm");
$titleIn = $form.elements.namedItem("Title");
$authorIn = $form.elements.namedItem("Author");
$pagesIn = $form.elements.namedItem("Page-Num");
$readIn= $form.elements.namedItem("read");



function openForm() {
    document.getElementById("mainForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("mainForm").style.display = "none";
  }

var myLibrary = [
  {
    title:"First Book",
    author:"First Author",
    pages:10,
    read: 'Read',
  }
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const setStorage = () => {
  localStorage.setItem('library', JSON.stringify(myLibrary));
}

const getStorage = () => {
  myLibrary = JSON.parse(localStorage.getItem('library'));
}


const addBookToLibrary = () => {
  let title = $titleIn.value;
  let author = $authorIn.value;
  let pages = $pagesIn.value;
  let read = readOrNot();
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  document.forms[0].reset();
  updateGrid();
}


function readOrNot(){
  
  if($readIn.checked == true){
    read1='Read';
   }
   else{
    read1='Not Read'
   }

   return read1;

} 

const createDeleteDiv = (index) => {
  let $deleteDiv = document.createElement('div');
  let $deleteButton = document.createElement('button');
  $deleteButton.textContent = 'Delete';
  $deleteButton.addEventListener('click', () => {
    myLibrary.splice(index, 1);
    updateGrid();
  });
  $deleteDiv.appendChild($deleteButton);
  return $deleteDiv;
}

const toggleReadDiv = (book) => {
  let $toggleReadDiv = document.createElement('div');
  let $toggleButton = document.createElement('button');
  $toggleButton.textContent = 'Read/Not Read';
  $toggleButton.addEventListener('click', () => {
    book.read = !book.read;
    
    updateGrid();
  });
  $toggleReadDiv.appendChild($toggleButton);
  return $toggleReadDiv;
}



const updateGrid=()=> {
  
   $container.textContent = '';

  myLibrary.forEach((book, index) => {


    let content = document.createElement('div');
     content.classList.add('book-card');
     
     let title = document.createElement('div');
     title.textContent = 'Title: ' + book.title;
     let author = document.createElement('div');
     author.textContent = 'Author: ' + book.author;
     let pages = document.createElement('div');
     pages.textContent = 'Page-Num: ' + book.pages;
     let read = document.createElement('div');
     
     read.textContent = 'Read: ' + book.read;
     
     
     content.appendChild(title);
     content.appendChild(author);
     content.appendChild(pages);
     content.appendChild(read);
     content.appendChild(createDeleteDiv(index));
     content.appendChild(toggleReadDiv(book));


     $container.appendChild(content);
     
   });

   setStorage();

}

document.addEventListener('DOMContentLoaded', () => {
 
  if(!localStorage.getItem('library')) {
    setStorage();
  } else {
    getStorage();
  }

  updateGrid();
});