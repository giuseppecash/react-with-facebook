import Facebookbutton from "./Facebookbutton"
import Facebooksearch from "./Facebooksearch"



const Facebookbody = () => {

    return(
        <div className="container-fluid row bg-light">
                <div className="col-3">

                </div>
                <div className="col-3 card my-5 w-50" >
                
                    <div className="">
                        <p className="fs-4 fw-bold my-3 ps-3">Find Your Account</p>
                    </div> <hr/>
                    <div className="card-body ">
                        <p className="card-text fst-normal">Please enter your email address or mobile number to search <br/>
                         for your account.</p>
                        <input type="email" class="form-control" id="emailOrPhone" placeholder="Email address or mobile number" />
                    </div> <hr/>
                    <div className="my-3 row">
                        <div className="col-8"></div>
                        <div className="col-2"><Facebooksearch name="Cancel" /></div> 
                        <div className="col-2"><Facebookbutton name="Search"/></div>
                        
                    </div>
                    
                </div>
                <div className="col-3">

                </div>
            </div>
    )
}

export default Facebookbody