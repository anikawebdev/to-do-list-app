// 
// Add an item to a list
// 
function newItem() {

    let input = $('#input').val();
    let list = $('#list');
    let li = $('<li></li>')
    let crossOutButton = $('<crossOutButton></crossOutButton>')

    if (input === '') {
        alert("You must write something!");
    } 
    else {
        list.append(li);
        li.append(crossOutButton);
        li.append(document.createTextNode(input));
        crossOutButton.append(document.createTextNode('X'));
    }
    
    // 
    // Mark an item as done
    // 
    li.dblclick(function() {
        li.addClass('strike');
    });

    // 
    // Delete an item from the list
    // 
    crossOutButton.click(function() {
        li.addClass('delete');
    })

    // 
    // Change the order of items in the list
    // 
    list.sortable();
}

