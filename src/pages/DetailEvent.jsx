import React from "react";
import EventLayout from "../components/layout/EventLayout";
import InfoEvent from "../components/screens/detail-event/InfoEvent";
import MainDetailContent from "../components/screens/detail-event/MainDetailContent";

function DetailEvent() {
  return (
    <EventLayout>
      <InfoEvent />
      <MainDetailContent />
    </EventLayout>
  );
}

export default DetailEvent;
