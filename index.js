function takeANumber(katzDeliLine, name) {
  var katzDeli = [];
  for (var i = 0; i < katzDeli.length; i++) {
    if (katzDeliLine[i] === name) {
      console.log('Welcome, ' + name + ' You are number ' + (i + 1) + ' in line.');
    }
  }
}
