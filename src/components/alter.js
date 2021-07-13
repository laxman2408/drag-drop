// import React, { useState ,useEffect, useRef} from "react";

// function Alter({option}) {
 
//   const [list, setList] = useState(option); 
//     const [dragging, setDragging] = useState(false);

//     useEffect(() => {
//         setList(option);
//     }, [setList,option])

//     const dragItem = useRef();
//     const dragItemNode = useRef();
    
//     const handletDragStart = (e, item) => {
//         console.log('Starting to drag', item)

//         dragItemNode.current = e.target;
//         dragItemNode.current.addEventListener('dragend', handleDragEnd)
//         dragItem.current = item;

//         setTimeout(() => {
//             setDragging(true); 
//         },0)       
//     }
//     const handleDragEnter = (e, targetItem) => {
//         console.log('Entering a drag target', targetItem)
//         if (dragItemNode.current !== e.target) {
//             console.log('Target is NOT the same as dragged item')
//             setList(oldList => {
//                 let newList = JSON.parse(JSON.stringify(oldList))
//                 newList[targetItem.data1].items.splice(targetItem.itemI, 0, newList[dragItem.current.data1].items.splice(dragItem.current.itemI,1)[0])
//                 dragItem.current = targetItem;
//                 localStorage.setItem('List', JSON.stringify(newList));
//                 return newList
//             })
//         }
//     }
//     const handleDragEnd = (e) => {
//         setDragging(false);
//         dragItem.current = null;
//         dragItemNode.current.removeEventListener('dragend', handleDragEnd)
//         dragItemNode.current = null;
//     }
//     const getStyles = (item) => {
//         if (dragItem.current.data1 === item.data1 && dragItem.current.itemI === item.itemI) {
//             return "dnd-item current"
//         }
//         return "dnd-item"
//     }

//     const SubmitHandler=(e)=>{

//     }
  


//     if (list) {
//   return (
//     <div>
//       <h1 className="head">Drag-Drop</h1>
//       <div className="App">
//         {list.map((data,data1) => {
//           return (
//             <div className="box">
//               <div className="title">{data.title} </div>
//               {data.msg.map((item,itemI) => {
//                 return ( <div draggable="true"  onDragEnter={dragging?(e) => {handleDragEnter(e, {data1, itemI})}:null}  
//                 onDragStart={(e) => handletDragStart(e, {data1, itemI})} className={dragging?getStyles({data1, itemI}):"content"}>
//                   {item} 
//                 </div>);
                
//               })}
//               <div>
//               <input type="text" onSubmit={SubmitHandler} placeholder="Add content" style={{color:"white"}} className="input"></input>
//               <button className="button">Add</button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
//       }else { return null}
// }
// export default Alter;
