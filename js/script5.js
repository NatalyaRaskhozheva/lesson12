array = ['Semen', 'Natalya', 'Dasha', 'Olga', 'Igor']

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

	return array
}
const bulbArray = sortBulb(array)
document.write(`${bulbArray}<br>`)

function binarySearch(array, searchElement) {
	let start = 0
	let end = array.length - 1
	while (start <= end) {
		const middle = Math.floor((start + end) / 2)
		if (array[middle] === searchElement) return middle
		if (array[middle] < searchElement) start = middle + 1
		else end = middle - 1
	}
	return -1
}
const searchInArray = binarySearch(bulbArray, 'Olga')
document.write(`${searchInArray}`)