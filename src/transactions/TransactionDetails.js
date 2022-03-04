import moneybag from '../transactions/moneybag.svg'
import plusSquare from '../transactions/plusSquare.svg'



const TransactionDetails = (props) => {

    const names = props.name
    return (
        <div className="container-fluid row m-5 bg-light" >
            <div className=" col-4" >
                <div className=" row m-5">
                    <div className="row rounded-3 py-1 ms-1 text-light bg-dark" >
                       <div className="col-8">
                           <p>Total saved</p>
                           <h4>#23,500</h4>
                       </div>
                       <div className="col-4">
                           <img className="ms-5 my-4 w-50" src={moneybag} alt='plus'></img>
                       </div>
                    </div>
                </div>
                <div className=" row m-5 bg-white py-5 rounded-3" style={{border: "2px solid white"}}>
                    <p className="pb-5">Transaction history</p>
                    <p>{names.lastModifiedDate}</p>
                    <div className="row">
                        <div className="col-9">
                            <h6>{names.name}</h6>
                            <h6>{names.creationDate} PM - Fund</h6>
                        </div>
                        <div className="col "><h6 className='pt-3'>{names.amount}</h6></div>
                    </div><hr/>
                    <div className="row">
                        <div className="col-8">
                            <h6>{names.name}</h6>
                            <h6>{names.creationDate} PM - Fund</h6>
                        </div>
                        <div className="col "><h6 className='pt-3'>{names.amount}</h6></div>
                    </div><hr/>
                </div>
            </div>
            <div className="container-fluid col-8" >
                <div className=" row ">
                    <div className=" col-4 my-5 mx-4 bg-white rounded-3" style={{border: "2px solid white"}}>
                        <div className=" rounded-3 text-center py-5">
                            <img src={plusSquare} className="w-25 m-3 img-fluid" alt='plus'></img>
                            <h6>Create new savings</h6>
                        </div>
                    </div>
                    <div className=" col-6 mt-5 mb-5  bg-white rounded-3" >
                        
                        <div className="row mt-5 border-bottom">
                                    
                        </div>
                        <div className="row border-bottom">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Total saved <br/>{names.amount}</h6>     
                                </div>
                                <div className="col-6 ">
                                <h6 className="py-3">Interest Rate<br/>N/A</h6>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Start Rate<br/>Mar 2nd 2022</h6>
                            </div>
                            <div className="col-6">
                                <h6 className="py-3">Maturity Date<br/>Mar 7th 2022</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" row ">
                <div className=" col-4 my-5 mx-4 bg-white rounded-3" style={{border: "2px solid white"}}>
                        
                        <div className="row mt-5 border-bottom">
                                    
                        </div>
                        <div className="row border-bottom">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Total saved <br/>{names.amount}</h6>     
                                </div>
                                <div className="col-6 ">
                                <h6 className="py-3">Interest Rate<br/>N/A</h6>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Start Rate<br/>Mar 2nd 2022</h6>
                            </div>
                            <div className="col-6">
                                <h6 className="py-3">Maturity Date<br/>Mar 7th 2022</h6>
                            </div>
                        </div>
                    </div>
                    <div className=" col-6 mt-5 mb-5  bg-white rounded-3" >
                        
                        <div className="row mt-5 border-bottom">
                                    
                        </div>
                        <div className="row border-bottom">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Total saved <br/>{names.amount}</h6>     
                                </div>
                                <div className="col-6 ">
                                <h6 className="py-3">Interest Rate<br/>N/A</h6>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Start Rate<br/>Mar 2nd 2022</h6>
                            </div>
                            <div className="col-6">
                                <h6 className="py-3">Maturity Date<br/>Mar 7th 2022</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" row ">
                <div className=" col-4 my-5 mx-4 bg-white rounded-3" style={{border: "2px solid white"}}>
                        
                        <div className="row mt-5 border-bottom">
                                    
                        </div>
                        <div className="row border-bottom">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Total saved <br/>{names.amount}</h6>     
                                </div>
                                <div className="col-6 ">
                                <h6 className="py-3">Interest Rate<br/>N/A</h6>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Start Rate<br/>Mar 2nd 2022</h6>
                            </div>
                            <div className="col-6">
                                <h6 className="py-3">Maturity Date<br/>Mar 7th 2022</h6>
                            </div>
                        </div>
                    </div>
                    <div className=" col-6 mt-5 mb-5  bg-white rounded-3" >
                        
                        <div className="row mt-5 border-bottom">
                                    
                        </div>
                        <div className="row border-bottom">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Total saved <br/>{names.amount}</h6>     
                                </div>
                                <div className="col-6 ">
                                <h6 className="py-3">Interest Rate<br/>N/A</h6>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Start Rate<br/>Mar 2nd 2022</h6>
                            </div>
                            <div className="col-6">
                                <h6 className="py-3">Maturity Date<br/>Mar 7th 2022</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TransactionDetails