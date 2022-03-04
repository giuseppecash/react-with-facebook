import plusSquare from '../transactions/plusSquare.svg'


const TransactionEmpty = (props) => {

    return(


<div className="container-fluid row m-5 bg-light" >
<div className=" col-4" >
    <div className=" row ">
        <div className="row " >
           
           <div className="col-4">
              
           </div>
        </div>
    </div>
    <div className=" row " >
       
    </div>
</div>
<div className="container-fluid col-8" >
    <div className=" row ">
        <div className=" col-4 my-5 mx-4 bg-white rounded-3" style={{border: "2px solid white"}}>
            <div className=" rounded-3 text-center py-5">
                    <img src={plusSquare} className="w-25 m-3 img-fluid" alt='plus'></img>
                    <h6>{props.create}</h6>
            </div>
        </div>
        <div className=" col-6" >
            
            <div className="row mt-5 ">
                        
            </div>
            <div className="row ">
                <div className="col-6 ">
                         
                    </div>
                    <div className="col-6 ">
                   
                </div>
            </div>
            <div className="row ">
                <div className="col-6 ">
                   
                </div>
                <div className="col-6">
                    
                </div>
            </div>
        </div>
    </div>
</div>

</div>
    )
}

export default TransactionEmpty