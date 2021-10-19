import React, { useEffect, useState } from 'react';
import Department from '../Department/Department';
import './Departments.css'

const Departments = () => {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        fetch('./data.department.json')
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, []);
    return (
        <div className='container-fluid'>
            <h1 className='text-primary my-3'>Departments</h1>
            {
                departments.map(department => <Department key={department.department_id} department={department}></Department>)
            }
        </div>
    );
};

export default Departments;