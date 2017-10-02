import React from 'react'

const MyBbqList = (props) => {
  const mappedList = props.bbqList.map((bbq, index) => {
    return (null)

  })
  return (
    <div>
      <h3>Your Favorite BBQs spots</h3>
      <div className="ui ordered list">
        {mappedList}
      </div>
    </div>
  )
}

export default MyBbqList
