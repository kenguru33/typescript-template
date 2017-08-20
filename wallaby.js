module.exports = function () {
    return {
      files: [
        'src/**/*.ts'
      ],
  
      tests: [
        'test/**/*.ts'
      ],
  
      env: {
        type: 'node'
      }
    };
  };