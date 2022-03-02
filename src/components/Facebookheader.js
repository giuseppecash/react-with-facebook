import Facebookbutton from "./Facebookbutton"
 import Facebooklogo from './Facebooklogo.svg';
 



const Facebookheader = () => {

    return (

        <div className="container-fluid row m-0 p-0 lh-0">
            <div className="col-5 ">
            <img src={Facebooklogo} className="img-fluid ms-3" alt="logo" style={{width: "100px", }} />
            </div>
            <div className="col-2">
                <input type="email" className="form-control mt-2" id="emailOrPhone" placeholder="Email or Phone" />
            </div>
            <div className="col-2">
                <input type="email" className="form-control mt-2" id="password" placeholder="Password" />
            </div>
            
            <Facebookbutton className="" name="Login"/>
            <div className="col-2 mt-2">
                <a href="facebook.com" className="text-decoration-none">Forgotten account?</a>
            </div>

        
        </div>
    )
}

export default Facebookheader