class Food{
    constructor(){
        this.foodstock=0
        this.lastfed;
        this.image=loadImage("Images/Milk.png");
    }

    updatefoodstock(foodstock){

        this.foodstock=foodstock;

    }


    getfedtime(lastfed){

        this.lastfed=lastfed;


    }

deductfood(){

    if(this.foodstock>0){
        this.foodstock=this.foodstock-1;

    }

getfoodstock(){

    return this.foodstock

}

display(){
    var x=80;
    var y=100;
    this.image(this.image,720,220,70,70);

    if(this.foodstock!==0){
        for(var i=0;i<this.foodstock;i++){
            if(i%10===0){
                x=80;
                y=y+50;
            }

            image(this.image,x,y,50,50)
            x=x+30;
        }
    }
}

}


}