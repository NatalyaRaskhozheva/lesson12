array = ['Semen', 'Natalya', 'Dasha', 'Nikolasiyah', 'Olga', 'Igor']

//Сортування бульбашкою
function sortBulb(array) {
	let changed
	do {
		changed = false
		for (let i = 1; i < array.length; i++) {
			if (array[i - 1].length > array[i].length) {
				let tmp = array[i - 1]
				array[i - 1] = array[i]
				array[i] = tmp
				changed = true
			}
		}
	} while (changed === true);

	return array
}
const bulbArray = sortBulb(array)
document.write(`${bulbArray}<br>`)

function binarySearch(array) {
	let start = 0
	let end = array.length - 1
	while (start <= end) {
		const middle = Math.floor((start + end) / 2)
		if (array[middle].length === 5) return middle
		if (array[middle.length] < 5) start = middle + 1
		else end = middle - 1
	}
	return -1
}
const searchInArray = binarySearch(bulbArray)
document.write(`${searchInArray}`)