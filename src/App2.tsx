import React, { useEffect, useState } from 'react'
import Robot from './Robot';

const App2 = () => {

    const [robotGallery, setRobotGallery] = useState<any>([]);

  
  
    useEffect(() => {
      const fetchData = async () => {

          const responses = await fetch( "https://jsonplaceholder.typicode.com/users");
          const data = await responses.json();
          setRobotGallery(data);
        
      };
  
      fetchData();
    }, []);
  
    return (

          <div >
            {robotGallery.map((r: any) => (
              <Robot id={r.id} email={r.email} name={r.name} />
            ))}
          </div>
    );
}

export default App2