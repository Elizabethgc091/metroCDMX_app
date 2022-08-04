import React from "react";
import {db} from "../../firebase/firebase";
import {addDoc, collection} from 'firebase/firestore'
import {ContainerForm} from "../ContainerForm";
import Swal from 'sweetalert2'


export function Form() {
    const addElements = async (objets)=>{
        const colRef = collection(db, "news_v2")
        await addDoc(colRef, objets);
        await Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Noticia enviada',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <div>
          <ContainerForm addElements={addElements}/>
        </div>
    )
}