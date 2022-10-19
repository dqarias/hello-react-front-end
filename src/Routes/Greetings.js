import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchGreeting from '../Services/greetingAPI'

const Greetings = () => {

    const greetings = useSelector((state) => state.greetings.greetings);
    const dispatch = useDispatch();
    console.log(greetings)
  

    useEffect(() => {
        dispatch(fetchGreeting());
      }, []);

  return (
    <div>
        <div>Greetings</div>
        {greetings}
    </div>
  )
}

export default Greetings