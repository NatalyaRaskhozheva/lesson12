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
//Сортування бульбашкою
function sortBulb(array) {
	let changed
	let swap = 0
	do {
		changed = false
		for (let i = 1; i < array.length; i++) {
			if (array[i - 1] > array[i]) {
				let tmp = array[i - 1]
				array[i - 1] = array[i]
				array[i] = tmp
				swap++
				changed = true
			}
		}
	} while (changed === true);

	return `${array},<br>  Кількість перестановок - ${swap}`
}
const bulb = sortBulb(array)
document.write(`${bulb} `)
