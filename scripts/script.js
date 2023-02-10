const $d = document,
	$addCard = $d.querySelector("#addCarta"),
	$removeCard = $d.querySelector("#delCarta"),
	$palo = $d.querySelector("#palo"),
	$numero = $d.querySelector("#numero"),
	$figuras = $d.querySelector("#figuras"),
	$select = $d.querySelector("#ncartas"),
	$realizar = $d.querySelector("#btnOperar")

$addCard.addEventListener("click", (event) => {
	$card = $d.createElement("img")
	$card.src = `imagenes/${$palo.value}${$numero.value}.png`
	$figuras.appendChild($card)
	let contador = $figuras.childNodes.length
	$opcion = $d.createElement("option")
	$opcion.value, ($opcion.textContent = contador)
	$select.append($opcion)
})

$removeCard.addEventListener("click", (event) => {
	let $eliminar = $figuras.querySelector(
		`img[src='imagenes/${$palo.value}${$numero.value}.png']`
	)
	$figuras.removeChild($eliminar)
	$select.removeChild($select.lastChild)
})

$realizar.addEventListener("click", (event) => {
	let accion = $d.querySelector(".contenedor:first-child input[type='radio']")
		.checked
		? 0
		: 1

	$card = $d.createElement("img")
	$card.src = `imagenes/${$palo.value}${$numero.value}.png`
	switch (accion) {
		case 0:
			let posicion = $figuras.querySelector(
				`#figuras img:nth-child(${$select.value})`
			)
			$figuras.insertBefore($card, posicion)
			let contador = $figuras.childNodes.length
			$opcion = $d.createElement("option")
			$opcion.value, ($opcion.textContent = contador)
			$select.append($opcion)
			break

		case 1:
			$figuras.childNodes[$select.value - 1].replaceWith($card)
			break
	}
})
