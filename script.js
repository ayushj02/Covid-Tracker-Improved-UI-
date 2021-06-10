// console.log('Connected To JS Server');(For Testing Purpose!)

window.onload = call();

function call(){
    let tconfirmed = document.getElementById("tconfirmed");
    let trecovered = document.getElementById("trecovered");
    let tdeceased = document.getElementById("tdeceased");

    let confirmed = document.getElementById("confirmed");
    let active = document.getElementById("active");
    let recovered = document.getElementById("recovered");
    let deceased = document.getElementById("deceased");

    fetch('https://api.covid19india.org/state_district_wise.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data);
        let conf = data.Maharashtra.districtData.Mumbai.confirmed;
        confirmed.innerHTML = conf.toLocaleString('en-IN');

        let act = data.Maharashtra.districtData.Mumbai.active;
        active.innerHTML = act.toLocaleString();

        let recov = data.Maharashtra.districtData.Mumbai.recovered;
        recovered.innerHTML = recov.toLocaleString('en-IN');
        
        let dec = data.Maharashtra.districtData.Mumbai.deceased;
        deceased.innerHTML = dec.toLocaleString();

        let todays = data.Maharashtra.districtData.Mumbai.delta.confirmed;
        tconfirmed.innerHTML = todays.toLocaleString('en-IN') ;

        let trec = data.Maharashtra.districtData.Mumbai.delta.recovered;
        trecovered.innerHTML = trec.toLocaleString('en-IN') ;

        let tdec = data.Maharashtra.districtData.Mumbai.delta.deceased;
        tdeceased.innerHTML = tdec.toLocaleString('en-IN') ;

        console.log(conf.toLocaleString('en-IN'));
    })

}