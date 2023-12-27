import Form from '../models/surveyForm.js'

export const create_form_data = async(req,res) =>{
    
    try {
        const {email} = req.body;
        console.log("Form Data Recieved:", req.body);
        // Checking Existing Email
        let existingEmail = await Form.findOne({email})
        if(existingEmail){
            return res.status(409).json({error: "Survey Data is Already Present for this Email!"})
        }

        const newSurveyData = await Form.create(req.body);
        if(newSurveyData){
            return res.status(200).json({message:"Successfully recorded user response"})
        }
        return res.status(500).json({error:"Internal Server Error!"})
    } catch (error) {
        console.log("Error :", error);
        return res.status(500).json({error:"Internal Server Error!"})
    }
}



