function takeANumber(katzDeliLine, name) {
  var katzDeli = [];
  katzDeliLine.push(name);
  return ('Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.');
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine) {
  var str = 'The line is currently: ';
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 1; i <= katzDeliLine.length; i++) {
      str += i + '. ' + katzDeliLine[i] +', '
    }
  }
  return str;
}
