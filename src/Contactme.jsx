import { useEffect, useRef, useState } from "react";
import "./Contactme.css";

export default function Contactme() {
  let [aboutme,setaboutme]=useState(0);
  let me="'m Sridhar, a full stack developer based in Karur,Tamilnadu. I specialize in creating fully responsive websites. My passion lies in creating a fully responsive website with the changing dynamics tackling challenges.";
  let about=useRef();
  useEffect(()=>{
    let typing=setInterval(()=>{
      if(me[aboutme]!=' '){
      about.current.innerHTML+=me[aboutme];
      setaboutme(++aboutme);
      }else{
        about.current.innerHTML+=' ';
      setaboutme(++aboutme);
      }
      if(aboutme==215){
        clearInterval(typing);
      }
    },30)
   
  },[])
  
  return (
    <section className="contactme">
      <h3 ref={about}>I</h3>
    </section>
  );
}
