var rusheaSlider;
var grapeSlider;
var brassSlider;

function setup(){
    createCanvas(600,400);
    background(0);
    
    //this creates this sliders createSlider(min,max,default)
    rusheaSlider = createSlider(0,255,113);
    rusheaSlider.position(20,20);
    grapeSlider = createSlider(0,255,232);
    grapeSlider.position(20,40);
    brassSlider = createSlider(0,255,90);
    brassSlider.position(20,60);
}

function draw(){
    redValue = rusheaSlider.value();
    greenValue = grapeSlider.value();
    blueValue = brassSlider.value();
    background(redValue,greenValue,blueValue);
}