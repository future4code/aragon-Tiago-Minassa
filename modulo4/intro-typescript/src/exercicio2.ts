function imprimeTresCoresFavoritas():void {
   const cor1 = process.argv[3]
   const cor2 = process.argv[4]
   const cor3 = process.argv[5]
   console.log([cor1, cor2, cor3])
}

imprimeTresCoresFavoritas()