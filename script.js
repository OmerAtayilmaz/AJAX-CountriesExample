'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.row');

///////////////////////////////////////

//old-scholl way

const getCountryData=function(country){
    const request= new XMLHttpRequest()
    request.open('GET',`https://restcountries.eu/rest/v2/name/${country}`);
    request.send();


    request.addEventListener('load',function(){
        //response,responseText yazarak veri alınır. 
        const [data]=JSON.parse(this.responseText);
        console.log(data);

        const html = `
        <article class="col-md-2 country">
            <img class="img-fluid" src="${data.flag}" />
            <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} People</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
        </article>
        `
        countriesContainer
        .insertAdjacentHTML('beforeend',html)
        countriesContainer.style.opacity=1;

    })
}
//sayfayı her yenilediğimizde yerleri değişir, çünkü ilk hangisi biterse o işlenir.
getCountryData('portugal')
getCountryData('turkey')
getCountryData('usa')
getCountryData('spain')
getCountryData('france')
getCountryData('russian')
getCountryData('germany')
getCountryData('ukrain')
getCountryData('sweden')
getCountryData('holland')
/* 
fire off: acele yazıp yollamak
*/