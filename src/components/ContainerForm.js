import React, {useState} from "react";

export function ContainerForm({addElements}) {
    const [isChecked, setIsChecked] = useState(false);
    const postData = {}
    const [values, setValues] = useState(postData);

    function handlerChange(e) {
        const {name, value} = e.target;
        if (name === 'images') {
            let arrayImages = [value];
            setValues({...values, [name]: arrayImages})
        }
        else if (name === 'isTopNew'){
            setValues({...values, [name]:!isChecked})
            setIsChecked(!isChecked)
            console.log(values)
        }else if(values!== ""){
            setValues({...values,[name]:value})
            console.log(values)

        }
        else {
            setValues({...values, [name]: value})
        }
    }
    function handlerSubmit(e) {
        e.preventDefault();
        let date = new Date();
        setValues({created_at:date});
        addElements(values);
        e.target.reset();
        setIsChecked(false)
    }

    return (
        <div className='center'>
            <form className='container' onSubmit={handlerSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label color-primary">Título</label>
                    <input type="text" className="form-control border-orange" id="exampleInputEmail1" aria-describedby="emailHelp"
                           name="title" onChange={handlerChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label color-primary">Resumen</label>
                    <input type="text" className="form-control border-orange" id="exampleInputPassword1" name="brief"
                           onChange={handlerChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label color-primary">Contenido</label>
                    <textarea className="form-control border-orange" id="exampleFormControlTextarea1" rows="3" name="content"
                              onChange={handlerChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label color-primary">Imagenes</label>
                    <input type="text" className="form-control border-orange" id="exampleInputPassword1" name="images"
                           onChange={handlerChange} />
                </div>
                <div className="d-flex mb-3">
                    <div className="me-auto p-2">
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input border-orange" id="exampleCheck1" name="isTopNew"
                                   onChange={handlerChange}
                                   checked={isChecked}
                            />
                            <label className="form-check-label color-primary" htmlFor="exampleCheck1" >Noticia Top</label>

                        </div>
                    </div>
                    <div className="p-2"> <button type="submit" className="btn btn-primary" >Enviar</button></div>
                </div>
            </form>
        </div>
    )
}