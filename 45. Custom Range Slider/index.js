const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling

    // get length of range slider
    const rangeWidth = getComputedStyle(e.target).getPropertyValue('width')
    const labelWidth = getComputedStyle(label).getPropertyValue('width')

    // get number without px 
    const numRangeWidth = +rangeWidth.substring(0, rangeWidth.length - 2)
    const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2)

    // get min amd max
    const max = +e.target.max
    const min = +e.target.min

    // calculate position value of label
    const left = value * (numRangeWidth / max) - (numLabelWidth / 2) + scale(value, min, max, 10, -10)

    // add to css value of label
    label.style.left = `${left}px`

    label.innerHTML = value
})

// map a range of numbers to another range of numbers
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}