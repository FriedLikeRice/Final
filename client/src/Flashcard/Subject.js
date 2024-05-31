import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import English from './page/English';
import Math from './page/Maths';
import History from './page/History';
import Science from './page/Science';

const Subject = () => {
    return (
        <div className="container">
            <h1 className="my-4">Subjects</h1>
            <div className="row">
                <div className="col-12 col-md-6 my-2">
                    <English />
                </div>
                <div className="col-12 col-md-6 my-2">
                    <Math />
                </div>
                <div className="col-12 col-md-6 my-2">
                    <Science />
                </div>
                <div className="col-12 col-md-6 my-2">
                    <History />
                </div>
            </div>
        </div>
    );
}

export default Subject;