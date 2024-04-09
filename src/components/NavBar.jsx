function NavBar(
  {handleClickPrecedent,
  handleClickSuivant,
  btnPrecedentActive,
  btnSuivantActive,}) 
{
    return (
      <div className='btn'>
        <button disabled={!btnPrecedentActive} onClick={handleClickPrecedent} className='precedent'>
          précédent
        </button>
        <button disabled={!btnSuivantActive} onClick={handleClickSuivant} className='suivant'>
          suivant
        </button>
      </div>
    );
  }
  export default NavBar;