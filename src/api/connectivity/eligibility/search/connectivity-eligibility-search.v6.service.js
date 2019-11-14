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
          status: opts.status,
        },
        successRule: {
          status(elem) {
            return elem.status === 'error' || elem.status === 'ok';
          },
        },
        scope: $scope.$id,
        method: 'POST',
        retryMaxAttempts: 3,
      },
    );
  };

  eligibilitySearch.searchBuildings = function ($scope, opts) {
    const url = '/connectivity/eligibility/search/buildings';

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
          streetCode: opts.streetCode,
          streetNumber: opts.streetNumber,
        },
        successRule: {
          status(elem) {
            return elem.status === 'error' || elem.status === 'ok';
          },
        },
        scope: $scope.$id,
        method: 'POST',
        retryMaxAttempts: 3,
      },
    );
  };

  eligibilitySearch.searchLines = function ($scope, opts) {
    const url = '/connectivity/eligibility/search/lines';

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
          streetCode: opts.streetCode,
          streetNumber: opts.streetNumber,
        },
        successRule: {
          status(elem) {
            return elem.status === 'error' || elem.status === 'ok';
          },
        },
        scope: $scope.$id,
        method: 'POST',
        retryMaxAttempts: 3,
      },
    );
  };

  eligibilitySearch.searchMeetings = function ($scope, opts) {
    const url = '/connectivity/eligibility/search/meetings';

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
          eligibilityReference: opts.eligibilityReference,
          productCode: opts.productCode,
        },
        successRule: {
          status(elem) {
            return elem.status === 'error' || elem.status === 'ok';
          },
        },
        scope: $scope.$id,
        method: 'POST',
        retryMaxAttempts: 3,
      },
    );
  };

  return eligibilitySearch;
});
