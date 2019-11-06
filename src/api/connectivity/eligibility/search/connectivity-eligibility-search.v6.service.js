angular.module('ovh-api-services').service('OvhApiConnectivityEligibilitySearchV6', ($resource) => $resource('/connectivity/eligibility/search', {
}, {
  searchCities: {
    url: '/connectivity/eligibility/search/cities',
    method: 'POST',
    isArray: false,
    params: {
      zipCode: '@zipCode',
    },
  },
  searchStreets: {
    url: '/connectivity/eligibility/search/streets',
    method: 'POST',
    isArray: false,
    params: {
      inseeCode: '@inseeCode',
    },
  },
  searchBuildings: {
    url: '/connectivity/eligibility/search/buildings',
    method: 'POST',
    isArray: false,
    params: {
      streetCode: '@streetCode',
      streetNumber: '@streetNumber',
    },
  },
  searchLines: {
    url: '/connectivity/eligibility/search/lines',
    method: 'POST',
    isArray: false,
    params: {
      streetCode: '@streetCode',
      streetNumber: '@streetNumber',
    },
  },
  searchBuildingByLines: {
    url: '/connectivity/eligibility/search/buildingsByLine',
    method: 'POST',
    isArray: false,
    params: {
      lineNumber: '@lineNumber',
      status: '@status',
    },
  },
  searchMeetings: {
    url: '/connectivity/eligibility/search/meetings',
    method: 'POST',
    isArray: false,
    params: {
      eligibilityReference: '@eligibilityReference',
      productCode: '@productCode',
    },
  },
}));
