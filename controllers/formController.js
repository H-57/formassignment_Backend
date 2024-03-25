import Orders from '../models/formModel.js'
import validator from "validator"
export async function saveForm(req, res) {
    try {
        const {firstName,lastName,email,number,address,address2,city,state,zip,country,products}=req.body
// console.log(req.body)
if(!firstName||!lastName||!email||!number||!address||!city||!state||!zip||!country||!products){
return res.status(400).json({message:"All fields are required",success:false})

}
if(!validator.isEmail(email)){
    return res.status(400).json({message:"Invalid email",success:false})
}
if(!validator.isMobilePhone(number)){
    return res.status(400).json({message:"Invalid number",success:false})}

    const result =await Orders.create(req.body)
    res.status(200).json({message:"success",data:result,message:"order created",success:true})

    } catch (error) {
        
        res.status(400).json({message:"server error",success:false})
    }


}