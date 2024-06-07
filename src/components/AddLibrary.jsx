import React from 'react'

const AddLibrary = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                                <label htmlFor="" className="form-label">book title</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                                <label htmlFor="" className="form-label">category</label>
                               <select className="form-control">
                                <option value="fanstasy">fanstasy</option>
                                <option value="fiction">fiction</option>
                                <option value="thriller">thriller</option>
                                <option value="autobiography">autobiography</option>
                               </select>

                            </div>
                            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">

                            <label htmlFor="" className="form-label">publish year</label>
                            <input type="text" className="form-control" />
                            </div>
                            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">

                            <label htmlFor="" className="form-label">author name</label>
                            <input type="text" className="form-control" />
                            </div>
                            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">book description</label>
                        <textarea name="" id="" className="form-control"></textarea>

                            </div>
                            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                            <label htmlFor="" className="form-label">distributer name</label>
                            <input type="text" className="form-control" />
                            </div>
                            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                            <label htmlFor="" className="form-label">publisher name</label>
                            <input type="text" className="form-control" />
                            </div>
                            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                            <label htmlFor="" className="form-label">price</label>
                            <input type="text" className="form-control" />
                            </div>
                            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                            <label htmlFor="" className="form-label">edition</label>
                            <input type="text" className="form-control" />
                            </div>
                            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                                <button className="btn btn-primary">submit</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddLibrary