import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@nana212tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
