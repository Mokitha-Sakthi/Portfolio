import React from "react";
import Timeline from "./Timeline";

const experienceData = [
  { year: "July 2025", description: "Idea Club - Core Team" },
  { year: "April 2025 - June 2025", description: "Intern at TSQATAR" },
  { year: "March 2025", description: "Genesis IIC event - Cohead(logistic)" },
  { year: "February 2025", description: "Volunteer at SaaS Connect Summit." },
  { year: "October 2024", description: "Anokha Tech Fest - Logistics team member" }
];

export default function Experience() {
  return (
    <section id="about-experience">
      <div className="glass">
        <h2>Experience Timeline</h2>
        <Timeline items={experienceData} />
      </div>

      <div className="glass1">
        <h2>About My Experience</h2>
        <p> * Core Team Member, Idea Club
As a core member of the Idea Club. My role involved planning weekly discussions, and contributing to the overall strategic direction of the club's initiatives.</p>
        <p> * Co-Head (Logistics), Genesis IIC Event — March 2025
I served as the Co-Head for logistics during the Genesis Innovation and Incubation Council (IIC) event.I coordinated the movement of resources, managed setup schedules, and ensured smooth functioning of sessions. This role required constant communication with faculty, and student teams. Managing a team under tight deadlines strengthened my organizational and multitasking abilities.</p>
        <p>* Volunteer, SaaS Connect Summit — February 2025
Volunteering at the SaaS Connect Summit gave me the opportunity to network with professionals in the SaaS industry while supporting the operations of a major conference. I handled attendee coordination, badge distributions. The experience offered me a glimpse into event technology management and broadened my exposure to SAAS community.</p>
        <p>* Logistics Team Member, Anokha Tech Fest — October 2024
As a part of the logistics team for Anokha, our university’s renowned technical festival, I contributed to managing venue allocations, coordinating technical setups for workshops, and ensuring that the timeline of events was followed. The fast-paced environment helped me develop crisis-handling skills and taught me how to deliver under pressure.</p>
        <p> * Volunteer, National Service Scheme (NSS)
As an NSS volunteer, I participated in a range of community service initiatives including environmental drives, blood donation camps. Being part of NSS helped me stay grounded, cultivate empathy, and commit to giving back to society through meaningful service.</p>
      </div>
    </section>
  );
}
