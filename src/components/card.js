import './card.css';

function Card(){
    return(
        <div className="container">
            <div className="card-container">
                <div className="card-img">
                    <img className="img-card" src='https://images.ecestaticos.com/4ig0zsLUlk1iVTkJuLwLIMK6_uI=/0x0:2272x1648/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F03b%2F854%2F5e8%2F03b8545e84d6c95d4692ea8fd8091a7b.jpg'></img>
                </div>
                <div className="description-card">
                    <p className="tittle">Charles Oliveira</p>
                    <p className="desciption">El 7 de Mayo, el evento numerado de este mes tendrá una alta carga de buenas contiendas, empezando por la estelar en la que Charles Oliveira expondrá el cetro ligero de la promoción ante el siempre espectacular Justin Gaethje. </p>
                </div>
            </div>
        </div>
    );
}

export default Card;