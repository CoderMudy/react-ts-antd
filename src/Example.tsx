import React, { useEffect, useState } from 'react'

const Example = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `你点击了${count}次title`
    });

    return (
        <div>
            <p>你点击了{count}次 </p>
            <button onClick={()=>{
                setCount(count+1)
            }}>
                点这里
            </button>
        </div>
    )
}

export default Example