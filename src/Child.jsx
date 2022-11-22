import React from 'react'

const Child = ({onSubmit}) => {
  return (
    <>
    <div>Child</div>
    <button onClick={onSubmit}>Change Parent Value</button>
    </>
  )
}

export default Child

