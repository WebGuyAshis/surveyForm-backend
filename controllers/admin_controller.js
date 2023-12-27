import Admin from "../models/admin.js";
import SurveyForm from "../models/surveyForm.js";

export const create_Admin = async (req, res) => {
  try {
    const { email } = req.body;
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res
        .status(409)
        .json({ error: "Admin already exists with same email!" });
    }
    const newAdmin = await Admin.create(req.body);
    if (newAdmin) {
      return res
        .status(200)
        .json({ message: "Admin Account Created Successfull!" });
    }
    return res.status(500).json({ error: "Internal Server error!" });
  } catch (error) {
    console.log("error!", error);
    return res.status(500).json({ error: "Internal Server error!" });
  }
};

export const signInUser = async (rew, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res
        .status(404)
        .json({ error: "Admin with this email is not Registered!" });
    }
    if (admin.password !== password) {
      return res.status(401).json({ error: "Invalid Credentials!" });
    }

    return res.status(200).json({ message: "Login Successfull!" });
  } catch (error) {
    console.log("error!", error);
    return res.status(500).json({ error: "Internal Server Error!" });
  }
};
