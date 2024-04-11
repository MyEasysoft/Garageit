import React, { useState } from "react"
import { Calendar } from "react-multi-date-picker"

export default function DatePicker2() {
  const [value, setValue] = useState(new Date())
  

  return (
    <Calendar 
      
      value={value}
      onChange={setValue}
    />
  )
}