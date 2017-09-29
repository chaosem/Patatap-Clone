function onKeyDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    console.log(maxPoint);
    
    new Path.Circle(point, 10).fillColor = "orange";

}