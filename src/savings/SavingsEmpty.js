import plusSquare from '../savings/plusSquare.svg'


const SavingsEmpty = (props) => {

    return(

        <div>
            <div className=" rounded-3 text-center py-5">
                    <img src={plusSquare} className="w-25 m-3 img-fluid" alt='plus'></img>
                    <h6>{props.create}</h6>
            </div>
        </div>
    )
}

export default SavingsEmpty