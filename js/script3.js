function createArray(number) {
	let arr = []
	for (let i = 0; i < number; i++) {
		let randomItem = Math.floor(Math.random() * 100)
		arr.push(randomItem)
	}
	return arr
}
const number = 30
const array = createArray(number)
document.write(`${array}<br>`)

function insertSort(array) {
	let key, i
	let swap = 0
	for (let k = 1; k < array.length; k++) {
		key = array[k]
		i = k - 1
		while ((i >= 0) && (array[i] > key)) {
			array[i + 1] = array[i]
			i = i - 1
			swap++
		}
		array[i + 1] = key
	}
	return `${array}<br> Кількість змін - ${swap}`
}
const inserArr = insertSort(array)
document.write(`${inserArr}`)