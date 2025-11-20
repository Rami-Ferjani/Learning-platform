"use client";
import React, { useState } from "react";
import {cn,getSubjectColor} from "@/lib/utils";
enum CallStatus{
  INACTIVE='INACTIVE',
  CONNECTING='CONNECTING',
  ACTIVE='ACTIVE',
  FINISHED='FINISHED'
}
 interface CompanionComponentProps {
        companionId: string;
        subject: string;
        topic?: string;
        name?: string;
        userName?: string;
        userImage?: string;
        style?: React.CSSProperties;
        voice?: string;
    }
const CompanionComponent = ({ companionId,subject,topic,name,userName,userImage,style,voice} :CompanionComponentProps}) => {
  const [callStatus,setCallStatus]=useState<CallStatus>(CallStatus.inactive);
  return (
    <section className="flex flex-col h-[70vh]">
      <section className="flex gap-8 max-sm:flex-col">
        <div className="companion-section">
          <div
            className="companion-avatar"
            style={{ backgroundColor: getSubjectColor(subject) }}
          >
            <div className={cn('absolute transition-opacity duration-1000')}></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CompanionComponent;
