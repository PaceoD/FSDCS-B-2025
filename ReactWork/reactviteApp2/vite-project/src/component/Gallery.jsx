import React from 'react'
import Profile from './Profile'
import './profile.css'

function Gallery() {
  const students = [
    { myname: "Rahul", branch: "CS", section: "B", college: "ABES" },
    { myname: "Priya", branch: "IT", section: "A", college: "ABES" },
    { myname: "Vikram", branch: "CS", section: "C", college: "ABES" }
  ]

  return (
    <div className="gallery">
      {students.map((ele, index) => (
        <Profile
          key={index}
          myname={ele.myname}
          branch={ele.branch}
          section={ele.section}
          college={ele.college}
        />
      ))}
    </div>
  )
}

export default Gallery
