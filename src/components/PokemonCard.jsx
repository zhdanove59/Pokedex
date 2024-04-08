function PokemonCard({doudi}){
  
    return( <>
    {doudi.imgSrc?(<img src={doudi.imgSrc}/>):(<p>??????</p>)}
    <figcaption>{doudi.name}</figcaption>

</>
)}

  
  export default PokemonCard;
  