import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import DetailEvent from "../pages/DetailEvent";
import GuestHome from "../pages/GuestHome";
import CreateEvent from "../pages/CreateEvent";
import EventInfo from "../pages/event-create/EventInfo";
import TicketAndTime from "../pages/event-create/TicketAndTime";
import SettingEvent from "../pages/event-create/SettingEvent";
import ApproveEvent from "../pages/event-create/ApproveEvent";
import InfoPaymentEvent from "../pages/event-create/InfoPaymentEvent";

export const listRouter = [
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/event-info", element: <EventInfo /> },
  { path: "/ticket-and-time", element: <TicketAndTime /> },
  { path: "/info-payment-event", element: <InfoPaymentEvent /> },
  { path: "/setting-event", element: <SettingEvent /> },
  { path: "/approve-event", element: <ApproveEvent /> },
  { path: "/event/create", element: <CreateEvent /> },
  { path: "/event/:id", element: <DetailEvent /> },
  { path: "/", element: <GuestHome /> },
];
