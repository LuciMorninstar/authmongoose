import { userModel } from "../models/userModel.js";



// register user also check if email already exists

export const registerUser = async(req,res,next)=>{
    try {

        
    const {firstName, lastName, email, password} = req.body;

    if(!firstName || !lastName || !email || !password){
        return res.status(400).json({
            message:"All fields are mandatory",
            success:false
        })

    }

    let existingUser = await userModel.findOne({email:email});

    if(existingUser){
        return res.status(400).json({
            message:"Email already in use! Try another email",
            success:false
        })
    }

    const userinfo = await userModel.create({
        firstName : firstName,
        lastName:lastName,
        email:email,
        password:password
    })
    res.status(201).json({
        message:"You have been registered",
        success:true
    })






        
    } catch (error) {

        res.status(500).json({message:"Internal server error", success:false})

        // console.log("User not registered because of internal server error")
        
    }


}   


//getUserDataById

export const getUserDataById = async(req,res,next)=>{
    try {
        const id = req.params.id;

        // const {firstName, lastName, email, password } = req.body;

        if(!id){
            return res.status(400).json({
                message:"Id is not entered",
                success:false
            })
            
        }

        // const userWithThatId = await userModel.find({_id:id},{firstname:true,lastName:true, password:true, email:true})

           const userWithThatId = await userModel.findOne({_id:id})



        if(!userWithThatId){
            return res.status(400).json({
                message:"User with that id doesn't exist in the database",
                success:false
            })
        }

        res.status(200).json({
            message:`User with the id ${id} found`,
            success:true,
            data:{
               firstName: userWithThatId.firstName,
               lastName: userWithThatId.lastName,
            
        
            }

        
        // res.status(200).json({
        //     message:`User with the id ${id} found`,
        //     success:true,
        //     data:userWithThatId
            



        })

        // console.log(userWithThatId);

        








        
    } catch (error) {

        res.status(500).json({
            message:"Internal Server Error",
            success:false
        })
        
    }
}


//update userinfo using the id


 export const updateuserinfo = async(req,res,next)=>{

    try {
        const id = req.params.id;
        const updatedData = req.body;

        if(!id){
            return res.status(400).json({
                message:"No id found",
                success:false
            })
        }

        const updatedUser = await userModel.findByIdAndUpdate({_id:id}, updatedData, {new:true});

        if(!updatedUser){
            return res.status(400).json(
                {
                message:"User with that id not found",
                 success:false
                }
        )
        }

        res.status(200).json({
            message:"Updated User successfully",
            success:true,
            data:updatedUser
        })






        
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
            success:false
        })
        
    }

}


//Delete user


export const deleteUser = async(req,res,next)=>{
    try {

        const id = req.params.id;

        if(!id){
            return res.status(400).json({
                message:"No user Id Found",
                success:false
            })
        }

        const deleteUser =  await userModel.findByIdAndDelete(id)

        if(!deleteUser){
            return res.status(400).json({
                message:"No such id exists",
                success:false
            })
        }

        res.status(200).json({
            message: "User successfully deleted",
            success:true,
        
        })
        console.log(deleteUser.firstName);



        

    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
            success:false
        })
        
    }

}






    

