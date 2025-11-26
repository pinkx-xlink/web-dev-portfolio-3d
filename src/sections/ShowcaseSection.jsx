import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id="work" className='app-showcase'>
        <div className="w-full">
            <div className="showcaselayout">
                    {/* LEFT  */}
                    <div className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src='/images/project1.png' alt="Ryde" />
                        </div>
                        <div className='text-content'>
                            <h2>On demand rides made simple w/ a powerful user-friendly app called Ryde </h2>
                            <p className="text-white-50 md:text-xl">
                                an app built with ____ for fast user experiences ... talk about obstacles faced while building app, and tech used
                            </p>
                        </div>
                    </div>
                    {/* RIGHT  */}


            </div>
        </div>

    </div>
  )
}

export default ShowcaseSection