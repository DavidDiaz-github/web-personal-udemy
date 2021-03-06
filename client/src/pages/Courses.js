import React, { useEffect, useState } from 'react';
import { Row, Col, Spin, notification } from 'antd';
import { getCoursesApi } from '../api/courses';
import { Helmet } from 'react-helmet';

import PresentationCourse from '../components/Web/Courses/PresentationCourses';
import CoursesList from '../components/Web/Courses/CoursesList';

export default function Courses() {

    const [courses, setCourses] = useState(null);

    useEffect(() => {
        getCoursesApi()
            .then(response => {
                if (response?.code !== 200) {
                    notification['warning']({message: response.message})
                } else {
                    setCourses(response.courses)
                }
            })
            .catch(() => {
                notification['error']({message: 'Error del servidor.'})
            })
    }, [])

    return (
        <>
            <Helmet>
                <title>Cursos | web personal</title>
            </Helmet>
            <Row>
                <Col md={4} />
                <Col md={16}>
                    <PresentationCourse />

                    {!courses ? (
                        <Spin tip='Cargando curso' style={{textAlign:"center", width:"100%", padding:"20px"}} />
                    ) : (
                            <CoursesList courses={courses} />    
                    )}
                </Col>
                <Col md={4} />
            </Row>
        </>
    )
}
