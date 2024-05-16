import { Countries } from "./pais";

export interface Plantas {
  name:         string;
  lectures:     number;
  red_alert:    number;
  medium_alert: number;
  enabled:      boolean;
  pais:         Countries;
}
