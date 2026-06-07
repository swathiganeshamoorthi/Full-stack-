import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name ="swathi" age ={19} 
        marks={[90,92,90,98,99]}
        person={{name:"swathi",dept:["CT"]} }/>
    </div>
  )
}

export default Parent