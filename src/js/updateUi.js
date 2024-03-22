const ul = document.querySelector(".cards");

export const upDateUI = (countres) => {
    ul.innerHTML = ""
  countres.forEach((country) => {
    const commonName = country.name.common;
    const population = country.population;
    const region = country.region;
    const capital = country.capital[0] ? country.capital[0] : "No capital";
    const flag = country.flags.svg;

    const li = document.createElement("li");
    li.classList.add("cards__item");
    li.innerHTML = `
                          <a href="./about.html? country = ${commonName}">
                               <img src=${flag} alt="iceland-flag" width="267" height="160">
                        <div class="cards__item-inner">
                            <h3 class="cards__title">${commonName}</h3>
                            <p class="population">Population: <span>${population}</span></p>
                            <p class="region">Region: <span>${region}</span></p>
                            <p class="capital">Capital: <span>${capital}</span></p>
                        </div>
                    </a>
    `;
    ul.appendChild(li)
  });
};
export const creatCountryInfo = (country) => {
 console.log(country)
}