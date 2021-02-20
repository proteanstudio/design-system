import { EventEmitter } from '../../stencil-public-runtime';
export declare class ProteanClickElsewhere {
  isCurrentlyFocused: boolean;
  eventList: string[];
  hostElement: any;
  change: EventEmitter;
  connectedCallback(): void;
  disconnectedCallback(): void;
  handler: (event: MouseEvent) => void;
  findActiveElement(element?: Element): Element;
  shadowEventTarget(event: Event): EventTarget;
  shadowContains(element: EventTarget): boolean;
  originatesInSlots(node: EventTarget): boolean;
}
