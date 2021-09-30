import { Publisher, Subjects, TicketUpdatedEvent } from '@nana212tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
