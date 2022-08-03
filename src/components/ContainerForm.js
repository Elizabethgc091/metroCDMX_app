import React, {useState} from "react";

export function ContainerForm({addElements}) {
    const [isChecked, setIsChecked] = useState(false);
    const postData = {
        title: "",
        brief: "",
        content: "",
        images: [],
        isTopNew: isChecked,
        created_at: new Date()
    }
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
        }
        else {
            setValues({...values, [name]: value})
        }
    }
    function handlerSubmit(e) {
        e.preventDefault();
        let date = new Date();
        setValues({...values, ["created_at"]:date});
        addElements(values);
        e.target.reset();
        setIsChecked(false)
    }




    return (
        <div>

            <form className='container' onSubmit={handlerSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           name="title" onChange={handlerChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">brief</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name="brief"
                           onChange={handlerChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">content</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="content"
                              onChange={handlerChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">images</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name="images"
                           onChange={handlerChange} />
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" name="isTopNew"
                           onChange={handlerChange}
                           checked={isChecked}
                        />
                    {isChecked ? isChecked : "NOT "}
                    <label className="form-check-label" htmlFor="exampleCheck1" >isTopNew</label>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}