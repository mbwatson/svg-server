module.exports = str => {
    let returnString = ''
    const lines = str.split('\n')
        .filter(line => line !== '')
        .map(line => line.replace(/^\s+/, ''))
    returnString = lines.join(' ')
    return returnString
}
