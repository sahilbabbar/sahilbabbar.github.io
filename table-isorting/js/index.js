var aButton = document.getElementById('shlTableiSorting-aButton');
function dummy() {
    console.log('\'A\' Button Clicked');
}
aButton.addEventListener("click", dummy);

//var firstNames = [];
//firstNames.push(document.getElementsByClassName('shlTableiSorting-firstName'));
//console.log(firstNames.values);

var myTable = document.getElementById("myTable");
var current, cell;
//this loop goes through each row
for (var i = 0; (current = myTable.rows[i]); i++)
{
    //this loop goes through each cell in current row
    for (var j = 0; (cell = current.cells[j]); j++)
    {
        console.log(cell.childNodes[j]);
    }
}