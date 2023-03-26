array = [5, 10, 3, 6, 1]
document.write(`${array} - Початковий масив<br>`)
// function sortBulb(array) {
// 	let changed
// 	let swap = 0
// 	do {
// 		changed = false
// 		for (let i = 1; i < array.length; i++) {
// 			if (array[i - 1] > array[i]) {
// 				let tmp = array[i - 1]
// 				array[i - 1] = array[i]
// 				array[i] = tmp
// 				swap++
// 				document.write(`${array}<br>`)
// 				changed = true
// 			}
// 		}
// 	} while (changed === true);

// 	return `${array},<br>  Кількість перестановок - ${swap}`
// }
// const bulb = sortBulb(array)
// document.write(`${bulb} `)


// function mixSort(array) {
// 	let leftIndex = 0
// 	let rightIndex = array.length - 1
// 	let swap = 0
// 	while (leftIndex < rightIndex) {
// 		for (let idx = leftIndex; idx < rightIndex; idx++) {
// 			if (array[idx] > array[idx + 1]) {
// 				let tmp = array[idx]
// 				array[idx] = array[idx + 1]
// 				array[idx + 1] = tmp
// 				swap++
// 				document.write(`${array}<br>`)
// 			}
// 		}
// 		rightIndex--;

// 		for (let idx = rightIndex; idx > leftIndex; idx--) {
// 			if (array[idx] < array[idx - 1]) {
// 				let tmp = array[idx]
// 				array[idx] = array[idx - 1]
// 				array[idx - 1] = tmp
// 				swap++
// 				document.write(`${array}<br>`)
// 			}
// 		}
// 		leftIndex++
// 	}
// 	return `${array},<br> Кількість змін - ${swap}`
// }

// const mixArray = mixSort(array)
// document.write(`${mixArray}`)

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
			document.write(`${array}<br>`)
		}
		array[i + 1] = key
	}
	return `${array}<br> Кількість змін - ${swap}`
}
const inserArr = insertSort(array)
document.write(`${inserArr}`)