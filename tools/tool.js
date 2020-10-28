const getZArray = (string, length, Z) => {
    let L = 0
    let R = 0
    let k = 0
    
    for(i= 0; i < length; i++){
        if(i > R){
            L = i
            R = i
            while (R < length && string[R-L] == string[R]) {
              R = R + 1
            }
            Z[i] = (R - L)
            R = R - 1
        }else{
            k = i - L
            if(Z[k] < (R - i) + 1 ){
              Z[i] = Z[k]
            }else{
              L = i
              while (R < length && string[R-L] == string[R]) {
                R = R + 1
              }//end while
              Z[i] = R - L
              R = R - 1
            }//endif
        }//endif
    }//end for
  }//end function
  
  const sumSimilarities = (string, length) => {
      let Z = []
      for(i = 0; i < length; i++){
        Z.push(0) 
      }
      getZArray(string, length, Z)
      let total = length
      for(i = 0; i < length; i++){
        total = total + Z[i]
      }//end for
      return total
  }//end function

  module.exports = {sumSimilarities, getZArray}