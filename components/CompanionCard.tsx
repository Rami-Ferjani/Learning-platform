import React from "react";
interface CompanionCardProps{
    id:string;
    name:string;
    topic:string;
    subject:string;
    duration:number;
    color:string;
    
}
const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProps) => {
  return <div>CompanionCard</div>;
};

export default CompanionCard;
