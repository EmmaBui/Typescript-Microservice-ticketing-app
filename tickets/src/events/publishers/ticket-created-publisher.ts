import { Publisher, Subjects, TicketCreatedEvent } from '@nana212tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
