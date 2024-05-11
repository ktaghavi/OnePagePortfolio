import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2022,
        name: 'EMRK Management',
        title: 'Property Manager',
        duration: 'Current',
        details: 'Manage a portfolio of commercial properties, lead lease negotiations and coordinate repairs. Develop systems to streamline operations, enhancing team productivity and efficiency. Create monthly and quarterly financial reports for executive management’s review. Preform bi-weekly walkthroughs of each property to ensure operational excellence. Plan team-building events and activities to create more synergy and boost moral.',
    },
    {
        year: 2019,
        name: 'City of Los Angeles - Aquatics Division',
        title: 'Administrative Clerk',
        duration: '3 years',
        details: 'Managed Human Resources (1500+ employees), Permits, and Social Media departments. Acted as Lead Clerk in absence of Senior Clerk. Created protocols for mass hiring events and digitized paperwork to streamline onboarding. Assisted in scheduling, planning, and organizing of team events/meetings. Responded to customer inquiries via phone, e-mail and at the public counter.',
    },
    {
        year: 2017,
        name: 'Seek Capital',
        title: 'Account Manager',
        duration: '2 years',
        details: 'Assisted clients in obtaining start-up or small business funding on a one-on-one basis. Performed Verification and Compliance calls with clients to start their funding process. Served as the main point of contact and guided clients throughout their funding process. Provided funding status reports to update clients as their file was funded by partner banks. Performed closing calls for clients upon completion of funding and transferred to Billing.',
    }
]
const Work = () => {
  return (
    <div id='experience' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work Experience</h1>
        {data.map((item, idx) => (
            <WorkItem 
                key={idx} 
                year={item.year} 
                name={item.name}
                title={item.title}
                duration={item.duration}
                details={item.details} 
            />
        ))}
    </div>
  )
}

export default Work