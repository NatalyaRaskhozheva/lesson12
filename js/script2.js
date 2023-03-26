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

function mixSort(array) {
	let leftIndex = 0
	let rightIndex = array.length - 1
	let swap = 0
	while (leftIndex < rightIndex) {
		for (let idx = leftIndex; idx < rightIndex; idx++) {
			if (array[idx] > array[idx + 1]) {
				let tmp = array[idx]
				array[idx] = array[idx + 1]
				array[idx + 1] = tmp
				swap++
			}
		}
		rightIndex--;

		for (let idx = rightIndex; idx > leftIndex; idx--) {
			if (array[idx] < array[idx - 1]) {
				let tmp = array[idx]
				array[idx] = array[idx - 1]
				array[idx - 1] = tmp
				swap++
			}
		}
		leftIndex++
	}
	return `${array},<br> Кількість змін - ${swap}`
}

const mixArray = mixSort(array)
document.write(`${mixArray}`)
