# Vectors

A vector class with the following utilities:

## Internal vars
this.x (float) and this.y (float)

## Prototype methods
### magnitude
  returns float

### normalize
  returns normalized Vector

### subtract
  takes (Vector)  
  returns Vector

## Static methods
### dotProduct
  takes (Vector, Vector)  
  returns float

### indexFromVector
  takes (index, width)  
  returns vector

### linearInterpolation
  takes (known, v1, v2)  
  returns float

### bilinearInterpolation
  takes (goalV, dotProducts)  
  returns a linearInterpolation (float)

