const button__add = document.querySelector('#add-button')
const button__delete = document.querySelector('#delete')



button__add.addEventListener('click', () => {
	const input_name = document.querySelector('#input-name')
	const input_price = document.querySelector('#input-price')
	const input_nameValue = input_name.value
	const input_priceValue = input_price.value
	if (input_nameValue === '' || input_priceValue === '') {
		return
	} else {
		const newIl = document.createElement('li')
		const name = document.createElement('span')
		newIl.classList.add('unchecked')
		name.textContent = input_nameValue 
		name.classList.add('name')
		name.classList.add('unchecked')
		list.insertBefore(newIl, list.firstChild)
		newIl.appendChild(name)

		const price = document.createElement('span')
		price.classList.add('price')
		price.classList.add('unchecked')
		price.textContent = input_price.value
		newIl.appendChild(price)

		const span = document.createElement('span')
		span.classList.add('cross')
		span.textContent = '\u00d7'
		newIl.appendChild(span)
		input_name.value = ""
		input_price.value = ""
	}
	saveData()
})


const list = document.querySelector('#list')

list.addEventListener('click', e => {
	if(e.target.tagName === 'SPAN' && e.target.className ==='cross') {
		e.target.parentElement.remove()
		saveData()
	} else if(e.target.tagName === 'LI') {
		console.log(e.srcElement.childNodes);
		e.srcElement.childNodes[1].classList.toggle('checked')
		e.srcElement.childNodes[0].classList.toggle('checked')
		e.target.classList.toggle('checked')
		saveData()
		
	}
	}
)

button__delete.addEventListener('click', () => {
	list.innerHTML = ''
	saveData()
})


function saveData() {
	localStorage.setItem('data', list.innerHTML)
}
function showTask() {
	list.innerHTML = localStorage.getItem('data')
}
showTask()



