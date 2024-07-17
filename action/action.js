var bookname= document.getElementById('bookname');
   var bookurl= document.getElementById('bookurl');
var booklist=[];
function showurl(){
   var book={
 bookn:bookname.value,
 booku:bookurl.value,

   }
   
console.log(book)
booklist.push(book)
console.log(booklist)
clearform()
display()
}


function clearform() {
    bookname.value="";
    bookurl.value="";
}

function display(){
    var car=``;
    for(var i=0 ;i<booklist.length;i++){
      car+=`
      <tr>
      <td>${i}</td>
      <td>${booklist[i].bookn}</td>
      
      `
    //       car+=`<tr>
    //     <td>ghkfjlkjkjj</td>
    //     <td>jkfjgkjkjkj</td>
    //     <td><button class="btn btn-visit" data-index="0">
    //             <i class="fa-solid fa-eye pe-2"></i>Visit
    //           </button> </td>
    //           <td>
    //           <button class="btn btn-delete pe-2" data-index="0">
    //             <i class="fa-solid fa-trash-can"></i>
    //             Delete
    //           </button>
    //         </td>
    // </tr>`
        
    }
  
    document.getElementById('tablebody').innerHTML=car;
  }