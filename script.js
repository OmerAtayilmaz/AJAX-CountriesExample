 'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.row');

///////////////////////////////////////

const renderCountry=function(data,className=''){
    const html = `
    <article class="col-md-2 country ${className}">
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
}

const getCountryAndNeighbour=function(country){
    //AJAX Call country 1
    const request= new XMLHttpRequest()
    request.open('GET',`https://restcountries.eu/rest/v2/name/${country}`);
    request.send();


    request.addEventListener('load',function(){
        //response,responseText yazarak veri alınır. 
        const [data]=JSON.parse(this.responseText);
        
        //render country-1
        console.log(data);
        renderCountry(data)

        //get neighbour country (2)
        const [neighbour]=data.borders;
        if(!neighbour) return;

        const request2=new XMLHttpRequest()
        request2.open('GET',`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
        request2.send()
        request2.addEventListener('load',function(){
            const data=JSON.parse(this.responseText);
            renderCountry(data,'neighbour');
          
        })

    })
}

getCountryAndNeighbour('brazil')




//old-scholl way
/*
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
getCountryData('holland') */


/* 
fire off: acele yazıp yollamak
*/