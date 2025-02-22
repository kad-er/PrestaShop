const faker = require('faker');

/**
 * Create new brand to use in brand form on BO
 * @class
 */
class BrandData {
  /**
   * Constructor for class BrandData
   * @param brandToCreate {Object} Could be used to force the value of some members
   */
  constructor(brandToCreate = {}) {
    /** @type {string} Name of the brand */
    this.name = brandToCreate.name || faker.company.companyName();

    /** @type {string} Logo name of the brand */
    this.logo = `${this.name.replace(/[^\w\s]/gi, '')}.png`;

    /** @type {string} Short description of the brand */
    this.shortDescription = brandToCreate.shortDescription || faker.lorem.sentence();

    /** @type {string} French short description of the brand */
    this.shortDescriptionFr = brandToCreate.shortDescriptionFr || this.shortDescription;

    /** @type {string} Description of the brand */
    this.description = brandToCreate.description || faker.lorem.sentence();

    /** @type {string} French description of the brand */
    this.descriptionFr = brandToCreate.descriptionFr || this.description;

    /** @type {string} Meta title of the brand */
    this.metaTitle = brandToCreate.metaTitle || this.name;

    /** @type {string} French meta title of the brand */
    this.metaTitleFr = brandToCreate.metaTitleFr || this.metaTitle;

    /** @type {string} Meta description of the brand */
    this.metaDescription = brandToCreate.metaDescription || faker.lorem.sentence();

    /** @type {string} French meta description of the brand */
    this.metaDescriptionFr = brandToCreate.metaDescriptionFr || this.metaDescription;

    /** @type {string} Meta Keywords of the brand */
    this.metaKeywords = brandToCreate.metaKeywords || [faker.lorem.word(), faker.lorem.word()];

    /** @type {string} French meta keywords of the brand */
    this.metaKeywordsFr = brandToCreate.metaKeywordsFr || this.metaKeywords;

    /** @type {string} Status of the brand */
    this.enabled = brandToCreate.enabled === undefined ? true : brandToCreate.enabled;

    /** @type {number} How much addresses has the brand */
    this.addresses = brandToCreate.addresses || 0;

    /** @type {number} How much products has the brand */
    this.products = brandToCreate.products || 0;
  }
}

module.exports = BrandData;
