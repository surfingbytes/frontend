import type { ActionConfig } from "../../../data/lovelace/config/action";
import type { LovelaceBadgeConfig } from "../../../data/lovelace/config/badge";
import type { LegacyStateFilter } from "../common/evaluate-filter";
import type { Condition } from "../common/validate-condition";
import type { EntityFilterEntityConfig } from "../entity-rows/types";

export interface EntityFilterBadgeConfig extends LovelaceBadgeConfig {
  type: "entity-filter";
  entities: Array<EntityFilterEntityConfig | string>;
  state_filter?: Array<LegacyStateFilter>;
  conditions?: Array<Condition>;
}

export interface ErrorBadgeConfig extends LovelaceBadgeConfig {
  error: string;
}

export interface StateLabelBadgeConfig extends LovelaceBadgeConfig {
  entity: string;
  name?: string;
  icon?: string;
  image?: string;
  show_name?: boolean;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}
