var button = document.querySelector("#move");
var S = 1;
var E = 1;
var labyrinth = new Array(11);
labyrinth[0] = [ S, 1, 0, 0, 0, 0, 0, 0, 0, 0 ]
labyrinth[1] = [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ]
labyrinth[2] =[ 0, 1, 1, 0, 0, 0, 1, 1, 1, 0 ]
labyrinth[3] = [ 0, 0, 1, 1, 0, 0, 1, 0, 1, 0 ]
labyrinth[4] = [ 0, 0, 0, 1, 1, 1, 1, 0, 1, 0 ]
labyrinth[5] = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ]
labyrinth[6] = [ 0, 0, 1, 1, 1, 1, 0, 0, 1, 1 ]
labyrinth[7] = [ 1, 1, 1, 0, 0, 1, 0, 0, 0, 1 ]
labyrinth[8] = [ 1, 0, 0, 0, 0, 1, 1, 1, 1, 1 ]
labyrinth[9] = [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ]
labyrinth[10] = [ 0, 0, 0, 0, 1, 1, 1, 1, 1, E ]

var currentRow = 0;
var currentCol = 0;

function displayLabyrinth() {
	var content = "";

	content = "<table id='table' width='100%' >";

	for (var i = 0; i < 11; i++) {
		content += "<tr>";
		for (var j=0; j < 10; j++) {
			if (i === currentRow && j === currentCol) {
				content += "<td width='70'>";
				content += "<img src='2ROy.gif' width='70'>";
            } else if (labyrinth[i][j] === 1) {
                content += "<td width='50'>";
				content += "<img src='white.gif' width='50'>";
            } else{
				content += "<td width='70'>";
				content += "<img src='AcerSaccharum2_PP.png' width='70'>"
			}
			content += "</td>";
		}

		content += "</tr>";
	}

    content += "</table>";
    return content;
}

function draw() {
	var myContent = displayLabyrinth();
	document.body.innerHTML += "";
	document.write(myContent);
}

function move() {
	if (labyrinth[currentRow][currentCol + 1 ] = 1) {   //right
           currentCol++;
	} else if (labyrinth[currentRow+ 1][currentCol] = 1) {   //down
			currentRow++;
	} else if (labyrinth[currentRow][currentCol - 1 ] = 1) { //left
			currentCol--;
	} else {  //right
			currentCol++; //up
    }
    console.log(currentRow + " ," + currentCol);
	draw();
} 




draw();
button.addEventListener('click', move());

console.log(labyrinth[1][2]);
console.log(labyrinth[1][1]);

