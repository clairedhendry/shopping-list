//1. eneter items need to purchase by entering text and hitting "return" or clicking "add item" button
//2. check and uncheck items on the list by clicking "check" button
//3. permanently remove items from the list by clicking "delete" button

function addItem() {

   $("js-shopping-list-form").submit(function(event) {
   event.preventDefault();
   const itemText = $("input").val();
    
   let listHTML = 
   `<span class="shopping-item">${itemText}</span>
   <div class="shopping-item-controls">
     <button class="shopping-item-toggle">
       <span class="button-label">check</span>
     </button>
     <button class="shopping-item-delete">
       <span class="button-label">delete</span>
     </button>
   </div>`;

   let newListItem = document.createElement("li");
   newListItem.innerHTML = listHTML;
 $("ul.shopping-list").append(newListItem);

   })
}


function checkItem() {
  $("ul.shopping-list, li, button.shopping-item-toggle").on("click", function(event) {
    event.stopPropagation();
      const itemName = $("ul.shopping-list li span.shopping-item");
      $(itemName).toggleClass("shopping-item__checked");
      
  })

}


function removeItem() {
    $("ul.shopping-list, li, button.shopping-item-delete").on("click", function(event) {
    $(this).remove();
    });
}

$(addItem)
$(checkItem)
$(removeItem)