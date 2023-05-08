import Sidebar from "@/Layouts/Sidebar";
import {useState} from "react";
export default function Article({categories}){
    const [paragraphs,setParagraphs]=useState(<div className="card">
        <div className="card-body">
            <div className="row mb-3">
                <label htmlFor="inputText" className="col-sm-2 col-form-label">Titre du
                    paragraph</label>
                <div className="col-sm-10">
                    <input type="text" name={'ptitle[]'} className="form-control"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword"
                       className="col-sm-2 col-form-label">Texte</label>
                <div className="col-sm-10">
                    <textarea className="form-control" name={'ptext[]'} style={{height:'100px'}}></textarea>
                </div>
            </div>
        </div>
    </div>);
    const addP=(event)=>{
        setParagraphs(<>
            {paragraphs}
            <div className="card">
                <div className="card-body">
                    <div className="row mb-3">
                        <label htmlFor="inputText" className="col-sm-2 col-form-label">Titre du paragraph</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name={'ptitle[]'}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Texte</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" name={'ptext[]'} style={{height:'100px'}}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>);
    };
    return (
        <Sidebar>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Ajouter un article</h5>
                                <form action={'/articles'} method={'post'} encType={'multipart/form-data'}>
                                    <div className="row mb-3">
                                        <label htmlFor="inputText" className="col-sm-2 col-form-label">Titre</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" name={'title'}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Snippet</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control" name={"snippet"} style={{height:'100px'}}></textarea>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Image de l'article</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="file" name={'image'} id="formFile"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label className="col-sm-2 col-form-label">Categorie</label>
                                        <div className="col-sm-10">
                                            <select className="form-select" name={'category'} aria-label="Default select example">
                                                {categories.map(category=>
                                                    <option value={category.id}>{category.name}</option>
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-outline-primary" onClick={addP}>Ajouter une paragraph</button>
                                    {paragraphs}
                                    <div className="row mb-3">
                                        <div className="col-sm-10">
                                            <button type="submit" className="btn btn-primary">Submit Form</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Sidebar>
    );
}