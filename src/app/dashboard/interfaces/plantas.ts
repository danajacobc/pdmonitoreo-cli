import { Countries } from "./pais";

export interface Plantas {
  id:           string;
  name:         string;
  lectures:     number;
  red_alert:    number;
  medium_alert: number;
  enabled:      boolean;
  pais:         Countries;
}

export interface PlantDTO {
  name:         string;
  lectures:     number;
  red_alert:    number;
  medium_alert: number;
  enabled:      boolean;
  pais:         string;
}

