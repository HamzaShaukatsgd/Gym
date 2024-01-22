import React from 'react'
import { ErrorMessage } from 'formik'

const JoinFormSchemas = ({name}) => {
  return (
    <div  style={{color:"red"}}>
      <ErrorMessage name={name}/>
    </div>
  )
}

export default JoinFormSchemas
