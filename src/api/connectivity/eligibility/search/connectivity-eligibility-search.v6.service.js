angular.module('ovh-api-services').service('OvhApiConnectivityEligibilitySearchV6', ($resource, Poller) => {
  const eligibilitySearch = $resource('/connectivity/eligibility/search', {
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
    searchMeetings: {
      url: '/connectivity/eligibility/search/meetings',
      method: 'POST',
      isArray: false,
      params: {
        eligibilityReference: '@eligibilityReference',
        productCode: '@productCode',
      },
    },
  });

  eligibilitySearch.searchBuildingByLines = function ($scope, opts) {
    const url = '/connectivity/eligibility/search/buildingsByLine';

    $scope.$on('$destroy', () => {
      Poller.kill({
        scope: $scope.$id,
      });
    });

    return Poller.poll(
      url,
      null,
      {
        postData: {
          lineNumber: opts.lineNumber,
          status: opts.address,
        },
        successRule: {
          status(elem) {
            return elem.status === 'error' || elem.status === 'ok';
          },
        },
        scope: $scope.$id,
        method: 'post',
        retryMaxAttempts: 3,
      },
    );
  };

  return eligibilitySearch;
});
