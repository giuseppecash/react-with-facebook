import moneybag from '../savings/moneybag.svg'
import plusSquare from '../savings/plusSquare.svg'



const SavingDetails = (props) => {
     
          
    const names = props.name
    return (
        <div className="container-fluid row m-5 " style={{background: " lightgrey"}} >
            <div className=" col-4" >
                <div className=" row m-5">
                    <div className="row py-1 ms-1  bg-dark" style={{color: "grey",borderRadius:"15px"}} >
                       <div className="col-8">
                           <p className="text-light pt-1">Total saved</p>
                           <h4 className="text-light">#23,500</h4>
                       </div>
                       <div className="col-4">
                           <img className="ms-5 my-4 w-50" src={moneybag} alt='plus'></img>
                       </div>
                    </div>
                </div>
                <div className=" row m-5 bg-white py-5" style={{border: "2px solid white",borderRadius:"15px"}}>
                    <h6 className="pb-5">Transaction history</h6>
                    <p className="" style={{color: "grey"}}>{names.startDate}</p>
                    <div className="row">
                        <div className="col-9">
                            <h6>{names.name}</h6>
                            <h6 className="" style={{color: "grey"}}>{names.time} PM - Fund</h6>
                        </div>
                        <div className="col "><h6 className='pt-3'>{names.amount}</h6></div>
                    </div><hr/>
                    <div className="row">
                        <div className="col-8">
                            <h6>{names.name}</h6>
                            <h6 className="" style={{color: "grey"}}>{names.time} PM - Fund</h6>
                        </div>
                        <div className="col "><h6 className='pt-3'>{names.amount}</h6></div>
                    </div><hr/>
                </div>
            </div>
            <div className="container-fluid col-8" >
                <div className=" row ">
                    <div className=" col-5 my-5 mx-4 bg-white " style={{border: "2px solid white", borderRadius:"15px"}}>
                        <div className=" rounded-3 text-center py-5">
                            <img src={plusSquare} className="w-25 m-3 img-fluid" alt='plus'></img>
                            <h6>Create new savings</h6>
                        </div>
                    </div>
                    <div className=" col-5 mt-5 mb-5  bg-white "  style={{borderRadius:"15px"}} >
                        
                        <div className="row mt-5 border-bottom">
                            <div className="row">
                                <div className="col-9">
                                    <h6>{names.name}</h6>
                                    <div className="progress" style={{height: "1px;"}}>
                                    <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className='pt-3 ' style={{color: "grey"}}>{names.totalInterestEarned}</p>
                                </div>
                                <div className="col "><h6 className='pt-3' >{names.amountToSave}</h6></div>
                            </div>        
                        </div>
                        <div className="row border-bottom">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Total saved <br/>{names.amountSaved}</h6>     
                                </div>
                                <div className="col-6 ">
                                <h6 className="py-3">Interest Rate<br/>{names.interestRate}</h6>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Start Date<br/>{names.startDate}</h6>
                            </div>
                            <div className="col-6">
                                <h6 className="py-3">Maturity Date<br/>{names.maturityDate}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" row ">
                <div className=" col-5 my-5 mx-4 bg-white " style={{border: "2px solid white", borderRadius:"15px"}}>
                        
                        <div className="row mt-5 border-bottom">
                            <div className="row">
                                <div className="col-8">
                                    <h6>{names.name}</h6>
                                    <div className="progress" style={{height: "1px;"}}>
                                    <div className="progress-bar bg-red" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className='pt-3' style={{color: "grey"}}>{names.totalInterestEarned}</p>
                                </div>
                                <div className="col "><h6 className='pt-3 ' style={{color: "grey"}}>{names.amountToSave}</h6></div>
                            </div>      
                        </div>
                        <div className="row border-bottom">
                           
                            <div className="col-6 border-end">
                                <h6 className="py-3">Total saved <br/>{names.amountSaved}</h6>     
                                </div>
                                <div className="col-6 ">
                                <h6 className="py-3">Interest Rate<br/>{names.interestRate}</h6>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Start Date<br/>{names.startDate}</h6>
                            </div>
                            <div className="col-6">
                                <h6 className="py-3">Maturity Date<br/>{names.maturityDate}</h6>
                            </div>
                        </div>
                    </div>
                    <div className=" col-5 mt-5 mb-5  bg-white " style={{borderRadius:"15px"}} >
                        
                        <div className="row mt-5 border-bottom">
                            <div className="row">
                                <div className="col-9">
                                    <h6>{names.name}</h6>
                                    <div className="progress" style={{height: "1px;"}}>
                                    <div className="progress-bar bg-info" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className='pt-3 'style={{color: "grey"}}>{names.totalInterestEarned}</p>
                                </div>
                                <div className="col "><h6 className='pt-3 ' style={{color: "grey"}}>{names.amountToSave}</h6></div>
                            </div>         
                        </div>
                        <div className="row border-bottom">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Contribution<br/>{names.installmentalContribution}/Day</h6>     
                                </div>
                                <div className="col-6 ">
                                <h6 className="py-3">Interest Rate<br/>{names.interestRate}</h6>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Start Date<br/>{names.startDate}</h6>
                            </div>
                            <div className="col-6">
                                <h6 className="py-3">Maturity Date<br/>{names.maturityDate}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" row ">
                <div className=" col-5 my-5 mx-4 bg-white " style={{border: "2px solid white",borderRadius:"15px"}}>
                        
                        <div className="row mt-5 border-bottom">
                            <div className="row">
                                <div className="col-8">
                                    <h6>{names.name}</h6>
                                    <div className="progress" style={{height: "1px;"}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: "30%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className='pt-3 ' style={{color: "grey"}}>{names.totalInterestEarned}</p>
                                </div>
                                <div className="col "><h6 className='pt-3' style={{color: "grey"}}>{names.amountToSave}</h6></div>
                            </div>         
                        </div>
                        <div className="row border-bottom">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Contribution<br/>{names.installmentalContribution}</h6>     
                                </div>
                                <div className="col-6 ">
                                <h6 className="py-3">Interest Rate<br/>{names.interestRate}</h6>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Start Date<br/>{names.startDate}</h6>
                            </div>
                            <div className="col-6">
                                <h6 className="py-3">Maturity Date<br/>{names.maturityDate}</h6>
                            </div>
                        </div>
                    </div>
                    <div className=" col-5 mt-5 mb-5  bg-white "  style={{borderRadius:"15px"}}>
                        
                        <div className="row mt-5 border-bottom">
                            <div className="row">
                                <div className="col-9">
                                    <h6>{names.name}</h6>
                                    <div className="progress" style={{height: "1px;"}}>
                                    <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className='pt-3 ' style={{color: "grey"}}>{names.totalInterestEarned}</p>
                                </div>
                                <div className="col "><h6 className='pt-3 ' style={{color: "grey"}}>{names.amountToSave}</h6></div>
                            </div>        
                        </div>
                        <div className="row border-bottom">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Total saved <br/>{names.amountSaved}</h6>     
                                </div>
                                <div className="col-6 ">
                                <h6 className="py-3">Interest Rate<br/>{names.interestRate}</h6>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-6 border-end">
                                <h6 className="py-3">Start Date<br/>{names.startDate}</h6>
                            </div>
                            <div className="col-6">
                                <h6 className="py-3">Maturity Date<br/>{names.maturityDate}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      
    )
}

export default SavingDetails