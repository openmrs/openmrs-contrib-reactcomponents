import CONSTANTS_TYPES from "./types";

// TODO: this all needs to be refactored, see: https://tickets.pih-emr.org/browse/UHM-3796

const fetchLabResultsEncounterType = () => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_ENCOUNTER_TYPE.REQUESTED,
} );

const fetchLabResultsEncounterTypeSucceeded = (payload) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_ENCOUNTER_TYPE.SUCCEEDED,
  payload
} );

const fetchLabResultsEncounterTypeFailed = (message) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_ENCOUNTER_TYPE.FAILED,
  error: {
    message: message
  }
} );

const fetchLabResultsEncounterRole = () => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_ENCOUNTER_ROLE.REQUESTED,
} );

const fetchLabResultsEncounterRoleSucceeded = (payload) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_ENCOUNTER_ROLE.SUCCEEDED,
  payload
} );

const fetchLabResultsEncounterRoleFailed = (message) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_ENCOUNTER_ROLE.FAILED,
  error: {
    message: message
  }
} );

const fetchTestOrderEncounterRole = () => ( {
  type: CONSTANTS_TYPES.TEST_ORDER_ENCOUNTER_ROLE.REQUESTED,
});

const fetchTestOrderEncounterRoleSucceeded = (payload) => ( {
  type: CONSTANTS_TYPES.TEST_ORDER_ENCOUNTER_ROLE.SUCCEEDED,
  payload
});

const fetchTestOrderEncounterRoleFailed = (message) => ( {
  type: CONSTANTS_TYPES.TEST_ORDER_ENCOUNTER_ROLE.FAILED,
  error: {
    message: message
  }
});

const fetchTestOrderEncounterType = () => ( {
  type: CONSTANTS_TYPES.TEST_ORDER_ENCOUNTER_TYPE.REQUESTED,
});

const fetchTestOrderEncounterTypeSucceeded = (payload) => ( {
  type: CONSTANTS_TYPES.TEST_ORDER_ENCOUNTER_TYPE.SUCCEEDED,
  payload
});

const fetchTestOrderEncounterTypeFailed = (message) => ( {
  type: CONSTANTS_TYPES.TEST_ORDER_ENCOUNTER_TYPE.FAILED,
  error: {
    message: message
  }
});

const fetchLabResultsDateConcept = () => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_DATE_CONCEPT.REQUESTED,
} );

const fetchLabResultsDateConceptSucceeded = (payload) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_DATE_CONCEPT.SUCCEEDED,
  payload
} );

const fetchLabResultsDateConceptFailed = (message) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_DATE_CONCEPT.FAILED,
  error: {
    message: message
  }
} );

const fetchLabResultsTestOrderType = () => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_TEST_ORDER_TYPE.REQUESTED,
} );

const fetchLabResultsTestOrderTypeSucceeded = (payload) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_TEST_ORDER_TYPE.SUCCEEDED,
  payload
} );

const fetchLabResultsTestOrderTypeFailed = (message) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_TEST_ORDER_TYPE.FAILED,
  error: {
    message: message
  }
} );

const fetchLabResultsDidNotPerformQuestion = () => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_DID_NOT_PERFORM_QUESTION.REQUESTED,
} );

const fetchLabResultsDidNotPerformQuestionSucceeded = (payload) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_DID_NOT_PERFORM_QUESTION.SUCCEEDED,
  payload
} );

const fetchLabResultsDidNotPerformQuestionFailed = (message) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_DID_NOT_PERFORM_QUESTION.FAILED,
  error: {
    message: message
  }
} );

const fetchLabResultsDidNotPerformReasonQuestion = () => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_DID_NOT_PERFORM_REASON_QUESTION.REQUESTED,
} );

const fetchLabResultsDidNotPerformReasonQuestionSucceeded = (payload) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_DID_NOT_PERFORM_REASON_QUESTION.SUCCEEDED,
  payload
} );

const fetchLabResultsDidNotPerformReasonQuestionFailed = (message) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_DID_NOT_PERFORM_REASON_QUESTION.FAILED,
  error: {
    message: message
  }
} );

const fetchLabResultsDidNotPerformReasonAnswer = (conceptUuid) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_DID_NOT_PERFORM_REASON_ANSWER.REQUESTED,
  conceptUuid
} );

const fetchLabResultsDidNotPerformReasonAnswerSucceeded = (payload) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_DID_NOT_PERFORM_REASON_ANSWER.SUCCEEDED,
  payload
} );

const fetchLabResultsDidNotPerformReasonAnswerFailed = (message) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_DID_NOT_PERFORM_REASON_ANSWER.FAILED,
  error: {
    message: message
  }
} );

const fetchLabResultsDidNotPerformAnswer = () => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_DID_NOT_PERFORM_ANSWER.REQUESTED,
} );

const fetchLabResultsDidNotPerformAnswerSucceeded = (payload) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_DID_NOT_PERFORM_ANSWER.SUCCEEDED,
  payload
} );

const fetchLabResultsDidNotPerformAnswerFailed = (message) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_DID_NOT_PERFORM_ANSWER.FAILED,
  error: {
    message: message
  }
} );

const fetchLabResultsTestOrderNumberConcept = () => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_TEST_ORDER_NUMBER_CONCEPT.REQUESTED,
} );

const fetchLabResultsTestOrderNumberConceptSucceeded = (payload) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_TEST_ORDER_NUMBER_CONCEPT.SUCCEEDED,
  payload
} );

