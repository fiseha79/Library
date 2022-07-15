function openForm() {
    document.getElementById("mainForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("mainForm").style.display = "none";
  }






let myLibrary = [];
function Book(title, author, pages ,read){
    this.title = title;
    this.author= author;
    this.pages = pages;
    this.read = read;
      
    }

function addBookToLibrary(){
    let title = document.getElementById("myForm").elements.namedItem("Title").value;
    let author = document.getElementById("myForm").elements.namedItem("Author").value;
    let pages = document.getElementById("myForm").elements.namedItem("Page-Num").value;
    let read = document.getElementById("myForm").elements.namedItem("read").value;

    var Book1 = new Book(title, author, pages , read);
    myLibrary= myLibrary.push(Book1);

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

    //read1 = readOrNot(read1);

    let container = document.querySelector('.main-body');
    let content = document.createElement('div');
     content.classList.add('book-card');
     let title = document.createElement('div');
     title.textContent = 'Title: ' + title1;
     let author = document.createElement('div');
     author.textContent = 'Author: ' + author1;
     let pages = document.createElement('div');
     pages.textContent = 'Page-Num: ' + pages1;
     let read = document.createElement('div');
     
     read.textContent = 'Read: ' + read1;
     let button = document.createElement('div');
     button.textContent = 'Button: ';

     content.appendChild(title);
     content.appendChild(author);
     content.appendChild(pages);
     content.appendChild(read);
     content.appendChild(button);

     container.appendChild(content);
     


}