import React from 'react'
import UpperCards from './UpperCards'

const FirstRow = () => {
    const title = [
        {
            "title": 'dashboard',
            "subh": 'Total Resources',
            "num": '$2,129,430',
            "par": "+2.19%",
            "id": 1
        },
        {
            "title": 'transaction',
            "subh": 'Total Transactions',
            "num": '1502',
            "par":"+1.7%",
             "id": 2
        },
        {
            "title": 'likes',
            "subh": 'Total ResourLikesces',
            "num": '3900',
            "par": "+1.2%",
            "id": 3
        },
        {
            "title": 'users',
            "subh": 'Total Users',
            "num": '9721',
            "par": "+1.7%",
            "id": 4
        }
    ]
  return (
    <>
          <div className="firstRow">
              {title.map((data)=>{
                  return (
                    <UpperCards key={data.id} title={data.title} subh={data.subh} num={data.num} par={data.par} />
                )
              })}
    </div>
      </>
  )
}

export default FirstRow