 
  	
  	function getCovidData(){
  		fetch('https://api.covid19api.com/summary')
  		.then((response)=>{
  			return response.json()
  		})
  		.then((data)=>{
  			/*for(let i=0;i<data.Countries.length;i++){
  				console.log(data.Countries[i].Country);
  			}*/
  			displayData(data);


  			
  		})
  		.catch((err)=>{
           console.log("Erro occured",err);
  		})
  		
  	}
  


  function displayData(data){
     
     let table1=document.getElementById('table1');
     table='<tr><th id="country">Country</th><th>TotalConfirmed</th><th>TotalRecovered</th><th>TotalDeaths</th></tr>';
     for(let i=0;i<data.Countries.length;i++){
          table+='<tr><td>'+data.Countries[i].Country+'</td><td>'+ data.Countries[i].TotalConfirmed+'</td><td>'+data.Countries[i].TotalRecovered+'</td><td>'+data.Countries[i].TotalDeaths+'</td></tr>';
     }
     table+='</table>';
     table1.innerHTML=table;
  }
  

  document.addEventListener('DOMContentLoaded',getCovidData());