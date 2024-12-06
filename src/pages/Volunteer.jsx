
import React from 'react'
import EventHero from '../components/EventHero'
import VolunteerTestimonialGrid from '../components/VolunteerTestimonialGrid'
import WorkTogether from '../components/WorkTogether'
import UpcomingEvents from '../components/UpcomingEvents'


function Homepage() {
  const userId = 2; 
  return (
    <>
    <EventHero/>
    <UpcomingEvents userId={userId}/>
    <VolunteerTestimonialGrid/>
    <WorkTogether/>
  </>
  )
}

export default Homepage