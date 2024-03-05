import {useEffect} from 'react'

export default function UseEffectHook2({data}) {
    useEffect(() => {
    console.log('Data Received',data)
    }, [data])
  return (
    <>
    <h1>{data}</h1>
    </>
  )
}
