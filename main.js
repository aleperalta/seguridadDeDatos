/*		ALEJANDRA PERALTA ESCAMILLA - 7°K - SEGURIDAD DE DATOS		*/
let codigo = [
[" ",".",",","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
[" ",".",",","!","#","$","%","&","/","(",")","=","?","¡","{","}","+","*","-","\"","[","]",":",";","<",">","¿","~","^","\\"]
];

function codif(){	
	let texto = document.getElementById("texto").value.toUpperCase();
	let textoCodif = "";

	//Primero se recorre letra por letra para compararla con el código de cada una
	for (let i = 0; i < texto.length; i++)
		//La letra actual se compara con el código
		for (let j in codigo[0])
			//Si la letra actual coincide con la del código, se guarda en el texto codificado
		 	if (codigo[0][j] === texto.charAt(i))
		 		textoCodif += codigo[1][j];

	document.getElementById("texto2").value = textoCodif;
}

function deCodif(){	
	var texto = document.getElementById("texto2").value.toUpperCase();
	let textoCodif = "";

	for (var i = 0; i < texto.length; i++)
		for (var j in codigo[1])
		 	if (codigo[1][j] === texto.charAt(i))
		 		textoCodif += codigo[0][j];

	document.getElementById("texto").value = textoCodif;
}