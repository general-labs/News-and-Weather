/**
 * Utility Module
 */

// Generic Response Object.
export const createResponse = async (statusCode, message) => {
  return {
    statusCode: statusCode,
    headers: {
      // 'content-type': 'application/raw',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(message)
  };
};
