document.body.innerHTML+=`
<div class="car">
<h1>Volkswagen Car Annual details</h1>
<p Class="p1"></p>
<p class="p2"></p>
<p class="p3"></p>
<p class="p4"></p>
<p class="p5"></p>
<p class="p6"></p>
<p class="p7"></p>
<p class="p8"></p>
<p id="p9"></p>
</div>`
async function Collectdata(){
          const apiUrl=await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3")
    const data=await apiUrl.json()
    console.log(data);
       
    const Rocord=data.TipoVeiculo;
    console.log("dddddd", Rocord);
    const Species=data.Valor;
    console.log("aaaa", Species);
   const Page=data.Marca;
   console.log("SSSSS", Page);
   const NumberofPages=data.Modelo;
   console.log("FFFFFFFF", NumberofPages);
   const AnnualModel=data.AnoModelo;
   console.log("GGGGGG", AnnualModel);
   const SiglaCombustivel=data.SiglaCombustivel;
   console.log("SiglaCombustivel", SiglaCombustivel);
   const CodigoFipe=data.CodigoFipe;
   console.log("CodigoFipe", CodigoFipe);
   const Combustivel=data.Combustivel;
   console.log("Combustivel", Combustivel);
     document.querySelector(".p1").innerHTML=`TipoVeiculo: ${Rocord}`
    document.querySelector(".p2").innerHTML=`Valor Price:${Species}`
      document.querySelector(".p3").innerHTML=`Marca : ${Page}`
     document.querySelector(".p4").innerHTML=`Model:  ${NumberofPages}`
     document.querySelector(".p5").innerHTML=`AnnualModel:  ${AnnualModel}`
     document.querySelector(".p6").innerHTML=`SiglaCombustivel:   ${SiglaCombustivel}`
     document.querySelector(".p7").innerHTML=`CodigoFipe: ${CodigoFipe}`
     document.querySelector(".p8").innerHTML=`Combustivel:  ${Combustivel}`
    
}
Collectdata()