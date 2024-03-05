import {memo} from 'react'

const ExampleCallBack = ({item}) => {
  console.log('Hello I am child component')
  return (
    <>
<h1>item: {item}</h1>

    </>
  )
}

export default memo(ExampleCallBack)