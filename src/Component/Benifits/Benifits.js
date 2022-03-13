import React from 'react';
import './Benifits.css';
const Benifits = () => {
    return (
        <div className="benifits">
            <h1 style={{ fontSize: '3rem',color:'#A08A66'}}>Other benifits for our <br />customers</h1>
            <br /><br /><br/>
            {/* <div>
            <h1 style={{color:'#162044',fontSize:'2.5rem'}}>Finest luxary <br/> restaurent</h1>
           </div> */}
            <div className='luxary2'> 
            <div className="col-md-4">
        <h1>
        Finest luxary <br />
        restaurent
        </h1>

        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia,
          <br /> there live the blind texts. Separated they live in
          Bookmarksgrove right at the coast of the Semantics, a large
          <br /> language ocean. <br />
          <br />
          <br />
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia,
          <br /> there live the blind texts. Separated they live in
          Bookmarksgrove right at the coast of the Semantics, a large <br />
          language ocean.
        </p>

        <button>Explore More</button>
      </div>
            <div className="col-md-8 ">
        <img src="https://i.ibb.co/z562Fkj/finest-luxary2.png" alt="" />
            </div>
        
             </div>
        </div>
    );
};

export default Benifits;