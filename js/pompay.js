function GetQR(address) {
  var ethereumWallet = "0xA14Ae9BC94005A93934a027024EB7421215853Af";
  var element = document.createElement('img');
  element.src = "<img src='https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=" + ethereumWallet + "&choe=UTF-8&chld=L|0' alt='Ethereum Wallet Address QR Code'/>";
  return element;
}
