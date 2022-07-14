import styles from './Hero.module.css'
import $ from 'jquery'
import { useEffect, useState } from 'react';
import img from './image.png'
import RegModal from '../../../Modals/RegModal';
import AOS from 'aos';
import "aos/dist/aos.css";

const Hero = () => {

	useEffect(() => {
        AOS.init({
          duration : 1400
        });
      }, []);

    useEffect(()=> {
        var s = document.getElementById('c').width = document.getElementById('c').height = 400,
		ctx = document.getElementById('c').getContext( '2d' ),
		
		opts = {
			globeRadius: 135,
			depth: 330,
			focalLength: 300,
			center: s / 2,
			
			rotYVel: .01,
			baseXRot: -0.41, // 23.5 deg
			afterYRot: -2,//Math.PI / 2,
		},
		
		rot = {
			y: {
				cos: Math.cos( opts.rotYVel ),
				sin: Math.sin( opts.rotYVel )
			},
			z: {
				cos: Math.cos( opts.baseXRot ),
				sin: Math.sin( opts.baseXRot )
			},
			ay: {
				cos: Math.cos( opts.afterYRot ),
				sin: Math.sin( opts.afterYRot )
			}
		};


function anim(){
		
	window.requestAnimationFrame( anim );
	
	ctx.fillStyle = '#1E40AA';
	ctx.fillRect( 0, 0, s, s );
	
	ctx.strokeStyle = '#8cd3ff';
	
	ctx.beginPath();
	
	for( var i = 0; i < lines.length; ++i ){
		
		var points = lines[ i ];
		
		for( var j = 0; j < points.length; ++j ){
			
			var point = points[ j ],
					x = point.x,
					y = point.y,
					z = point.z;
			
			var X = x;
			x = x * rot.y.cos - z * rot.y.sin;
			z = z * rot.y.cos + X * rot.y.sin;
			
			point.x = x;
			point.z = z;
			
			var Y = y;
			y = y * rot.z.cos - x * rot.z.sin;
			x = x * rot.z.cos + Y * rot.z.sin;
			
			X = x;
			x = x * rot.ay.cos - z * rot.ay.sin;
			z = z * rot.ay.cos + X * rot.ay.sin;
			
			z += opts.depth;
			
			var scale = opts.focalLength / z,
					sx = opts.center + scale * x,
					sy = opts.center + scale * y;
			
			point.sx = sx;
			point.sy = sy;
			
			//if( z < opts.depth )
				ctx[ j === 0 ? 'moveTo' : 'lineTo' ]( sx, sy );
		}
					
		// to prevent it from recalculating position of starting point twice but still closing the path
		//if( points[ 0 ].z < opts.depth ) 
			ctx.lineTo( points[ 0 ].sx, points[ 0 ].sy );
	}
	
	ctx.stroke();
	
	//ctx.fillStyle = 'green';
	//ctx.fill();
	
};
function reparseLines(){
	
	// the lines will just have indications for angles
	
	for( var i = 0; i < lines.length; ++i ){
		
		var points = [];
		for( var j = 0; j < lines[ i ].length; j += 2 ){
			
			var sinA = Math.sin( lines[ i ][ j ] * Math.PI ),
					cosA = Math.cos( lines[ i ][ j ] * Math.PI ),
					sinB = Math.sin( lines[ i ][ j + 1 ] * Math.PI / 2 ),
					cosB = Math.cos( lines[ i ][ j + 1 ] * Math.PI / 2 );
			
			points.push({
				x: opts.globeRadius * cosA * cosB,
				y: opts.globeRadius * sinB,
				z: opts.globeRadius * sinA * cosB
			});
		}
		
		lines[ i ] = points;
	}
}

// each point is 2 angles in half turns
// a, x[-1,1] = vertical circle
// x[-1,1], .5 = equator
// x[-1,1], a = parallel cirles at a
var lines = [
	// africa main continent
	[
		-.04, -.05,
		.01, -.05,
		.02, -.07,
		.06, -.03,
		.05, .03,
		.08, .12,
		.06, .18,
		.08, .25,
		.10, .35,
		.10, .39,
		.15, .37,
		.18, .33,
		.17, .28,
		.19, .28,
		.19, .23,
		.22, .19,
		.22, .06,
		.27, -.033,
		.29, -.15,
		.23, -.13,
		.175, -.33,
		.12, -.36,
		.1, -.32,
		.06, -.36,
		.06, -.405,
		.01, -.39,
		-.03, -.38,
		-.05, -.35,
		-.08, -.28,
		-.08, -.205,
		-.088, -.15,
	],
	// madagascar
	[0.245, 0.192, 0.245, 0.233, 0.241, 0.267, 0.249, 0.3, 0.266, 0.275, 0.287, 0.175, 0.274, 0.142],
	// antarctica
	[-0.984, 0.892, -0.918, 0.875, -0.748, 0.825, -0.662, 0.817, -0.559, 0.842, -0.559, 0.792, -0.46, 0.825, -0.402, 0.825, -0.414, 0.775, -0.311, 0.692, -0.328, 0.75, -0.324, 0.808, -0.34, 0.825, -0.233, 0.883, -0.023, 0.783, 0.196, 0.783, 0.237, 0.75, 0.254, 0.758, 0.287, 0.725, 0.414, 0.767, 0.464, 0.733, 0.48, 0.733, 0.489, 0.783, 0.505, 0.717, 0.551, 0.725, 0.6, 0.742, 0.625, 0.717, 0.645, 0.758, 0.72, 0.758, 0.79, 0.742, 0.934, 0.783, 0.909, 0.833, 0.922, 0.867],
	// south america
	[-0.427, -0.067, -0.39, -0.142, -0.373, -0.108, -0.373, -0.083, -0.332, -0.125, -0.291, -0.067, -0.282, -0.008, -0.188, 0.075, -0.192, 0.108, -0.212, 0.133, -0.208, 0.217, -0.229, 0.258, -0.254, 0.258, -0.262, 0.283, -0.262, 0.333, -0.287, 0.383, -0.303, 0.383, -0.303, 0.425, -0.336, 0.433, -0.348, 0.458, -0.344, 0.475, -0.369, 0.5, -0.361, 0.525, -0.373, 0.55, -0.357, 0.6, -0.394, 0.6, -0.402, 0.542, -0.394, 0.492, -0.41, 0.433, -0.394, 0.392, -0.406, 0.35, -0.39, 0.308, -0.39, 0.25, -0.381, 0.225, -0.419, 0.15, -0.419, 0.1, -0.456, 0.058, -0.435, 0.025, -0.435, -0.008, -0.427, -0.008, -0.427, -0.058],
	// that south american island in the south
	[-0.336, 0.575, -0.307, 0.575, -0.311, 0.6, -0.328, 0.6],
	// north 'murica
	[-0.435, -0.067, -0.456, -0.075, -0.493, -0.15, -0.505, -0.15, -0.526, -0.192, -0.571, -0.192, -0.629, -0.358, -0.604, -0.258, -0.641, -0.308, -0.641, -0.333, -0.687, -0.45, -0.674, -0.533, -0.707, -0.6, -0.72, -0.575, -0.736, -0.617, -0.814, -0.692, -0.847, -0.625, -0.889, -0.608, -0.893, -0.658, -0.905, -0.675, -0.905, -0.717, -0.88, -0.733, -0.909, -0.742, -0.946, -0.742, -0.975, -0.775, -0.955, -0.792, -0.926, -0.758, -0.893, -0.792, -0.703, -0.792, -0.654, -0.808, -0.621, -0.75, -0.522, -0.758, -0.497, -0.792, -0.456, -0.775, -0.39, -0.725, -0.472, -0.75, -0.431, -0.708, -0.476, -0.708, -0.513, -0.667, -0.456, -0.625, -0.435, -0.55, -0.435, -0.617, -0.414, -0.617, -0.435, -0.7, -0.406, -0.7, -0.377, -0.642, -0.353, -0.675, -0.307, -0.592, -0.307, -0.558, -0.373, -0.567, -0.291, -0.55, -0.282, -0.525, -0.344, -0.492, -0.353, -0.517, -0.402, -0.45, -0.419, -0.392, -0.435, -0.35, -0.427, -0.275, -0.447, -0.283, -0.472, -0.333, -0.48, -0.325, -0.526, -0.325, -0.53, -0.233, -0.493, -0.2, -0.485, -0.225, -0.468, -0.225, -0.48, -0.2, -0.468, -0.167, -0.452, -0.167, -0.452, -0.108],
		// cuba
		[-0.464, -0.242, -0.443, -0.25, -0.41, -0.233, -0.414, -0.2, -0.435, -0.242],
		// greenland
		[-0.373, -0.883, -0.365, -0.833, -0.32, -0.85, -0.282, -0.783, -0.295, -0.758, -0.262, -0.667, -0.229, -0.667, -0.229, -0.708, -0.208, -0.742, -0.163, -0.767, -0.113, -0.8, -0.105, -0.825, -0.093, -0.883, -0.064, -0.917, -0.13, -0.917, -0.204, -0.942, -0.282, -0.917, -0.353, -0.917],
		// iceland
		[-0.134, -0.742, -0.093, -0.733, -0.08, -0.7, -0.089, -0.683, -0.118, -0.683, -0.13, -0.708],
		// eurasia
		[-0.006, -0.492, -0.043, -0.475, -0.047, -0.408, -0.035, -0.408, -0.023, -0.4, -0.006, -0.425, 0.014, -0.458, 0.014, -0.475, 0.052, -0.483, 0.072, -0.458, 0.093, -0.442, 0.093, -0.417, 0.101, -0.425, 0.105, -0.425, 0.085, -0.467, 0.072, -0.492, 0.072, -0.5, 0.08, -0.5, 0.113, -0.458, 0.113, -0.442, 0.126, -0.4, 0.134, -0.433, 0.134, -0.45, 0.155, -0.45, 0.159, -0.4, 0.171, -0.4, 0.184, -0.417, 0.188, -0.375, 0.2, -0.408, 0.204, -0.4, 0.2, -0.367, 0.188, -0.342, 0.221, -0.225, 0.241, -0.183, 0.237, -0.15, 0.266, -0.158, 0.311, -0.2, 0.332, -0.242, 0.311, -0.275, 0.299, -0.258, 0.278, -0.308, 0.278, -0.325, 0.299, -0.292, 0.32, -0.292, 0.324, -0.275, 0.369, -0.283, 0.39, -0.225, 0.41, -0.25, 0.41, -0.2, 0.427, -0.083, 0.443, -0.117, 0.443, -0.167, 0.48, -0.225, 0.505, -0.242, 0.526, -0.15, 0.538, -0.175, 0.542, -0.108, 0.567, -0.15, 0.592, -0.1, 0.608, -0.117, 0.608, -0.175, 0.584, -0.192, 0.596, -0.233, 0.604, -0.192, 0.621, -0.233, 0.654, -0.267, 0.678, -0.342, 0.666, -0.392, 0.678, -0.442, 0.695, -0.4, 0.724, -0.425, 0.711, -0.442, 0.724, -0.475, 0.748, -0.475, 0.773, -0.542, 0.753, -0.617, 0.781, -0.65, 0.847, -0.667, 0.864, -0.692, 0.885, -0.692, 0.864, -0.633, 0.864, -0.55, 0.897, -0.608, 0.901, -0.65, 0.897, -0.683, 0.951, -0.683, 0.984, -0.708, 0.975, -0.733, 0.988, -0.783, 0.897, -0.783, 0.885, -0.783, 0.827, -0.783, 0.794, -0.817, 0.753, -0.792, 0.728, -0.8, 0.707, -0.825, 0.67, -0.8, 0.592, -0.792, 0.633, -0.85, 0.592, -0.85, 0.534, -0.917, 0.509, -0.883, 0.551, -0.867, 0.464, -0.833, 0.439, -0.817, 0.406, -0.8, 0.369, -0.783, 0.398, -0.792, 0.402, -0.75, 0.39, -0.75, 0.332, -0.783, 0.32, -0.8, 0.39, -0.858, 0.315, -0.867, 0.291, -0.808, 0.328, -0.775, 0.266, -0.75, 0.237, -0.733, 0.208, -0.692, 0.188, -0.733, 0.221, -0.733, 0.212, -0.767, 0.192, -0.767, 0.151, -0.808, 0.093, -0.767, 0.068, -0.708, 0.035, -0.708, 0.035, -0.65, 0.06, -0.65, 0.072, -0.633, 0.093, -0.633, 0.105, -0.692, 0.134, -0.725, 0.122, -0.683, 0.159, -0.675, 0.126, -0.65, 0.109, -0.583, 0.064, -0.6, 0.064, -0.642, 0.047, -0.642, 0.052, -0.6, 0.023, -0.567, -0.019, -0.567],
	// japan
	[0.72, -0.383, 0.769, -0.408, 0.777, -0.467, 0.786, -0.517, 0.777, -0.567, 0.798, -0.583, 0.786, -0.542, 0.81, -0.458, 0.786, -0.458, 0.786, -0.408, 0.748, -0.358, 0.736, -0.358, 0.724, -0.325],
	// ailarts'
	[0.781, 0.2, 0.753, 0.183, 0.757, 0.142, 0.736, 0.142, 0.715, 0.183, 0.707, 0.158, 0.687, 0.2, 0.637, 0.25, 0.625, 0.308, 0.641, 0.35, 0.637, 0.4, 0.67, 0.383, 0.687, 0.375, 0.728, 0.342, 0.753, 0.392, 0.765, 0.367, 0.777, 0.417, 0.806, 0.425, 0.827, 0.425, 0.847, 0.317, 0.806, 0.2, 0.802, 0.158, 0.786, 0.133],
	// philippines, papua new guinea and other islands
	[0.555, -0.075, 0.571, -0.05, 0.571, 0, 0.596, 0.025, 0.596, 0.058, 0.645, 0.092, 0.703, 0.092, 0.592, 0.092, 0.555, 0.025, 0.555, -0.008, 0.53, -0.05, 0.559, -0.033],
	[0.649, -0.067, 0.654, -0.033, 0.662, -0.017, 0.645, 0.05, 0.625, 0.033, 0.604, -0.008, 0.645, -0.067],
	[0.67, -0.2, 0.658, -0.175, 0.666, -0.125, 0.649, -0.083, 0.678, -0.117, 0.678, -0.083, 0.695, -0.05, 0.695, -0.117, 0.678, -0.158],
	[0.695, 0.05, 0.724, 0.042, 0.753, 0.05, 0.761, 0.092, 0.781, 0.092, 0.81, 0.092, 0.831, 0.125, 0.814, 0.083, 0.843, 0.025, 0.81, 0.058, 0.773, 0.025, 0.748, 0.042],
	[0.81, 0.467, 0.802, 0.483, 0.814, 0.517, 0.827, 0.475],
	[0.951, 0.4, 0.963, 0.45, 0.922, 0.5, 0.942, 0.533, 0.942, 0.5, 0.959, 0.492, 0.979, 0.433],
	[0.909, 0.242, 0.926, 0.267],
	[0.975, 0.192, 0.992, 0.208],
	[0.06, -0.875, 0.101, -0.842, 0.134, -0.842, 0.155, -0.9],
	// "great" britain
	[-0.019, -0.65, 0.002, -0.608, -0.014, -0.608, -0.039, -0.633],
	[-0.043, -0.583, -0.043, -0.575, -0.023, -0.567],
	// isle of the easter heads
	[-0.86, -0.208, -0.847, -0.183]
];



reparseLines();
anim();

    })
    
    
	const [showReg, setShowReg] = useState(false)

    return (
		<>

		{
			showReg?
			<RegModal close = {()=> {
				setShowReg(false)
			}}/>
			:''
		}
        
        <div class="relative sm:pt-[100px] pt-[90px] lg:pt-[100px] xl:pt-[150px] -mb-10 -mt-16 mx-auto block xl:pb-[155px] lg:pb-[100px] sm:pb-[95px] pb-[90px] bg-gradient-to-br from-blue-50 to-indigo-50">
          <div class=" xl:max-w-screen mx-auto block  relative ">
            <div class="flex flex-wrap mx-auto lg:-right-8    relative pointer-events-auto">
             
			 
			  <div data-aos="fade-up" data-aos-once='true' data-aos-delay ='300' class="w-full lg:w-6/12 lg:-mr-5 lg:ml-5 xl:mx-0 lg:-right-6 xl:right-0 2xl:-right-12  lg:top-[2px] xl:top-[-5px] relative  pointer-events-auto px-4 lg:pr-10 xl:pr-[55px] pr-4 ">
                <div class="hero-content  sm:px-0 px-3 text-center top-5 xl:top-5    relative block pointer-events-auto">
                  <h1
                    class="
                      text-dark
                      font-bold
                      text-3xl
                      sm:text-[42px]
                      lg:text-[34px]
                      xl:text-[38px]
                      leading-snug
                      sm:mb-[50px] mb-[40px]
                    "
                  >
                    Build, Manage & Optimize <br />
                    Your E-Commerce Listings <br />
                    <span class = ' xl:text-[33px] sm:block hidden relative ml-0.5'> with <span class = 'text-blue-700 ml-[2px] relative'>Spire Insights</span>.</span>
                  </h1>
                  <p class="text-base  mb-12 mt-2 sm:px-0 px-4 relative text-center block mx-auto text-body-color max-w-[480px]">
                    With our algorithms & management system, e-commerce businesses & sellers can now reposition themselves in online marketplaces. 
                  </p>

                      <button
					  onClick={()=> {
						setShowReg(true)
					  }}
                        class="
                          py-4
                          px-10
                          sm:px-20
                          lg:px-8
                          xl:px-10
                          items-center
                          justify-center
                          text-center text-white
                          hover:shadow-lg
                          to-blue-700
                          from-blue-600
                          bg-gradient-to-tr
                          hover:bg-opacity-90
                          rounded-lg
                          text-base
						  
						  lg:left-0 left-[0px]
						   xl:mx-auto mx-auto 
                          relative
                          font-semibold
                          z-[30]
                          block
                           pointer-events-auto
                           cursor-pointer
                        "
                      >
                        Get Started
                      </button>
                    
                  {/* <div class="clients pt-16 relative top-2">
                    <h6
                      class="
                        text-xs
                        -mt-2
                        text-center
                        -top-2
                        flex
                        items-center
                        text-body-color
                        mb-2 uppercase font-semibold
                      "
                    >
                      Some Of Our Clients
                      <span
                        class="w-8 h-[1px] bg-body-color inline-block ml-2"
                      ></span>
                    </h6>
                    <div class="flex items-center">
                      <div class="w-full py-3 mr-4">
                        <img src="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg" alt="ayroui" />
                      </div>
                      <div class="w-full py-3 mr-4">
                        <img
                          src="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
                          alt="graygrids"
                        />
                      </div>
                      <div class="w-full py-3 mr-4">
                        <img src="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg" alt="uideck" />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>


              <div data-aos="fade-up" data-aos-once='true' class="xl:w-6/12  xl:absolute xl:right-[85px] relative  lg:w-[400px]  sm:block hidden lg:ml-[85px] lg:mr-0  xl:-ml-8 lg:top-0  -top-5 mx-auto w-[240px] lg:px-4">
                <div class="lg:text-right lg:ml-auto mx-auto block">
                  <div class="relative  lg:inline-block block lg:mx-0 mx-auto z-10 pt-11 lg:pt-0">
                   

                   <img src = {img} class = 'relative 2xl:-left-[160px] xl:-left-[140px] lg:mx-0 mx-auto lg:-left-[60px] xl:top-8 top-12'/>
       

                  <canvas id='c' class = 'absolute xl:block hidden -top-[110px]  -right-[100px] rounded-bl-[70%] shadow-lg'/>


                    <span class="absolute right-2 lg:block hidden top-[370px] z-[-1]">
                      <svg
                        width="93"
                        height="93"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

		</>
    )
}

export default Hero