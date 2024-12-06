
import React from 'react'
import VolunteerHero from '../components/VolunteerHero'
import UpcomingFestives from '../components/UpcomingFestives'
import TestimonialGrid from '../components/TestimonialGrid'
import WorkTogether from '../components/WorkTogether'
import NavigationSection from '../components/NavigationSection'

function Homepage() {
  return (
    <>
    <VolunteerHero/>
    <NavigationSection/>
    <UpcomingFestives/>
    <TestimonialGrid/>
    <WorkTogether/>
  </>
  )
}

export default Homepage