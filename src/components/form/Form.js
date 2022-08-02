import React from "react";
import {db} from "../../firebase/firebase";
import {addDoc, collection} from 'firebase/firestore'
import {ContainerForm} from "../ContainerForm";


export function Form() {
    const addElements = async (objets)=>{
        const colRef = collection(db, "news_v2")
        await addDoc(colRef, objets);
        alert("Se agrego con exito")
    }
    return (
        <div>
          <ContainerForm addElements={addElements}/>
        </div>
    )
}