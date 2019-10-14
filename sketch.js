var hypoball,database;
var position

function setup(){
    database=firebase.database();
    console.log(database);
    createCanvas(500,500);

    hypoball = createSprite(250,250,10,10);
    hypoball.shapeColor = "red";

    var hypoballPosition=database.ref('ball/position');
    hypoballPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){

    position=data.val();
    console.log(position.x);
    hypoball.x=position.x;
    hypoball.y=position.y;


}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
    'y':position.y+y
    
})
}
