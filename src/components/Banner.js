import React from 'react'
import b from '../components/b.png'; 
export default function Banner() {
    return (
        <div>
            
             <div  id='mainbanner' class="container-fluid overflow-hidden">
                 <div class="row col-md-12">
                 <div class="col-md-4" ></div>
                  
                   <div class="col-md-8 bmm "> <h1 id='bmm'>SPOTLIGHT BANNER</h1></div>
                 </div>
             </div>
        
            <div  class="row col-md-12">
            
                 
            <div id='b1' class="col-md-6">  
            <div class="card  text-white">
            <div class="card-header bm bg-transparent">AIR INDIA</div>
          <img  id='b1' class="card-img" src={b} alt="Card image" />
         <div class="card-img-overlay">
  
         <center>
         <button  type="button" class="btn bgbutton">Basic</button>
         <button  type="button" class="btn bgbutton">Basic</button></center>
  </div>
</div>
</div>
<div id='b1' class="col-md-6">  
            <div class="card text-white">
            <div  class="card-header  bm bg-transparent">ALASKAN AIRLINES</div>
          <img  id='b1' class="card-img" src="https://wallpaperaccess.com/full/2029165.jpg" alt="Card image" />
         <div class="card-img-overlay">
         <center>
         <button  type="button" class="btn bgbutton">Basic</button>
         <button  type="button" class="btn bgbutton">Basic</button></center>
  </div>
</div>
</div>


           





              </div>
        </div>
    )
}
