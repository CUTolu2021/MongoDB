const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500; // Default to 500 if no status code is set
  res.status(statusCode).json({
      success: false,
      status: statusCode,
      message: err.message || 'Internal Server Error',
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined // Show stack trace in development
  });
};

module.exports = errorHandler;


function findUniq(arr) {
  count = {}

  for(let i in arr){
    count[arr[i]] = (count[arr[i]]||0)+1
    console.log(`${arr[i]}: ${count[i]}`)
  }
  for(let i in count){
    console.log(`${i}: ${count[i]}`)
    if(count[i] === 1){
      return i
    }
  }
}
console.log(findUniq([1, 1, 1, 2, 1, 1]))
