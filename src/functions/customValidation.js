export const validate = (items, fields) => {
    const result = items.reduce((total, item) => {
        if (fields[item] === '' || !fields[item]) {
            total[item] = false
            return total
        } else {
            total[item] = true
            return total
        }
    }, {})
    return result
}