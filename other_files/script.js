
//covid19 api to work with--> https://api.covid19api.com/summary

function getapidata(){
fetch('https://api.covid19api.com/summary')
  .then( (apidata) =>{
  	 return apidata.json();
  })
  .then( (data) =>{

  	 //console.log(data.Countries);
  	/*for(let i=0;i<data.Countries.length;i++){
          console.log(data.Countries[i].Country);
           console.log(data.Countries[i].TotalDeaths);
            console.log(data.Countries[i].TotalRecovered);
  	}*/
  	output(data);
  }) 
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}



function output(data){
	for(let i=0;i<data.Countries.length;i++){
          console.log(data.Countries[i].Country);
           console.log(data.Countries[i].TotalDeaths);
            console.log(data.Countries[i].TotalRecovered);
  	}
}
document.addEventListener('DOMContentLoaded',()=>{

})

let table1=document.querySelector("#table1");
console.log(table1);

function showRankings(){

	while(table_body.firstChild){
		table_body.removeChild(table_body.removeChild);
	}

}
showRankings();