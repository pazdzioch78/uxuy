const user_agents = [
  //Samsung Galaxy S24 Ultra
  "Mozilla/5.0 (Linux; Android 14; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  "Mozilla/5.0 (Linux; Android 14; SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  
  //Samsung Galaxy S24
  "Mozilla/5.0 (Linux; Android 14; SM-S921B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  "Mozilla/5.0 (Linux; Android 14; SM-S921U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  
  //Samsung Galaxy Z Fold5
  "Mozilla/5.0 (Linux; Android 14; SM-F946B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  "Mozilla/5.0 (Linux; Android 14; SM-F946U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  
  //Samsung Galaxy Z Flip5
  "Mozilla/5.0 (Linux; Android 14; SM-F731B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  "Mozilla/5.0 (Linux; Android 14; SM-F731U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  
  //Google Pixel 8 Pro
  "Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  
  //Google Pixel 8
  "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  
  //OnePlus 12
  "Mozilla/5.0 (Linux; Android 14; CPH2541) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  
  //OnePlus 11
  "Mozilla/5.0 (Linux; Android 14; CPH2447) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  
  //Xiaomi 14 Ultra
  "Mozilla/5.0 (Linux; Android 14; 24032RAA2G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  
  //Xiaomi 14
  "Mozilla/5.0 (Linux; Android 14; 23127PN0CC) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  
  //Nothing Phone (2)
  "Mozilla/5.0 (Linux; Android 14; A065) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  
  //Motorola Edge 50 Pro
  "Mozilla/5.0 (Linux; Android 14; XT2309) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  
  //iPhone 15 Pro Max (Safari)
  "Mozilla/5.0 (iPhone15,5; U; CPU iPhone OS 18_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3 Mobile/15E148 Safari/604.1",
  "Mozilla/5.0 (iPhone15,5; U; CPU iPhone OS 18_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3.1 Mobile/15E148 Safari/604.1",
  
  //iPhone 15 Pro (Safari)
  "Mozilla/5.0 (iPhone15,4; U; CPU iPhone OS 18_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3 Mobile/15E148 Safari/604.1",
  "Mozilla/5.0 (iPhone15,4; U; CPU iPhone OS 18_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3.1 Mobile/15E148 Safari/604.1",
  
  //iPhone 15 (Safari)
  "Mozilla/5.0 (iPhone15,3; U; CPU iPhone OS 18_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3 Mobile/15E148 Safari/604.1",
  "Mozilla/5.0 (iPhone15,3; U; CPU iPhone OS 18_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3.1 Mobile/15E148 Safari/604.1",
  
  //iPhone (Chrome)
  "Mozilla/5.0 (iPhone; CPU iPhone OS 18_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/134.0.6998.99 Mobile/15E148 Safari/604.1",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 18_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/134.0.6998.99 Mobile/15E148 Safari/604.1",
  
  //iPad Pro
  "Mozilla/5.0 (iPad; CPU OS 18_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3.1 Mobile/15E148 Safari/604.1",
  "Mozilla/5.0 (iPad; CPU OS 18_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3 Mobile/15E148 Safari/604.1",
  
  //iPad Air
  "Mozilla/5.0 (iPad; CPU OS 18_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3.1 Mobile/15E148 Safari/604.1",
  "Mozilla/5.0 (iPad; CPU OS 18_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3 Mobile/15E148 Safari/604.1",
  
  //Samsung Galaxy Tab S9 Ultra
  "Mozilla/5.0 (Linux; Android 14; SM-X910) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Safari/537.36",
  
  //Vivo X100 Pro
  "Mozilla/5.0 (Linux; Android 14; V2331) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  
  //OPPO Find X7 Ultra
  "Mozilla/5.0 (Linux; Android 14; CPH2645) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36",
  
  //Dodatkowe urządzenia dla różnorodności
  "Mozilla/5.0 (Linux; Android 14; SM-A736B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36", // Samsung Galaxy A73
  "Mozilla/5.0 (Linux; Android 14; SM-A546B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36", // Samsung Galaxy A54
  "Mozilla/5.0 (Linux; Android 14; Pixel 7a) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36", // Google Pixel 7a
  "Mozilla/5.0 (Linux; Android 14; M2102J20SG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36", // Poco X3 Pro
  "Mozilla/5.0 (Linux; Android 14; 2307CRN6DC) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.99 Mobile Safari/537.36", // Xiaomi 14T Pro
];

module.exports = user_agents;
