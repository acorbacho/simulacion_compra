function bucleVentas(liquidez, tokens, compras, dolares) {
    var liquidezAux = liquidez
    var tokensAux = tokens
    var precioAux = liquidezAux / tokensAux
    var comprasAux = compras
    var dolaresAux = dolares
    var arrayLiquidezTokens = []

    for (i = 0; i < comprasAux; i++) {
        tokensAux = tokensAux - (dolaresAux / precioAux)
        liquidezAux = liquidezAux + dolaresAux
        precioAux = liquidezAux / tokensAux
    }
    alert('TOKEN: ' + precioAux.toFixed(3) + '$')
    arrayLiquidezTokens[0] = liquidezAux
    arrayLiquidezTokens[1] = tokensAux
    return arrayLiquidezTokens
}