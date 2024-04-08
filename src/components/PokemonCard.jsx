import PropTypes from "prop-types";

function PokemonCard({doudi}){
  
    return( <>
    {doudi.imgSrc?(<img src={doudi.imgSrc}/>):(<p>??????</p>)}
    <figcaption>{doudi.name}</figcaption>

</>
)}

PokemonCard.PropTypes={
  doudi:PropTypes.shape({
    imgSrc:PropTypes.object.isRequired,
    name:PropTypes.string.isRequired,
  }).isRequired,
}

  
  export default PokemonCard;
  