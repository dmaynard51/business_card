import React from 'react'

export default function Info() {
    return (
        <div className='info--div'>
            <img className='info--pic' src='./componants/dm_img.png'/>
            <h1>Daniel Maynard</h1>
            <h2>Frontend Developer</h2>
            <h3>danielmaynard.website</h3>
            <div className='info--div--imgs'>
                <a href = "mailto: daniel.maynard83@gmail.com">
                <img className='info--emailimg' src='./componants/email_img.png' />
                </a>
                
                    <a href='https://www.linkedin.com/in/daniel-maynard-168604156/'>
                    <img className='info--linkedinimg' src='./componants/linkedin_img.png' />
                    </a>
                
            </div>
        </div>
    )
}