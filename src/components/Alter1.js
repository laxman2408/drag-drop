// import React, {useState, useRef , useEffect} from 'react'



// function Alter1({data}) {
   


//   const [list, setList] = useState(data);
//   const [dragging, setDragging] = useState(false);

//   useEffect(() => {
//     setList(data);
//   },[setList,data]);

//   const dragItem = useRef();
//   const dragItemNode = useRef();

//   const handletDragStart = (e, item) => {
//     console.log("Starting to drag", item);

//     dragItemNode.current = e.target;
//     dragItemNode.current.addEventListener("dragend", handleDragEnd);
//     dragItem.current = item;

//     setTimeout(() => {
//       setDragging(true);
//     }, 0);
//   };

//   const handleDragEnter = (e, targetItem) => {
//     console.log("Entering a drag target", targetItem);
//     if (dragItemNode.current !== e.target) {
//       console.log("Target is NOT the same as dragged item");
//       setList((oldList) => {
//         let newList = JSON.parse(JSON.stringify(oldList));
//         newList[targetItem.grpI].items.splice(
//           targetItem.itemI,
//           0,
//           newList[dragItem.current.grpI].items.splice(
//             dragItem.current.itemI,
//             1
//           )[0]
//         );
//         dragItem.current = targetItem;
//         localStorage.setItem("List", JSON.stringify(newList));
//         return newList;
//       });
//     }
//   };

//   const handleDragEnd = (e) => {
//     setDragging(false);
//     dragItem.current = null;
//     dragItemNode.current.removeEventListener("dragend", handleDragEnd);
//     dragItemNode.current = null;
//   };

  
//   const getStyles = (item) => {
//     if (
//       dragItem.current.grpI === item.grpI &&
//       dragItem.current.itemI === item.itemI
//     ) {
//       return "content current";
//     }
//     return "content";
//   };

//    if (list)
//   return (
//     <div className="App">
//       {list.map((grp, grpI) => {
//         return (
//           <div key={grp.title} className="box" onDragEnter={dragging && !grp.items.length?(e) => handleDragEnter(e,{grpI, itemI: 0}):null}>
//             <div className="title">{grp.title}</div>
//             <div>
//               {grp.items.map((item, itemI) => {
//                 return (
//                   <div
//                     draggable
//                     onDragStart={(e) => {
//                         handletDragStart(e, { grpI, itemI });
//                     }}
//                     // onDragEnd = {(e) => handleDragEnd(e,{grpI,itemI})}
//                     onDragEnter={dragging?(e) => {handleDragEnter(e, {grpI, itemI})}:null}
//                     key={item}
//                     className={dragging?getStyles({grpI, itemI}):"content"}
//                   >
//                     <p>{item}</p>
//                   </div>
//                 );
//               })}
//               {/* <div className ='item' style ={{paddingTop:'20px',display:'flex'}} >
//                                 <input type='text' placeholder = 'Add Title' onChange = {handleChange} value = {Addname} style ={{marginRight:'10px'}}/>
//                                 <button style ={{padding:'7px'}} onSubmit = {submitHandler}><FaPlus/></button>
//                             </div> */}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );else { return null}
// }

  
 

// export default Alter1;