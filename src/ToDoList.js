import React, { useState } from "react";
import './ToDoList.css'

export default function ToDOList() {
    const [activity, setActivity] = useState("");    // need to store the value entered in text field  and its function to manipulate
    const [listData, setListData] = useState([]);    //need to store the tasks added , in way they are added so using list

    const setActivityHandler = (e) => {
        setActivity(e.target.value);
    }
    function addActivity() {
        //setListData([...listData, activity])     //... is spread operator  in setListData , 
        //task well be added to list  for that we will first copy all list as it is 
        //the valaue in activity variable , we will append to listData 

        //above line will work asynchronously so we will go by below way

        setListData((listData) => {
            const updatedList = [...listData, activity];
            setActivity('');    // after adding the activity , we need input text box should be empty so 
            console.log(updatedList);
            return updatedList;
        })
    }

    function removeActivity(i) {
        const updatedListData = listData.filter((elm, idp) => {
            return i != idp;
        })
        // console.log(updatedListData);
        setListData(updatedListData);
    }

    function removeAll() {
        setListData([]);
    }
    return <>
        <h1>TODO List for Pratiksha </h1>
        <div className="card">
            <div className="inputText">
                <input type="text" placeholder="Add your task " value={activity} onChange={setActivityHandler} />
                <button onClick={addActivity}>Add</button>
            </div>

            <h2>My Tasks</h2>

            {/*     to save the array to same list , for manipulate list we use map ,,,, read map more   will use completed button to remove the
                tasks completed 
                */}
            {
                listData != [] && listData.map((data, i) => {
                    return (<>
                        <div className="activityDone" key={i + 1}>
                            <div className="dataDisplay">{data}</div>
                            <div><button onClick={() => removeActivity(i)}>Done</button></div>
                        </div>
                    </>)
                })}

            {
                // listData.length >= 1 &&
                <div className="btn1"><button onClick={removeAll}>All Task Done</button></div>
            }


        </div>
    </>
}