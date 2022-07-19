setTimeout(viewGrid ,1000);
function openForm() {
    document.getElementById("mainForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("mainForm").style.display = "none";
  }

var myLibrary = [];
let book0= { "index":0,"title": 'First Book',"author": 'First Author',"pages":10,"read":"True",}
myLibrary.push(book0);



function Book(title, author, pages ,read){
    this.title = title;
    this.author= author;
    this.pages = pages;
    this.read = read;
      
    }

function addBookToLibrary(){

    let books = {
    // index: 0,
     title : document.getElementById("myForm").elements.namedItem("Title").value,
     author : document.getElementById("myForm").elements.namedItem("Author").value,
     pages : document.getElementById("myForm").elements.namedItem("Page-Num").value,
     read : document.getElementById("myForm").elements.namedItem("read").value
    }
    
    myLibrary.push(books);
    document.forms[0].reset();

    localStorage.setItem('MyLibrary', JSON.stringify(myLibrary));

}
function readOrNot (read){
  if(read == 'True'){
    read='read';
   }
   else{
    read='Not read'
   }

   return read;

} 
function viewGrid(){
  /*
    let title1 = document.getElementById("myForm").elements.namedItem("Title").value;
    let author1 = document.getElementById("myForm").elements.namedItem("Author").value;
    let pages1 = document.getElementById("myForm").elements.namedItem("Page-Num").value;
    let read1 = document.querySelector('#read');
    if(read1.checked == true){
      read1='Read';
     }
     else{
      read1='Not Read'
     }
*/
    myLibrary=JSON.parse(window.localStorage.getItem('MyLibrary'));

    //read1 = readOrNot(read1);
   for( let i=0; i< myLibrary.length; i++){
    let container = document.querySelector('.main-body');
    let content = document.createElement('div');
     content.classList.add('book-card');
     //let index = document.createElement('div');
     //index.textcontent = 'Index:' + myLibrary[i].index;
     let title = document.createElement('div');
     title.textContent = 'Title: ' + myLibrary[i].title;
     let author = document.createElement('div');
     author.textContent = 'Author: ' + myLibrary[i].author;
     let pages = document.createElement('div');
     pages.textContent = 'Page-Num: ' + myLibrary[i].pages;
     let read = document.createElement('div');
     
     read.textContent = 'Read: ' + myLibrary[i].read;
     let button = document.createElement('div');
     button.textContent = 'Button: ';

     content.appendChild(index);
     content.appendChild(title);
     content.appendChild(author);
     content.appendChild(pages);
     content.appendChild(read);
     content.appendChild(button);

     container.appendChild(content);
     
   }

}