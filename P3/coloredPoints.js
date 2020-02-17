//ColoredPoints.js
//Vertex shader program

var VSHADER_SOURCE =
  attribute vec4 a_Position;
  void main(){
    gl_Position = a_Position;
    gl_PointSize = 10.0;
  }
//Fragment shader Program
var FSHADER_SOURCE =
  precision mediump float;
  uniform vec4 u_FragColor;
  void main(){
    gl_FragColor = u_FragColor;
  }

function main(){
  if(!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)){
    console.log('Failed to intialize shaders.');
    return;
  }
}
var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
