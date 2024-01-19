import * as Yup from "yup";

export const joinUpSchema = Yup.object({
  first_name: Yup.string().min(2).max(25).required("Plz Enter Your First Name"),
  last_name: Yup.string().min(2).max(25).required("Plz Enter Your last Name"),
  current_weight: Yup.number().min(2).required("Enter Your Current Weight"),
  height: Yup.number().min(1).required("Enter You Height"),
  desired_Weight: Yup.number().min(2).required("Enter Your Desired Weight"),
  home_address: Yup.string().min(10).required("Enter Your Eddress"),
  email: Yup.string().email().required("Please Enter Your Email"),
});

//Ager hum 2 input field ma chate ha same code validate hu tu ya command add karey ga e.g password or conform password ka liya, tu ya dusri wali input ka sath add kar dain ga

//.oneOf([Yup.ref("password"),null],"Password must match")
