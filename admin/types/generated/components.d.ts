import type { Schema, Attribute } from '@strapi/strapi';

export interface AmenityAmenities extends Schema.Component {
  collectionName: 'components_amenity_amenities';
  info: {
    displayName: 'amenities';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface UnitUnit extends Schema.Component {
  collectionName: 'components_unit_units';
  info: {
    displayName: 'Unit';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Area: Attribute.String;
    Name: Attribute.String;
    Price: Attribute.String;
    Bed: Attribute.String;
    Bath: Attribute.String;
    Availability: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'amenity.amenities': AmenityAmenities;
      'unit.unit': UnitUnit;
    }
  }
}
