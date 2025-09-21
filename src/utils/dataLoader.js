// Data loading utility for the car encyclopedia
import carsData from '../data/cars.json';
import powertrainsData from '../data/powertrains.json';
import transmissionsData from '../data/transmissions.json';
import bodyAndClassData from '../data/body_and_class.json';
import suspensionData from '../data/suspension_and_frame.json';
import wheelsData from '../data/wheels_and_sizes.json';
import tireTypesData from '../data/tire_types.json';
import manufacturersData from '../data/manufacturers_and_models.json';

export const loadCars = () => carsData.cars.vehicles;
export const loadPowertrains = () => powertrainsData.powertrains.types;
export const loadTransmissions = () => transmissionsData.transmissions.types;
export const loadBodyTypes = () => bodyAndClassData.body_and_class.body_styles;
export const loadMarketSegments = () => bodyAndClassData.body_and_class.market_segments;
export const loadSuspensionFront = () => suspensionData.suspension_and_frame.front;
export const loadSuspensionRear = () => suspensionData.suspension_and_frame.rear;
export const loadFrameTypes = () => suspensionData.suspension_and_frame.frame;
export const loadWheelSizes = () => wheelsData.wheels_and_sizes.popular_sizes_by_rim_inch;
export const loadTireUsageTypes = () => tireTypesData.tire_types.usage_types;
export const loadTireSeasonTypes = () => tireTypesData.tire_types.season_types;
export const loadManufacturers = () => manufacturersData.manufacturers_and_models.regions;

// Helper function to get unique values from vehicle data
export const getUniqueValues = (vehicles, key) => {
  const values = new Set();
  vehicles.forEach(vehicle => {
    if (vehicle[key]) {
      if (typeof vehicle[key] === 'object') {
        Object.values(vehicle[key]).forEach(value => {
          if (Array.isArray(value)) {
            value.forEach(v => values.add(v));
          } else {
            values.add(value);
          }
        });
      } else {
        values.add(vehicle[key]);
      }
    }
  });
  return Array.from(values);
};
