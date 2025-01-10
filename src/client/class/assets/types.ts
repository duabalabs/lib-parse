import Parse from "parse";

/**
 * Interface representing a assets.
 * Extends Parse.Object to include Parse-specific properties and methods.
 */
export interface IAssets extends Parse.Object {
  /**
   * The type of the asset (e.g., Stock, ETF, Forex).
   * @type {string}
   */
  assetType?: "Stock" | "ETF" | "Forex";

  /**
   * The symbol representing the asset.
   * @type {string}
   */
  symbol?: string;

  /**
   * The unit price of the asset at the time of purchase.
   * @type {number}
   */
  unitPrice?: number;

  /**
   * The quantity of the asset purchased.
   * @type {number}
   */
  quantity?: number;

  /**
   * The date the asset was purchased.
   * @type {string}
   */
  datePurchased?: string;

  /**
   * The current value of the asset.
   * @type {number}
   */
  currentValue?: number;

  /**
   * The trade algorithm used (applicable for Forex).
   * @type {string}
   */
  tradeAlgorithm?: string;

  /**
   * Indicates whether the bot is active for this asset.
   * @type {boolean}
   */
  botActive?: boolean;

  /**
   * The project associated with the asset (if applicable).
   * @type {Parse.Object}
   */
  project?: Parse.Object;

  /**
   * Any additional metadata related to the asset.
   * @type {Record<string, any>}
   */
  metadata?: Record<string, any>;
}
