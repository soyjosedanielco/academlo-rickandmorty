import React from 'react'

export default function Input ({onSubmitFunction}) {
  return (
      <form onSubmit={onSubmitFunction} action="">
        <input type="text" placeholder="1 to 126"/>
        <button>Search</button>
      </form>
  )
}
