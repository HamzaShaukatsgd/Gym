import React, { useState } from "react";
import "../css/JoinForm.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import { useFormik } from 'formik'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import JoinFormSchemas from "../Schemas/JoinFormSchemas";

const ValidationSchema1 = yup.object({
  Name: yup.object({
    first_name: yup.string().required("Please Enter First Name"),
    last_name: yup.string().required("Please Enter Last Name"),
  }),
  current_weight: yup.number().required("Enter Weight"),
  height: yup.number().required("Enter Height"),
  desired_Weight: yup.number().required("Enter Desired Weight"),
  home_address: yup.string().required("Please Enter Home Address"),
  email: yup.string().email("Enter a valid email").required("Enter Email"),
  State: yup.string().required("Please select a State"),
  Trainer: yup.string().required("Please select a Trainer"),
  MemberType: yup.string().required("Please select a Member Type"),
  PostalCode: yup.string().max(3, "Postal Code should be 3 characters").required("Enter Postal Code"),
  Province: yup.string().min(4, "Province should be at least 4 characters").required("Enter Province"),
  City: yup.string().required("Please select a City"),
  Require_Personal: yup.string().required("Please select if you require a Personal Trainer"),
});

const Join_Form = () => {
  const [storeData, setStoreData] = useState([]);
  return (
    <>
      <Navbar />
      <div className="Section-JoinForm min-h-[100vh] w-[100vw] flex justify-center items-center box-border pt-6 pb-6 flex-col">
        <div className="form-container  w-[90vw] h-auto rounded  
        p-2
        md:p-8 md:w-[70vw]
        lg:p-8 lg:w-[70vw]">
          <h1
            className="text-gray-700 font-light text-3xl text-center
           md:text-4xl
           lg:text-5xl  "
          >
            Joining Form
          </h1>
          <Formik
            validationSchema={ValidationSchema1}
            initialValues={{
              Name: {
                first_name: "",
                last_name: "",
              },
              current_weight: "",
              height: "",
              desired_Weight: "",
              home_address: "",
              email: "",
              State: "",
              Trainer: "",
              MemberType: "",
              PostalCode: "",
              Province: "",
              City: "",
              Require_Personal: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              setStoreData([...storeData, values]);
            }}
          >
            <Form action="" className="flex flex-col gap-4">
              <div className="Name-input ">
                <label
                  htmlFor="name"
                  className="
                common-label"
                >
                  Name<span className="text-red-700">*</span>
                </label>
                <div className="name-input1 flex w-[100%] gap-4">
                  <div className="flex flex-col w-[100%]">
                    <Field
                      type="text"
                      placeholder="First Name"
                      name="Name.first_name"
                      id="first_name"
                      autoComplete="off"
                      className="w-[100%] common-input outline-none  "
                    />
                    <JoinFormSchemas name="Name.first_name" />
                  </div>
                  <div className="flex flex-col w-[100%]">
                    <Field
                      className="w-[100%] common-input outline-none"
                      type="text"
                      name="Name.last_name"
                      id="last_name"
                      autoComplete="off"
                      placeholder="last Name "
                    />

                    <JoinFormSchemas name="Name.last_name" />
                  </div>
                </div>
              </div>
              <div className="current-weight flex flex-col gap-2 ">
                <label
                  htmlFor="current_weight"
                  className="
                common-label"
                >
                  Your Current Weight (lbs)
                  <span className="text-red-700">*</span>
                </label>
                <Field
                  type="text"
                  name="current_weight"
                  id="current_weight"
                  placeholder="Plz Enter Current Weight"
                  className="common-input outline-none"
                />
              </div>
              <JoinFormSchemas name="current_weight" />
              {/* <ErrorMessage  name="current_weight" className="text-red-600"/> */}
              {/* {errors.current_weight && touched.current_weight ?(<p className='text-red-600'>{errors.current_weight}</p>) : null} */}
              <div className="desired-weight flex flex-col gap-2 ">
                <label htmlFor="height" className="common-label">
                  Height<span className="text-red-700">*</span>
                </label>
                <Field
                  type="text"
                  placeholder="Plz Enter Height"
                  className="common-input outline-none"
                  name="height"
                  id="height"
                />
              </div>
              <JoinFormSchemas name="height"/>
              {/* {errors.height && touched.height ?(<p className='text-red-600'>{errors.height}</p>) : null} */}
              <div className="desired-weight flex flex-col gap-2 ">
                <label htmlFor="desired_Weight" className="common-label">
                  Desired Weight (lbs)<span className="text-red-700">*</span>
                </label>
                <Field
                  type="text"
                  name="desired_Weight"
                  id="desired_Weight"
                  placeholder="Plz Enter Height"
                  className="common-input outline-none"
                />
              </div>
              <JoinFormSchemas name="desired_Weight"/>
              <div className="Trainer_name flex flex-col gap-2 ">
                <label htmlFor="" className="common-label">
                  Trainer Name<span className="text-red-700">*</span>
                </label>

                <Field
                  as="select"
                  className="w-[100%] common-input"
                  name="Trainer"
                  id=""
                >
                  <option value="Ali Ahmed">Ali Ahmed</option>
                  <option value="Sohail Akhter">Sohail Akhter</option>
                  <option value="Muhammad Umair">Muhammad Umair</option>
                </Field>
              </div>
              <JoinFormSchemas name="Trainer"/>
              <div className="Home-address flex flex-col gap-2">
                <label htmlFor="home_address" className="common-label">
                  Home Addess<span className="text-red-700">*</span>
                </label>
                <Field
                  type="text"
                  name="home_address"
                  id="home_address"
                  placeholder="Plz Enter Street Address"
                  className="common-input outline-none"
                />
                 <JoinFormSchemas name="home_address"/>
                <div
                  className="State-input flex w-[100%]  mt-[0.5rem] gap-1
                lg:gap-4"
                >
                  <div className="w-[50%]">
                  <Field
                    type="text"
                    placeholder="Postal/Zip-Code"
                    name="PostalCode"
                    className="w-[100%] common-input outline-none"
                  />
                  <JoinFormSchemas name="PostalCode"/>
                  </div>
                  <div className="w-[50%]">
                  <Field
                    as="select"
                    className="w-[100%] common-input"
                    name="State"
                    id=""
                  >
                    <option value="State">State</option>
                    <option value="Jinnah Garden">Jinnah Garden</option>
                    <option value="Ghouri Town">Ghouri Town</option>
                  </Field>
                  <JoinFormSchemas name="State"/>
                  </div>
                </div>
                <div
                  className="City-input1 flex w-[100%] gap-1 mt-[0.5rem] 
                lg:gap-4"
                >
                  <div className="w-[50%]">
                  <Field
                    type="text"
                    placeholder="Province"
                    name="Province"
                    className="w-[100%] common-input outline-none"
                  />
                  <JoinFormSchemas name="Province"/>
                  </div>
                   <div className="w-[50%]">
                  <Field
                    as="select"
                    className="w-[100%] common-input"
                    name="City"
                    id=""
                  >
                    <option value="City">City</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Pakistan">Pakistan</option>
                  </Field>
                  <JoinFormSchemas name="City"/>
                  </div>
                </div>
              </div>
              <div className="Email flex flex-col gap-1 ">
                <label htmlFor="email" className="common-label">
                  Email<span className="text-red-700">*</span>
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="common-input outline-none"
                />
              </div>
              {/* {errors.email && touched.email ?(<p className='text-red-600'>{errors.email}</p>) : null} */}
              <JoinFormSchemas name="email"/>
              <div className="radio-personal">
                <h1 className="common-label">Member Type</h1>
                <label
                  htmlFor=""
                  className="block common-label"
                  name="MemberType"
                >
                  <Field
                    type="radio"
                    className="w-[5%] h-[0.8em] border-[0px] "
                    value="Regular"
                    name="MemberType"
                  />{" "}
                  Regular
                </label>
                <label htmlFor="" className="block common-label ">
                  <Field
                    type="radio"
                    className="w-[5%] h-[0.8em] border-[0px]"
                    value="Vip"
                    name="MemberType"
                  />{" "}
                  Vip
                </label>
                <label htmlFor="" className="block common-label ">
                  <Field
                    type="radio"
                    className="w-[5%] h-[0.8em] border-[0px]"
                    value="Pro"
                    name="MemberType"
                  />{" "}
                  Pro
                </label>
                <JoinFormSchemas name="MemberType"/>
              </div>
              <div className="radio-personal">
                <h1 className="common-label">
                  Do You Require Personal Trainer
                </h1>
                <label htmlFor="" className="block common-label">
                  <Field
                    type="radio"
                    className="w-[5%] h-[0.8em] border-[0px] "
                    name="Require_Personal"
                    value="Yes"
                  />{" "}
                  Yes
                </label>
                <label htmlFor="" className="block common-label ">
                  <Field
                    type="radio"
                    className="w-[5%] h-[0.8em] border-[0px]"
                    name="Require_Personal"
                    value="No"
                  />{" "}
                  No
                </label>
                <JoinFormSchemas name="Require_Personal"/>
              </div>

              <div className="flex justify-center items-center">
                <button
                  className="w-[80%] bg-green-700 text-white rounded-full  hover:scale-105 text-[1.2rem]
              md:text-[1.2rem] md:p-4 
              lg:text-2xl lg:p-4"
                  type="submit"
                >
                  Join
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="list_joining bg-white p-4 mt-8">
          <h1 className="text-center text-3xl font-bold">Joining List</h1>
          <table>
            <thead>
              <tr>
                <th className="p-2">Full Name</th>
                <th className="p-2">Desired Weight</th>
                <th className="p-2">Current Weight</th>
                <th className="p-2">Height</th>
                <th className="p-2">Home Address</th>
                <th className="p-2">State</th>
                <th className="p-2">City</th>
                <th className="p-2">Province</th>
                <th className="p-2">Email</th>
                <th className="p-2">Member Type</th>
                <th className="p-2">Req Personal Trainer</th>
              </tr>
            </thead>
            <tbody>
              {storeData.map((item, index) => {
                return (
                  <tr>
                    <td className="p-2">
                      {item.Name.first_name}
                      {item.Name.last_name}
                    </td>
                    {/* <td className='p-2'>{item.last_name}</td> */}
                    <td className="p-2">{item.desired_Weight}</td>
                    <td className="p-2">{item.current_weight}</td>
                    <td className="p-2">{item.height}</td>
                    <td className="p-2">{item.home_address}</td>
                    <td className="p-2">{item.State}</td>
                    <td className="p-2">{item.City}</td>
                    <td className="p-2">{item.Province}</td>

                    <td className="p-2">{item.email}</td>
                    <td className="p-2">{item.MemberType}</td>
                    <td className="p-2">{item.Require_Personal}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Join_Form;
