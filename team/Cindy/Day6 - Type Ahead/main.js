const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const originHtml = suggestions.innerHTML

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

const findMatches = (wordToMatch, cities) => {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const displayMatches = (e) => {
  if (e.target.value === '') { return suggestions.innerHTML = originHtml }

  const matchArray = findMatches(e.target.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(e.target.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${e.target.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${e.target.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
