import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/Store/store'
import { testReducer } from '../Redux/Slices/searchImageSlice'
import { useAppDispatch, useAppSelector } from '../Redux/hooks'

function TestComponent() {

    const hrefVal = useAppSelector((state)=> state.searchImageSlice.data[0])
    
    const dispatch = useAppDispatch()
  return (
    <>
    
    <div>TestComponent</div>

    <h1> { hrefVal.description }</h1>

    <div>
        <button className='btn-primary' onClick={()=> dispatch(testReducer())} >
            Change Text
        </button>
    </div>

    </>



  )
}

export default TestComponent