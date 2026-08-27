let total = 0;

function addCarrinho(preco){
	total = total + preco;
	document.getElementById("total").innerText = total.toFixed(2);
}