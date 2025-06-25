import { parseISO } from "date-fns";

export const convertEventsToDateEvents = (events = []) => {
  return events.map((event) => {//se mutan las siguientes propiedades de cada evento
    event.end = parseISO(event.end);
    event.start = parseISO(event.start);

    return event;
  });
};
