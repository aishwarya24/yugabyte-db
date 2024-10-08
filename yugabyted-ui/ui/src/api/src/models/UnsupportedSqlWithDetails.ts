// tslint:disable
/**
 * Yugabyte Cloud
 * YugabyteDB as a Service
 *
 * The version of the OpenAPI document: v1
 * Contact: support@yugabyte.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// eslint-disable-next-line no-duplicate-imports
import type { ErrorsAndSuggestionsDetails } from './ErrorsAndSuggestionsDetails';


/**
 * Schema for Suggested refactoring tab in Migrate Schema page
 * @export
 * @interface UnsupportedSqlWithDetails
 */
export interface UnsupportedSqlWithDetails  {
  /**
   * 
   * @type {ErrorsAndSuggestionsDetails[]}
   * @memberof UnsupportedSqlWithDetails
   */
  suggestions_errors?: ErrorsAndSuggestionsDetails[];
  /**
   * 
   * @type {string}
   * @memberof UnsupportedSqlWithDetails
   */
  unsupported_type?: string;
  /**
   * 
   * @type {number}
   * @memberof UnsupportedSqlWithDetails
   */
  count?: number;
}



