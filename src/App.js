import React from 'react';
import List from './components/List'
import Content from './components/Content';

function App() {
  const data = [
    {
       title :'Ideas',
       items:[
           'im perumal laxman',
           
           'iam a frontend Developer'
       ]
   },
   {
       title:'Tasks ',
       items:[
           'task 3',
           'drag and drop'
       ]
   },
   {
       title:'Team mates',
       items:[
           'iyappan',
           'vaishnavi',
           'praveen'
       ]
   }
]
  
  return (
  <div>
        <div className="head">Dropdown</div>
                <div className = "App">
                    {/* <DragLists/> */}
                    <List />
                    <Content data = {data}/>
                    {/* <One/> */}
                  
          </div>
  </div> 
  )
}

export default App

