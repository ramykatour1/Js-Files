const tokenAddress = '0x7Ad35426426E3113782388457D0D1cC6f90d928B';
const tokenSymbol = 'THE HUB';
const tokenDecimals = 18;
const tokenImage = 'https://the-hub.io/sale/assets/img/logo-icon.png';

async function addTokenFunction() {

try {
  
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', 
      options: {
        address: tokenAddress, 
        symbol: tokenSymbol, 
        decimals: tokenDecimals, 
        image: tokenImage, 
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('HelloWorld Coin has not been added');
  }
} catch (error) {
  console.log(error);
}
}