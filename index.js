//1. enter items need to purchase by entering text and hitting "return" or clicking "add item" button
//2. check and uncheck items on the list by clicking "check" button
//3. permanently remove items from the list by clicking "delete" button


function addItem() {

   $("#js-shopping-list-form").submit(event => {
     event.preventDefault();
     const newItemText = $("#js-shopping-list-form").find("input#shopping-list-entry").val();
     
     let item = `<li>
     <span class="shopping-item">${newItemText}</span>
     <div class="shopping-item-controls">
       <button class="shopping-item-toggle">
         <span class="button-label">check</span>
       </button>
       <button class="shopping-item-delete">
         <span class="button-label">delete</span>
       </button>
     </div>
   </li>`;
    
     $("body ul.shopping-list").append(item);
     $("input#shopping-list-entry").val("");
})
};

function checkItem() {
    $("ul").on("click", "button.shopping-item-toggle", function(event) {
                
        $(this).parent().siblings().toggleClass("shopping-item__checked")
        event.stopPropagation();
    })
};


function removeItem() {
    $("ul").on("click", "button.shopping-item-delete", function(event) {
    this.closest("li").remove();
    });
};

$(addItem);
$(checkItem);
$(removeItem);