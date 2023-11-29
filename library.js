var counter = 0;

function saveBook(){
    var bookName = document.getElementById('bookName').value;
    var authorName = document.getElementById('authorName').value;
    var bookLibrary = document.getElementById('bookLibrary').innerHTML;
    if(bookName && authorName){
        document.getElementById('saveBook').style.backgroundColor = 'aquamarine';
        bookLibrary += `
        Book: ${bookName}
        Author: ${authorName}
        
        `
        document.getElementById('bookLibrary').innerHTML = bookLibrary;
        counter =+ 1;
        document.getElementById('counter').innerHTML = `No of Books => ${counter}`;
        document.getElementById('bookName').value = '';
        document.getElementById('authorName').value = '';
    }else{
        document.getElementById('saveBook').style.backgroundColor = 'red';
    }
    
}