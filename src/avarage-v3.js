//v3: o codigo foi retatorado para suportar mais notas e ainda passa nos testes (refact)
function calculateAverage(...notes) {
    return notes.reduce((sum, note) => sum + note) / notes.length;
}

module.exports = calculateAverage;
