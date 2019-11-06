angular.module('ovh-api-services').service('OvhApiConnectivityEligibilityV6', ($resource, OvhApiConnectivityEligibility) => $resource('/connectivity/eligibility', {
}, {
  buildingDetails: {
    url: '/connectivity/eligibility/search/buildingDetails',
    method: 'POST',
    isArray: false,
    cache: OvhApiConnectivityEligibility.cache,
  },
  testAddress: {
    url: '/connectivity/eligibility/test/address',
    method: 'POST',
    isArray: false,
    params: {
      streetCode: '@streetCode',
      streetNumber: '@streetNumber',
    },
  },
  testBuilding: {
    url: '/connectivity/eligibility/test/building',
    method: 'POST',
    isArray: false,
    params: {
      building: '@building',
    },
  },
  testLine: {
    url: '/connectivity/eligibility/test/line',
    method: 'POST',
    isArray: false,
    params: {
      lineNumber: '@lineNumber',
      status: '@status',
    },
  },
}));
