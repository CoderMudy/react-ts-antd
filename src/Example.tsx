import React, { useEffect, useState } from 'react'
import Item from './Item'

const Example = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState<any>([])

    // useEffect(()=>{
    //     document.title = `你点击了${count}次title`
    // });

    // useEffect(()=>{
    //     document.title = `你点击了${count}次title`
    // },[count]);

    // count发生改变的时候 这个副作用函数才需要调用，所以这第二个参数[count] 的作用就是
    // 如果传的是[] ，则只会在页面加载的时候调用一次 可以用来处理网络请求的数据
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response =>response.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    },[])

    return (
        // <div>
        //     <p>你点击了{count}次 </p>
        //     <button onClick={()=>{
        //         setCount(count+1)
        //     }}>
        //         点这里
        //     </button>
        // </div>

        <div>
            {data.map((r:any)=>(
                <p>{r.phone}</p>
                // <Item email={r.email} />
            ))}
        </div>
    )
}

export default Example