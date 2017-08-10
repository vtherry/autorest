/*
 * Code generated by Microsoft (R) AutoRest Code Generator 1.2.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Describes Storage Resource Usage.
 *
 */
class Usage {
  /**
   * Create a Usage.
   * @member {string} unit Gets the unit of measurement. Possible values
   * include: 'Count', 'Bytes', 'Seconds', 'Percent', 'CountsPerSecond',
   * 'BytesPerSecond'
   * @member {number} currentValue Gets the current count of the allocated
   * resources in the subscription.
   * @member {number} limit Gets the maximum count of the resources that can be
   * allocated in the subscription.
   * @member {object} name Gets the name of the type of usage.
   * @member {string} [name.value] Gets a string describing the resource name.
   * @member {string} [name.localizedValue] Gets a localized string describing
   * the resource name.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Usage
   *
   * @returns {object} metadata of Usage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Usage',
      type: {
        name: 'Composite',
        className: 'Usage',
        modelProperties: {
          unit: {
            required: true,
            serializedName: 'unit',
            type: {
              name: 'Enum',
              allowedValues: [ 'Count', 'Bytes', 'Seconds', 'Percent', 'CountsPerSecond', 'BytesPerSecond' ]
            }
          },
          currentValue: {
            required: true,
            serializedName: 'currentValue',
            type: {
              name: 'Number'
            }
          },
          limit: {
            required: true,
            serializedName: 'limit',
            type: {
              name: 'Number'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'Composite',
              className: 'UsageName'
            }
          }
        }
      }
    };
  }
}

module.exports = Usage;