
var fixture_def_circle = {
    friction: 0.8,     // usually in the range [0,1]
    restitution: 0.3,  // (elasticity) usually in the range [0,1]
    density: 1.0       // usually in kg/m^2
}

var fixture_def_char = {
    friction: 0.4,     // usually in the range [0,1]
    restitution: 0.1,  // (elasticity) usually in the range [0,1]
    density: 0.1       // usually in kg/m^2
}

var gravity = 14;

var motor_speed = -0.03;

// -------------------------

const R2D = 180.0/Math.PI;
const TWO_PI = Math.PI * 2.0;
const X = 0;
const Y = 1;



function map(value,  istart, istop, ostart, ostop) {
    return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
 }


planck.internal.Settings.maxPolygonVertices = 48; // default is 12



(function setup() {


    var pl = planck, Vec2 = pl.Vec2;


    var world = pl.World({
        gravity: Vec2(0, gravity)
    });

    var _A = {
        name: "A",
        width: 17.2,
        height: 29.6,
        x: 7.7,
        y: 33.9,
        cx: 16.3,
        cy: 48.7,
        vecs: [
            [19.498, 33.889, 24.941, 63.515, 20.037, 63.515, 19.093, 56.96, 19.498, 33.889],
            [19.498, 33.889, 19.093, 56.96, 13.515, 56.96, 13.178, 33.889, 19.498, 33.889],
            [13.178, 33.889, 13.515, 56.96, 12.639, 63.515, 7.735, 63.515, 13.178, 33.889]
        ],
        body: undefined,
        svg_line: 'M-3.713,14.81L-8.61,14.81L-3.16,-14.81L3.159,-14.81L8.61,14.81L3.712,14.81L2.764,8.255L-2.844,8.255L-3.713,14.81ZM-2.054,3.831L2.053,3.831L0.079,-8.886L0,-8.886L-2.054,3.831Z'
    };

    var _P = {
        name: "P",
        width: 16.4,
        height: 29.7,
        x: 27.8,
        y: 33.9,
        cx: 36.0,
        cy: 48.7,
        vecs: [
            [27.806, 33.889, 32.861, 51.416, 32.861, 63.583, 27.806, 63.498, 27.806, 33.889],
            [27.806, 33.889, 35.069, 33.889, 39.13, 34.378, 41.995, 35.912, 43.697, 38.625, 44.253, 42.653, 43.697, 46.68, 41.995, 49.393, 39.13, 50.927, 35.069, 51.416, 32.861, 51.416, 27.806, 33.889]
        ],
        body: undefined,
        svg_line: 'M-8.215,14.771L-8.215,-14.85L-0.948,-14.85C5.292,-14.85 8.215,-12.401 8.215,-6.082C8.215,0.237 5.292,2.686 -0.948,2.686L-3.16,2.686L-3.16,14.85L-8.215,14.771ZM-3.16,-1.58L-1.185,-1.58C2.133,-1.58 3.16,-2.606 3.16,-6.161C3.16,-9.715 2.133,-10.742 -1.185,-10.742L-3.16,-10.742L-3.16,-1.58Z'
    }

    var _R = {
        name: "R",
        width: 16.5,
        height: 29.6,
        x: 47.0,
        y: 33.9,
        cx: 55.3,
        cy: 48.7,
        vecs: [
            [59.168, 50.067, 63.515, 63.498, 58.375, 63.498, 54.735, 51.247, 59.168, 50.067],
            [47.0, 33.889, 54.112, 33.889, 56.134, 34.007, 57.887, 34.361, 59.37, 34.968, 60.583, 35.861, 61.527, 37.041, 62.201, 38.541, 62.605, 40.377, 62.74, 42.568, 62.656, 44.22, 62.42, 45.635, 62.066, 46.815, 61.611, 47.792, 61.072, 48.584, 60.465, 49.225, 59.825, 49.714, 59.168, 50.067, 54.735, 51.247, 52.123, 51.399, 47.0, 33.889],
            [47.0, 33.889, 52.123, 51.399, 52.056, 63.515, 47.0, 63.515, 47.0, 33.889]
        ],
        body: undefined,
        svg_line: 'M-3.198,14.81L-8.255,14.81L-8.255,-14.81L-1.145,-14.81C4.622,-14.81 7.465,-12.441 7.465,-6.121C7.465,-1.383 5.648,0.593 3.91,1.383L8.255,14.81L3.12,14.81L-0.514,2.568C-1.145,2.647 -2.25,2.725 -3.119,2.725L-3.198,14.81ZM-3.198,-1.541L-1.383,-1.541C1.383,-1.541 2.41,-2.566 2.41,-6.121C2.41,-9.676 1.383,-10.703 -1.383,-10.703L-3.198,-10.703L-3.198,-1.541Z'
    }

    var _I = {
        name: "I",
        width: 5.1,
        height: 29.6,
        x: 66.5,
        y: 33.9,
        cx: 69.0,
        cy: 48.7,
        vecs: [
            [71.571, 34.11, 66.515, 33.889, 66.515, 63.515, 71.571, 63.515, 71.571, 34.11]
        ],
        body: undefined,
        svg_line: 'M-2.527,14.815L-2.527,-14.806L2.528,-14.814L2.528,14.815L-2.527,14.815Z'
    }

    var _A2 = {
        name: "A2",
        width: 17.2,
        height: 29.6,
        x: 75.6,
        y: 33.9,
        cx: 84.2,
        cy: 48.7,
        vecs: [
            [87.36, 33.889, 92.803, 63.515, 87.899, 63.515, 86.955, 56.96, 87.36, 33.889],
            [87.36, 33.889, 86.955, 56.96, 81.377, 56.96, 81.04, 33.889, 87.36, 33.889],
            [81.04, 33.889, 81.377, 56.96, 80.501, 63.515, 75.597, 63.515, 81.04, 33.889]
        ],
        body: undefined,
        svg_line: 'M-3.713,14.81L-8.609,14.81L-3.159,-14.81L3.159,-14.81L8.609,14.81L3.713,14.81L2.844,8.255L-2.764,8.255L-3.713,14.81ZM-2.053,3.831L2.053,3.831L0.079,-8.886L-0.001,-8.886L-2.053,3.831Z'
    }


    var _chars = [_A, _P, _R, _I, _A2];



    // convert the vecs to actually Vec2 so planckjs can use them
    // and normalize them so they are around the 0,0 position,
    // where 0,0 is the center of the char
    for (var i = 0; i < _chars.length; i++) {
        var _c = _chars[i];

        for (var j = 0; j < _c.vecs.length; j++) {

            var vecs = _c.vecs[j];
            var normalized_vecs = [];

            for (var k = 0; k < vecs.length; k += 2) {

                var nx = (vecs[k] - _c.cx) / 100;
                var ny = (vecs[k+1] - _c.cy) / 100;

                normalized_vecs.push(new Vec2(nx, ny));
            }

            _c.vecs[j] = normalized_vecs;

        }
        // normalize the other values
        _c.width /= 100;
        _c.height /= 100;

        // 0 to 1
        _c.x /= 100;
        _c.y /= 100;
        _c.cx /= 100;
        _c.cy /= 100;

        // -1 to 1
        _c.x *= 2.0; _c.x -= 1;
        _c.y *= 2.0; _c.y -= 1;
        _c.cx *= 2.0; _c.cx -= 1;
        _c.cy *= 2.0; _c.cy -= 1;

    }


     // . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    // GROUND

    var ground = world.createBody();

    var container = world.createDynamicBody({
      allowSleep: false,
      position: Vec2(0, 0)
    });

    var r = 15.0;
    var d = r*2.0;
    var n = 92;
    var a_inc = TWO_PI / n;

    var box_size = 0.5;

    for (var i = 0; i < n; i++) {

        var a = i * a_inc;

        var x = Math.cos(a) * r;
        var y = Math.sin(a) * r;

        var pos = Vec2(x, y);


        friction    = fixture_def_circle.friction;
        restitution = fixture_def_circle.restitution;
        density     = fixture_def_circle.density;

        if (i == 0) {
            // a = TWO_PI / 6;
            friction = 1.0;
        }


        container.createFixture(pl.Box(box_size, box_size, pos, a), {
            friction: friction,
            restitution: restitution,
            density: density
        });


    }



    world.createJoint(pl.RevoluteJoint({
      motorSpeed: motor_speed,
      maxMotorTorque: 1e8,
      enableMotor: true,
    }, ground, container, Vec2(0, 0)));

    // . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .



    function create_body(name, vecs_arrays, pos) {

        var body = world.createBody({
            position : pos,
            type : 'dynamic',
            allowSleep : false
        });

        body.name = name;

        for (var i = 0; i < vecs_arrays.length; i++) {
            var vecs = vecs_arrays[i];
            body.createFixture(pl.Polygon(vecs), fixture_def_char);
        }

        return body;
    }


    for (var i = 0; i < _chars.length; i++) {
        var _c = _chars[i];

        // scale the vecs
        for (var j = 0; j < _c.vecs.length; j++) {
            for (var k = 0; k < _c.vecs[j].length; k++) {
                _c.vecs[j][k].x *= d;
                _c.vecs[j][k].y *= d;
            }
        }

        _c.body = create_body(_c.name, _c.vecs, new Vec2(_c.cx * r, _c.cy * r));

    }


    // . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .



    window.setInterval(function() {
        world.step(1 / 60);
    }, 1000 / 240);


    function draw_apria_logos() {
        update_apria_svg_logos();
        window.requestAnimationFrame(draw_apria_logos);
    }

    window.requestAnimationFrame(draw_apria_logos);


    function update_apria_svg_logos() {


        d3.selectAll(".apria_logo > *").remove();

        d3.selectAll(".apria_logo")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", "0 0 100 100")
        ;


        d3.selectAll(".apria_logo")
        .append("circle")
        .attr("cx", "50%")
        .attr("cy", "50%")
        .attr("style", "fill:transparent;")
        .attr("r", 50);

        var colors = ["rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(0,255,255)"];

        for (var i = 0; i < _chars.length; i++) {
            var _c = _chars[i];

            var color = colors[i];

            var x = map(_c.body.getPosition().x, -r, r, 0, 100);
            var y = map(_c.body.getPosition().y, -r, r, 0, 100);

            var a = _c.body.getAngle() * R2D;


            d3.selectAll(".apria_logo")
            .append("g")
            .append("path")
            .attr("d", _c.svg_line)
            .attr("id", _c.name)
            .attr("style", "fill:white;")
            .attr("transform", "translate("+x+", "+y+") rotate("+a+", 0, 0)")
            ;


        }

    }


})();

