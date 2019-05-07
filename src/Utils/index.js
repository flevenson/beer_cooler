export const fetchBeer = async => {
  const beerAPI = 'https://beer.fluentcloud.com/v1/beer'
  const response = await fetch(beerAPI);
  if(!response.ok){
    throw new Error(response.statusText);
  } else {
    const beerData = await response.json();
    return beerData
  }
}