function completarTabela()
{
   var i = document.getElementsByClassName('nlinhas')[0].value; 
   var j = 0;
   var k = "<tr><td><input type='text' class='xi' size='4' /></td>  <td colspan='2'><input type='text' class='fi' size='4' /></td></tr>"; 
   var escrever = ''

         if(i<=0)
         {
             alert('Insira um valor maior do que 0');
             return;
         }
         if(isNaN(i))
             {
             alert('Só deve ser usado números');
             return;
             }
         else 
         {
             do
             {
            escrever = escrever+k;
            document.getElementById('inserirLinha').innerHTML = escrever;
            j = j+1;
            }while (j!=i);

            document.getElementById('ma').innerHTML = ("<font color='red'>Ma </font>");
            document.getElementById('mg').innerHTML = ("<font color='red'>Mg </font>");
            document.getElementById('mh').innerHTML = ("<font color='red'>Mh </font>");
        } 

    
}

 


function valorTabela()
{
	
	var elementosxi = document.getElementsByClassName('xi');
	var elementosfi = document.getElementsByClassName('fi');
	var valorXi = [];
	var valorfi = [];
	var somafi = 0;
	var somaxi = 0;
	for (i=0;i<elementosxi.length;i++)

		{
			valorXi.push(elementosxi[i].value);
			somafi += parseFloat(elementosfi[i].value);
			valorfi.push(elementosfi[i].value);
			somaxi += parseFloat(elementosxi[i].value);
		}
				
		CalcularMa(valorXi, valorfi , somafi);
		CalculaMg(valorXi, valorfi, somafi);
		CalculaMh(valorXi, valorfi, somafi);
}


function CalcularMa(valorXi, valorfi , somafi)
{
	var total = 0;
	var result = 0;
	for(i=0;i<valorXi.length;i++)
	{
		 total += (valorXi[i]*valorfi[i]) ;


	} 
	 
	 result = total/somafi;
	 result = result.toFixed(3);
    document.getElementsByClassName('ma')[0].innerHTML = result;
}

function CalculaMg(valorXi, valorfi, somafi)
{
	var total = 1 ;
	var result = 0;
	for(i=0;i<valorXi.length;i++)
	{
		total = total*Math.pow(valorXi[i],valorfi[i]);
	}
	result =  Math.pow(total,1/somafi);
	result = result.toFixed(3);
	document.getElementById('mg').innerHTML = result;

	
}

function CalculaMh(valorXi, valorfi, somafi)
{
	var total = 0;
	var result = 0 ;

	for(i=0;i<valorXi.length;i++)
	{
		total = total + (valorfi[i]/valorXi[i]);
	}

	result = somafi/total ;
	result = result.toFixed(3);

	document.getElementById('mh').innerHTML = result;
}