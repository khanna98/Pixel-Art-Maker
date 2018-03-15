// Function for making the grid on the brwoser
function makeGrid() {
    var gridHeight = document.getElementById('inputHeight').value; // get the Height of the grid
    var gridWidth = document.getElementById('inputWidth').value; // get the Width of the grid
    var gridTable = document.getElementById('pixelCanvas'); // get the place for grid
	// Create a table :
    gridTable.innerHTML = '';
    var tbody = document.createElement('tbody');
    for (var i = 0; i < gridHeight; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < gridWidth; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(''));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    gridTable.appendChild(tbody);
}

// Change color when clicked
$('body').on('click', 'td', function() {
	var color = document.getElementById('colorPicker').value;
    $(this).css('background-color', color);
});