const fetchLabResultsTestOrderNumberConceptFailed = (message) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_TEST_ORDER_NUMBER_CONCEPT.FAILED,
  error: {
    message: message
  }
} );

const fetchLabResultsTestLocationQuestion = () => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_TEST_LOCATION_QUESTION.REQUESTED,
} );

const fetchLabResultsTestLocationQuestionSucceeded = (payload) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_TEST_LOCATION_QUESTION.SUCCEEDED,
  payload
} );

const fetchLabResultsTestLocationQuestionFailed = (message) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_TEST_LOCATION_QUESTION.FAILED,
  error: {
    message: message
  }
} );

const fetchLabResultsTestLocationAnswer = (conceptUuid) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_TEST_LOCATION_ANSWER.REQUESTED,
  conceptUuid
} );

const fetchLabResultsTestLocationAnswerSucceeded = (payload) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_TEST_LOCATION_ANSWER.SUCCEEDED,
  payload
} );

const fetchLabResultsTestLocationAnswerFailed = (message) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_TEST_LOCATION_ANSWER.FAILED,
  error: {
    message: message
  }
} );

const fetchLabResultsEstimatedCollectionDateQuestion = () => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_ESTIMATED_COLLECTION_DATE_QUESTION.REQUESTED,
} );

const fetchLabResultsEstimatedCollectionDateQuestionSucceeded = (payload) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_ESTIMATED_COLLECTION_DATE_QUESTION.SUCCEEDED,
  payload
} );

const fetchLabResultsEstimatedCollectionDateQuestionFailed = (message) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_ESTIMATED_COLLECTION_DATE_QUESTION.FAILED,
  error: {
    message: message
  }
} );

const fetchLabResultsEstimatedCollectionDateAnswer = () => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_ESTIMATED_COLLECTION_DATE_ANSWER.REQUESTED,
} );

const fetchLabResultsEstimatedCollectionDateAnswerSucceeded = (payload) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_ESTIMATED_COLLECTION_DATE_ANSWER.SUCCEEDED,
  payload
} );

const fetchLabResultsEstimatedCollectionDateAnswerFailed = (message) => ( {
  type: CONSTANTS_TYPES.LAB_RESULTS_ESTIMATED_COLLECTION_DATE_ANSWER.FAILED,
  error: {
    message: message
  }
} );

const getDateAndTimeFormat = () => ( {
  type: CONSTANTS_TYPES.DATE.REQUESTED,
} );

const getDateAndTimeFormatSucceeded = (payload) => ( {
  type: CONSTANTS_TYPES.DATE.SUCCEEDED,
  payload
} );

const getDateAndTimeFormatFailed = (message) => ( {
  type: CONSTANTS_TYPES.DATE.FAILED,
  error: {
    message: message
  }
} );

export default {
  fetchLabResultsEncounterType,
  fetchLabResultsEncounterTypeSucceeded,
  fetchLabResultsEncounterTypeFailed,
  fetchLabResultsEncounterRole,
  fetchLabResultsEncounterRoleSucceeded,
  fetchLabResultsEncounterRoleFailed,
  fetchLabResultsDateConcept,
  fetchLabResultsDateConceptSucceeded,
  fetchLabResultsDateConceptFailed,
  fetchLabResultsDidNotPerformQuestion,
  fetchLabResultsDidNotPerformQuestionSucceeded,
  fetchLabResultsDidNotPerformQuestionFailed,
  fetchLabResultsDidNotPerformReasonQuestion,
  fetchLabResultsDidNotPerformReasonQuestionSucceeded,
  fetchLabResultsDidNotPerformReasonQuestionFailed,
  fetchLabResultsDidNotPerformReasonAnswer,
  fetchLabResultsDidNotPerformReasonAnswerSucceeded,
  fetchLabResultsDidNotPerformReasonAnswerFailed,
  fetchLabResultsDidNotPerformAnswer,
  fetchLabResultsDidNotPerformAnswerSucceeded,
  fetchLabResultsDidNotPerformAnswerFailed,
  fetchLabResultsTestOrderNumberConcept,
  fetchLabResultsTestOrderNumberConceptSucceeded,
  fetchLabResultsTestOrderNumberConceptFailed,
  fetchLabResultsTestLocationQuestion,
  fetchLabResultsTestLocationQuestionSucceeded,
  fetchLabResultsTestLocationQuestionFailed,
  fetchLabResultsTestLocationAnswer,
  fetchLabResultsTestLocationAnswerSucceeded,
  fetchLabResultsTestLocationAnswerFailed,
  fetchLabResultsEstimatedCollectionDateQuestion,
  fetchLabResultsEstimatedCollectionDateQuestionSucceeded,
  fetchLabResultsEstimatedCollectionDateQuestionFailed,
  fetchLabResultsEstimatedCollectionDateAnswer,
  fetchLabResultsEstimatedCollectionDateAnswerSucceeded,
  fetchLabResultsEstimatedCollectionDateAnswerFailed,
  fetchLabResultsTestOrderType,
  fetchLabResultsTestOrderTypeSucceeded,
  fetchLabResultsTestOrderTypeFailed,
  getDateAndTimeFormat,
  getDateAndTimeFormatSucceeded,
  getDateAndTimeFormatFailed,
  fetchTestOrderEncounterRole,
  fetchTestOrderEncounterRoleSucceeded,
  fetchTestOrderEncounterRoleFailed,
  fetchTestOrderEncounterType,
  fetchTestOrderEncounterTypeSucceeded,
  fetchTestOrderEncounterTypeFailed,
};
