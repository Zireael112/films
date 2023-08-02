import React from 'react'
import Star from './Star'

type TCount = {
    count: number
}


export default function Stars({count}: TCount) {
  let arr = []
  for (let i = 0; i !== count; i++) {
    arr.push(null)
  }
  let isValid = count < 6

  return (
    <ul className="card-body-stars u-clearfix">
        {isValid ? arr.map((el, i) => <li key={i + 1}><Star /></li>) : undefined}
    </ul>
    )
}
