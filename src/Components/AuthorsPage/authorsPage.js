import React from 'react';
import AuthorCard from '../AuthorCard/AuthorCard';
import './authorPageStyle.css';

const authorPage = () => {
    return (
        <div className="container">
            <div className="AuthorPage">
                <AuthorCard
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    name="Hung Sen Son"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor eros et turpis ultrices pellentesque."
                    dateOfBirth="1988"
                />
                <AuthorCard
                    src="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    name="Adham Hamza"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor eros et turpis ultrices pellentesque."
                    dateOfBirth="1980"
                    dateOfDeath="2014"
                />
                <AuthorCard
                    src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTN8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    name="Walter Diang"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor eros et turpis ultrices pellentesque."
                    dateOfBirth="1977"
                />
                <AuthorCard
                    src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjF8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    name="Ayman Banon"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor eros et turpis ultrices pellentesque."
                    dateOfBirth="1978"
                />
                <AuthorCard
                    src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzB8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    name="Masute Ozil"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor eros et turpis ultrices pellentesque."
                    dateOfBirth="1990"
                />
                <AuthorCard
                    src="https://images.unsplash.com/photo-1441786485319-5e0f0c092803?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzN8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    name="Samy Kabel"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor eros et turpis ultrices pellentesque."
                    dateOfBirth="1988"
                />
                <AuthorCard
                    src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODB8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    name="soliman Waled"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor eros et turpis ultrices pellentesque."
                    dateOfBirth="1978"
                />
                <AuthorCard
                    src="https://i.pinimg.com/originals/f4/07/96/f40796f816539dcb76f3c7e4fb750370.jpg"
                    name="Naguib Mahfouz"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor eros et turpis ultrices pellentesque."
                    dateOfBirth="1940"
                    dateOfDeath="2008"
                />
                <AuthorCard
                    src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                    name="Khaled Ahmed"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor eros et turpis ultrices pellentesque."
                    dateOfBirth="1980"
                />

            </div>
        </div>

    );
}

export default authorPage;