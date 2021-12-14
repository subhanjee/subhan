import React from 'react'
import './Add.css'


function Add() {
    return (
        <div>



            <div className="addsectionbg111">
            
                <div className="addSection111">

                    <div className="txtimgdiv">
                    <img className="imageclass1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZKjf9cIz-Qn0iWiXeI61CnLqDylBwM5NIHQ&usqp=CAU" alt="Addimage"/>
                    <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
                            <div className="txtdiv" >
                                <p className="txtapp"><b>TriSage App</b></p>
                                <p className="txtapp1" ><b> Download the App and Get 50% Off</b></p>
                                <p className="txtapp2"> *New Customers Only | Max Discount: Rs.100</p>
                            </div> 
                        <div >
                        <button className="btn111">Download</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add
